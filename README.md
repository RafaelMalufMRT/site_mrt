# MRT Marketplace Home

Home institucional premium em Next.js, TypeScript e CSS/Tailwind enxuto para a MRT Marketplace.

## Rodar localmente

Se o seu terminal não tiver `pnpm` instalado, use o script local:

```bash
./dev.sh
```

Ele usa o Node.js e o pnpm já disponíveis no runtime local do Codex e abre o site em:

```txt
http://localhost:3000
```

Se você já tiver `pnpm` instalado globalmente, também pode rodar:

```bash
pnpm install
pnpm dev
```

## Conteúdo editável

Os principais textos, métricas, cases, planos, depoimentos, FAQ e links ficam em:

```txt
src/lib/site-data.ts
```

## Formulário de contato

A rota `POST /api/contact` valida o formulário e envia e-mail via Resend quando `RESEND_API_KEY` está configurada. Sem a chave, a rota responde em modo de demonstração para manter a experiência da interface pronta.

Copie `.env.example` para `.env.local` e ajuste:

```bash
CONTACT_EMAIL=contato@mrtmarketplace.com.br
CONTACT_FROM="MRT Marketplace <seu-remetente@dominio.com>"
RESEND_API_KEY=sua_chave_resend
NEXT_PUBLIC_CONTACT_EMAIL=contato@mrtmarketplace.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5541999999999
```

O WhatsApp abre com a mensagem:

```txt
Olá, quero agendar um diagnóstico de marketplace para minha empresa.
```
