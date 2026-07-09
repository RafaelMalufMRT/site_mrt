import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrtmarketplace.com.br"),
  title: "MRT Marketplace | Departamento de Marketplace Terceirizado",
  description:
    "A MRT implanta, opera e escala canais em marketplaces para indústrias e fabricantes. Outsourcing de Marketplace com método, dados e gestão contínua.",
  openGraph: {
    title: "MRT Marketplace | Departamento de Marketplace Terceirizado",
    description:
      "Outsourcing de Marketplace para indústrias e fabricantes com implantação, operação, dados e gestão contínua.",
    url: "https://mrtmarketplace.com.br",
    siteName: "MRT Marketplace",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
