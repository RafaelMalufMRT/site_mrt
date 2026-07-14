export const brand = {
  name: "MRT Marketplace",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "luciano@mrtmarketplace.com.br",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541992432183",
  whatsappLabel: "+55 41 99243-2183",
  whatsappMessage:
    "Olá, quero agendar um diagnóstico de marketplace para minha empresa.",
  currentSite: "https://mrtmarketplace.com.br/",
};

export const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Resultados", href: "#resultados" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Investimento", href: "#investimento" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export const metrics = [
  { value: "R$7M+", label: "vendidos pelos clientes operados" },
  { value: "10+", label: "marketplaces integrados" },
  { value: "100%", label: "operação terceirizada" },
  { value: "1.500+", label: "SKUs operados" },
  { value: "5.000+", label: "anúncios criados e otimizados" },
  { value: "20+", label: "clientes ativos" },
];

export const problemCards = [
  {
    title: "Entrar é fácil. Operar é complexo.",
    text: "Cada canal tem regras, cadastro, reputação, logística, campanhas e indicadores próprios.",
  },
  {
    title: "Equipe interna custa caro.",
    text: "Contratar, treinar e gerenciar especialistas em marketplace exige tempo, método e investimento.",
  },
  {
    title: "Anúncio publicado não garante venda.",
    text: "Sem SEO, imagens, preço, campanhas e otimização contínua, o canal vira tentativa e erro.",
  },
  {
    title: "O dono vira operador.",
    text: "O dono deveria focar em estoque, qualidade e expedição, não em dominar o know-how de vendas online.",
  },
];

export const companyResponsibilities = [
  "Produto",
  "Estoque",
  "Qualidade",
  "Expedição",
  "Disponibilidade",
];

export const mrtResponsibilities = [
  "Contas",
  "Integrações",
  "Cadastro",
  "Anúncios",
  "Imagens",
  "SEO / GEO",
  "Precificação",
  "Campanhas",
  "Emissão de notas e etiquetas",
  "SAC",
  "Indicadores",
  "Growth",
];

export const operationRouteSteps = [
  "Diagnóstico",
  "Contas e integrações",
  "Catálogo e anúncios",
  "Imagens e SEO/GEO",
  "Precificação",
  "Campanhas e afiliados",
  "Notas e etiquetas",
  "SAC e reputação",
  "Dashboard e indicadores",
  "Lucro líquido e performance",
  "Otimização com IA",
  "Growth",
];

export const comparisonModels = [
  {
    name: "Agência",
    description: "Ajuda em campanhas, criativos e mídia.",
    limitation: "Normalmente não assume a rotina completa da operação.",
  },
  {
    name: "Consultoria",
    description: "Ajuda no diagnóstico e direcionamento.",
    limitation: "A execução continua dependendo da estrutura interna.",
  },
  {
    name: "Equipe interna",
    description: "Dá controle total.",
    limitation: "Exige contratação, treinamento, gestão e curva de aprendizado.",
  },
  {
    name: "MRT Marketplace",
    description: "Implanta, opera, acompanha e escala.",
    limitation:
      "Um departamento terceirizado para transformar marketplace em canal real de vendas.",
    featured: true,
  },
];

export const resultCases = [
  {
    slug: "casa-decoracao-modelos-padrao",
    sector: "Casa e Decoração",
    headline: "De produção personalizada a R$87 mil/mês",
    marketplaces: ["Mercado Livre", "Leroy Merlin"],
    period: "6 meses",
    result: "R$87.248,60/mês",
    data: [75, 4312.5, 9872.6, 12864.7, 38613.6, 87248.6],
    problem:
      "A operação vendia produtos de forma muito personalizada, o que dificultava escala, padronização comercial e previsibilidade nos marketplaces.",
    solution:
      "A MRT reorganizou a oferta em modelos padrão com maior procura, estruturou o catálogo e transformou a produção em uma linha mais simples de anunciar, comparar e vender.",
    caseResult:
      "Com a padronização dos produtos e a operação orientada por dados, o canal saiu da validação inicial e chegou a R$87.248,60/mês em 6 meses.",
    tractionTime: "4 meses",
  },
  {
    slug: "acessorios-automotivos-escala",
    sector: "Acessórios automotivos",
    headline: "De operação ativa a R$185 mil/mês",
    marketplaces: ["Magalu", "Mercado Livre", "Shopee", "TikTok Shop"],
    period: "8 meses",
    result: "R$185.928,00/mês",
    data: [10370, 44000, 48302, 95161, 125595, 135094, 165432, 185928],
    problem:
      "A empresa já vendia online, mas ainda tinha pouca escala, baixa previsibilidade de crescimento e espaço para melhorar catálogo, anúncios e rotina comercial.",
    solution:
      "Foi aplicado o método MRT Sales Engine, combinando estruturação de anúncios, leitura de dados, otimização contínua e acompanhamento de performance por canal.",
    caseResult:
      "A operação ganhou consistência em poucos ciclos e chegou a R$185.928,00/mês no oitavo mês acompanhado.",
    tractionTime: "2 meses",
  },
  {
    slug: "casa-decoracao-tendencia",
    sector: "Casa e Decoração",
    headline: "De tendência emergente a R$317 mil/mês",
    marketplaces: ["Mercado Livre", "Shopee", "Leroy Merlin"],
    period: "8 meses",
    result: "R$317.161,00/mês",
    data: [4312, 15432, 51328, 90324, 140324, 230589, 269034, 317161],
    problem:
      "O negócio precisava operar um mercado novo, ainda em fase de tendência, com desafios de adaptação logística e escala comercial.",
    solution:
      "A MRT ajustou a operação logística do produto, estruturou a presença nos canais e preparou o catálogo para capturar a demanda crescente com mais eficiência.",
    caseResult:
      "Com produto adequado à operação e gestão contínua dos canais, o case atingiu R$317.161,00/mês em 8 meses.",
    tractionTime: "4 meses",
  },
];

export const methodologyPhases = [
  {
    name: "IGNITION",
    label: "Implantação",
    time: "30 a 60 dias",
    text: "Estruturação da operação: contas, integrações, ERP, estoque, fiscal, logística, catálogo, validações e preparação da base.",
    chips: ["Contas", "Integrações", "Catálogo", "Fiscal", "Logística"],
  },
  {
    name: "TRACTION",
    label: "Entrada em produção",
    time: "30 a 60 dias",
    text: "Operação no ar, primeiros dados reais, publicação dos anúncios, leitura de acessos, conversão, preço e comportamento de mercado.",
    chips: ["Publicação", "Dados reais", "Primeiras vendas", "Ajustes"],
  },
  {
    name: "RAMP UP",
    label: "Otimização",
    time: "30 a 60 dias",
    text: "SEO, GEO, melhoria de anúncios, campanhas, concorrência, expansão de portfólio e decisões baseadas em dados.",
    chips: ["SEO / GEO", "Ads", "Concorrência", "Otimização"],
  },
  {
    name: "GROWTH",
    label: "Gestão contínua",
    time: "Contínuo",
    text: "Rotina de KPIs, campanhas, SAC, reputação, precificação, expansão de canais e crescimento sustentável.",
    chips: ["KPIs", "SAC", "Campanhas", "Escala"],
  },
];

export const technologyCards = [
  "Vendas",
  "Mensagens",
  "Anúncios",
  "Indicadores",
  "SEO / GEO",
  "Campanhas",
];

export const pricingPlans = [
  {
    name: "MRT Lite",
    skuLimit: 50,
    channelLimit: 3,
    implementation: "R$12.000",
    monthly: "R$4.000/mês",
    description:
      "Para iniciar uma operação enxuta, com foco nos canais principais.",
  },
  {
    name: "MRT Growth",
    skuLimit: 100,
    channelLimit: 5,
    implementation: "R$18.000",
    monthly: "R$6.000/mês",
    description:
      "Para empresas com catálogo maior e expansão para múltiplos marketplaces.",
  },
  {
    name: "MRT Scale",
    skuLimit: 500,
    channelLimit: 10,
    implementation: "R$30.000",
    monthly: "R$10.000/mês",
    description:
      "Para operações mais robustas, com alto volume de catálogo e canais.",
  },
];

export const skuOptions = [50, 100, 500];
export const channelOptions = [3, 5, 10];

export const testimonials = [
  {
    quote:
      "A MRT trouxe método para uma operação que antes dependia de tentativa e erro. Hoje temos rotina, indicadores e canais estruturados.",
    name: "Carlos Mendes",
    role: "Diretor Comercial",
    company: "Setor automotivo",
  },
  {
    quote:
      "O maior ganho foi tirar a complexidade da nossa equipe interna. Conseguimos focar em produto e entrega enquanto a operação digital avançava.",
    name: "Marina Costa",
    role: "Gestor de E-commerce",
    company: "Casa e decoração",
  },
  {
    quote:
      "A implantação foi organizada, com clareza de etapas e acompanhamento próximo. Isso nos deu segurança para tratar marketplaces como canal estratégico.",
    name: "Eduardo Lima",
    role: "Sócio-diretor",
    company: "Consumo recorrente",
  },
];

export const faqs = [
  {
    question: "A MRT é uma agência de marketing?",
    answer:
      "Não. A MRT atua como um departamento terceirizado de marketplace. Implantamos, operamos, acompanhamos indicadores e conduzimos a rotina dos canais, enquanto sua empresa mantém foco em produto, estoque e expedição.",
  },
  {
    question: "Para quem a MRT é indicada?",
    answer:
      "Para indústrias e importadores que têm produto, estoque e marca própria, mas querem vender ou escalar em marketplaces sem montar uma equipe interna completa.",
  },
  {
    question: "O que acontece na implantação?",
    answer:
      "A implantação estrutura a base da operação: contas, integrações, catálogo, anúncios, logística, fiscal, validações e preparação dos canais para entrada em produção.",
  },
  {
    question: "Quando começa o gerenciamento contínuo?",
    answer:
      "O gerenciamento contínuo começa após a conclusão e aprovação formal da implantação, quando os canais estão prontos para operação e acompanhamento recorrente.",
  },
  {
    question: "A MRT garante faturamento?",
    answer:
      "Não prometemos faturamento garantido. Marketplace depende de produto, preço, estoque, concorrência, reputação, demanda e estratégia. O que entregamos é método, operação, acompanhamento e otimização contínua para aumentar as chances de crescimento sustentável.",
  },
  {
    question: "Quem cuida da expedição?",
    answer:
      "A empresa cliente mantém produto, estoque e expedição. A MRT conduz a operação dos marketplaces, incluindo emissão de notas e etiquetas, acompanhamento dos pedidos e orientação operacional para envio.",
  },
  {
    question: "Quais marketplaces vocês operam?",
    answer:
      "A MRT opera canais como Mercado Livre, Amazon, Shopee, Magalu, TikTok Shop e outros marketplaces relevantes conforme o segmento e estratégia da empresa.",
  },
  {
    question: "Preciso ter ERP?",
    answer:
      "Não necessariamente. O diagnóstico identifica o estágio atual da operação e define o melhor caminho para integração, controle de estoque, emissão e rotina operacional.",
  },
  {
    question: "Vocês operam contas já existentes?",
    answer:
      "Sim. A MRT pode estruturar uma operação do zero ou assumir contas já existentes, revisando cadastro, anúncios, processos, campanhas e indicadores.",
  },
];

export const credentials = [
  "Habitat SENAI Aceleradora / FIEP",
  "ABStartups",
  "SEBRAE Startups",
  "Consultores certificados Mercado Livre",
  "Parceiros Amazon",
];

export const marketplaceOptions = [
  "Mercado Livre",
  "Amazon",
  "Shopee",
  "Magalu",
  "TikTok Shop",
  "Outros",
];
