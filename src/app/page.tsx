import HomePage from "@/components/HomePage";
import { brand } from "@/lib/site-data";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MRT Marketplace",
    url: "https://mrtmarketplace.com.br",
    email: brand.contactEmail,
    telephone: `+${brand.whatsappNumber}`,
    areaServed: "BR",
    description:
      "Outsourcing de Marketplace para indústrias e fabricantes, com implantação, operação e crescimento em canais como Mercado Livre, Amazon, Shopee, Magalu e TikTok Shop.",
    serviceType: "Outsourcing de Marketplace",
    sameAs: ["https://mrtmarketplace.com.br"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </>
  );
}
