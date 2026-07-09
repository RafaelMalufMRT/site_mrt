import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  whatsapp?: string;
  site?: string;
  skuRange?: string;
  marketplaces?: string[];
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "company",
  "email",
  "whatsapp",
  "skuRange",
  "marketplaces",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(payload: Required<ContactPayload>) {
  const rows = [
    ["Nome", payload.name],
    ["Empresa", payload.company],
    ["Cargo", payload.role || "Não informado"],
    ["E-mail", payload.email],
    ["WhatsApp", payload.whatsapp],
    ["Site", payload.site || "Não informado"],
    ["Quantidade aproximada de SKUs", payload.skuRange],
    ["Marketplaces de interesse", payload.marketplaces.join(", ")],
    ["Mensagem", payload.message || "Não informada"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111827;">
      <h1 style="font-size: 22px;">Novo diagnóstico MRT Marketplace</h1>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #dce5f2; padding: 10px; font-weight: 700; width: 240px;">${escapeHtml(
                  label,
                )}</td>
                <td style="border: 1px solid #dce5f2; padding: 10px;">${escapeHtml(
                  value,
                )}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Envie os dados do formulário em JSON." },
      { status: 400 },
    );
  }

  const payload: Required<ContactPayload> = {
    name: clean(body.name),
    company: clean(body.company),
    role: clean(body.role),
    email: clean(body.email),
    whatsapp: clean(body.whatsapp),
    site: clean(body.site),
    skuRange: clean(body.skuRange),
    marketplaces: Array.isArray(body.marketplaces)
      ? body.marketplaces.map(clean).filter(Boolean)
      : [],
    message: clean(body.message),
  };

  const missingField = requiredFields.find((field) => {
    const value = payload[field];
    return Array.isArray(value) ? value.length === 0 : !value;
  });

  if (missingField) {
    return NextResponse.json(
      { message: "Preencha os campos obrigatórios do diagnóstico." },
      { status: 422 },
    );
  }

  const contactEmail =
    process.env.CONTACT_EMAIL ?? "luciano@mrtmarketplace.com.br";
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM ?? "MRT Marketplace <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Solicitação recebida. Nossa equipe entrará em contato em breve.",
      },
      { status: 202 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: payload.email,
        subject: `Novo diagnóstico MRT - ${payload.company}`,
        html: buildEmailHtml(payload),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Não foi possível enviar o e-mail agora." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Não foi possível enviar o e-mail agora." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Diagnóstico enviado. A equipe MRT vai retornar em breve.",
  });
}
