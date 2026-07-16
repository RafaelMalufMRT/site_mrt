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
  manifest: "/site.webmanifest?v=20260716",
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260716", sizes: "any" },
      { url: "/favicon.svg?v=20260716", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=20260716", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=20260716", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=20260716", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico?v=20260716" }],
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
