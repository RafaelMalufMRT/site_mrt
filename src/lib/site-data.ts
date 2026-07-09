export const brand = {
  name: "MRT Marketplace",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@mrtmarketplace.com.br",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541999999999",
  whatsappLabel: "+55 41 99999-9999",
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
  { value: "R$5M+", label: "vendidos pelos clientes operados" },
  { value: "10+", label: "marketplaces integrados" },
  { value: "100%", label: "operação terceirizada" },
  { value: "1.500+", label: "SKUs operados" },
  { value: "5.000+", label: "anúncios criados e otimizados" },
  { value: "12+", label: "clientes ativos" },
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
    text: "A indústria deveria focar em produto, estoque, qualidade e expedição, não em apagar incêndios de plataforma.",
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
    slug: "industria-pecas-automotivas",
    sector: "Indústria de peças automotivas",
    headline: "De operação inicial a R$100 mil/mês",
    marketplaces: ["Mercado Livre", "Amazon", "Shopee"],
    period: "6 meses",
    result: "R$100 mil/mês",
    data: [2, 3, 12, 24, 48, 100],
    problem:
      "Empresa com bom portfólio e capacidade de entrega, mas sem operação estruturada em marketplaces.",
    solution:
      "Implantação de canais, estruturação de catálogo, anúncios, SEO, campanhas e rotina de indicadores.",
    caseResult:
      "Operação saiu da fase inicial e atingiu mais de R$100 mil/mês em aproximadamente 6 meses.",
    tractionTime: "Aproximadamente 6 meses",
  },
  {
    slug: "fabricante-produtos-para-casa",
    sector: "Fabricante de produtos para casa",
    headline: "Crescimento progressivo após estruturação",
    marketplaces: ["Mercado Livre", "Magalu", "Shopee"],
    period: "6 meses",
    result: "R$86 mil/mês",
    data: [4, 9, 18, 31, 57, 86],
    problem:
      "Catálogo relevante, mas baixa presença digital e pouca padronização comercial.",
    solution:
      "Organização dos SKUs, criação de anúncios, precificação por canal e expansão gradual.",
    caseResult:
      "Crescimento mês a mês após entrada em produção e otimização.",
    tractionTime: "Entrada em tração gradual",
  },
  {
    slug: "marca-consumo-recorrente",
    sector: "Marca de consumo recorrente",
    headline: "Escala por catálogo, SEO e campanhas",
    marketplaces: ["Mercado Livre", "Amazon", "TikTok Shop"],
    period: "6 meses",
    result: "R$120 mil/mês",
    data: [6, 11, 23, 39, 72, 120],
    problem:
      "Produtos com recorrência, mas anúncios pouco otimizados e canais subutilizados.",
    solution:
      "Melhoria de SEO/GEO, campanhas, expansão de catálogo e acompanhamento de conversão.",
    caseResult: "Escala por dados, campanhas e rotina de gestão.",
    tractionTime: "Aproximadamente 6 meses",
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
    name: "Nome do cliente",
    role: "Diretor Comercial",
    company: "Indústria parceira",
  },
  {
    quote:
      "O maior ganho foi tirar a complexidade da nossa equipe interna. Conseguimos focar em produto e entrega enquanto a operação digital avançava.",
    name: "Nome do cliente",
    role: "Gestor de E-commerce",
    company: "Fabricante parceiro",
  },
  {
    quote:
      "A implantação foi organizada, com clareza de etapas e acompanhamento próximo. Isso nos deu segurança para tratar marketplaces como canal estratégico.",
    name: "Nome do cliente",
    role: "Sócio-diretor",
    company: "Marca parceira",
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
      "Para indústrias e fabricantes que têm produto, estoque e capacidade de entrega, mas querem vender ou escalar em marketplaces sem montar uma equipe interna completa.",
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
