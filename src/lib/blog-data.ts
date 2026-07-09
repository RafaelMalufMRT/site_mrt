export type BlogPost = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: Array<{
    heading?: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nossa-historia",
    title: "Nossa história",
    eyebrow: "Institucional",
    excerpt:
      "A MRT nasceu de um varejo real. Antes de ser uma empresa de outsourcing, fomos um varejista.",
    date: "2026-07-09",
    readTime: "3 min de leitura",
    category: "MRT Marketplace",
    intro: "A MRT nasceu de um varejo real.",
    sections: [
      {
        paragraphs: [
          "Antes de ser uma empresa de outsourcing, fomos um varejista. Digitalizamos nossa própria operação nos marketplaces, erramos, ajustamos e construímos uma metodologia que funcionou de verdade.",
          "Quando os resultados apareceram, outros negócios começaram a perguntar como fazíamos. Tentamos ensinar: cursos, mentorias, consultorias. Funcionava, mas algo estava errado.",
          "Percebemos que a dor real do empresário não era aprender. Era não ter tempo nem equipe para executar. Ele não queria um professor. Queria que fizessem por ele, enquanto focava no produto, no estoque, no que realmente é o negócio dele.",
        ],
      },
    ],
  },
];

export const upcomingBlogTopics = [
  "SEO e GEO para anúncios em marketplaces",
  "Como criar melhores imagens para anúncios",
  "Otimização de catálogo, preço e campanhas",
];
