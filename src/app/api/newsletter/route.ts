import { NextResponse } from "next/server";

export const runtime = "nodejs";

const NEWSLETTER_SCRIPT_URL =
  process.env.NEWSLETTER_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbxQr2JRUi9hC5ePuaJudB4JLmhwkBFiVA8EPkQCEh0ObEgUPFKVteA01dapdp8tXk-ecQ/exec";
const NEWSLETTER_SCRIPT_SECRET =
  process.env.NEWSLETTER_SCRIPT_SECRET ?? "mrt-newsletter-2026";

type NewsletterPayload = {
  email?: string;
};

type ScriptResponse = {
  ok?: boolean;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: NewsletterPayload;

  try {
    body = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json(
      { message: "Envie o e-mail em JSON." },
      { status: 400 },
    );
  }

  const email = clean(body.email);

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Informe um e-mail válido." },
      { status: 422 },
    );
  }

  try {
    const response = await fetch(NEWSLETTER_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        secret: NEWSLETTER_SCRIPT_SECRET,
        email,
        date: new Date().toISOString(),
      }),
    });
    const result = (await response.json()) as ScriptResponse;

    if (!response.ok || result.ok === false) {
      throw new Error(result.message ?? "Erro ao salvar no Google Sheets.");
    }
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível salvar agora.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Pronto. Você entrou na lista de posts da MRT.",
  });
}
