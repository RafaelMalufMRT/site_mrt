"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import {
  brand,
  channelOptions,
  companyResponsibilities,
  comparisonModels,
  credentials,
  faqs,
  marketplaceOptions,
  methodologyPhases,
  metrics,
  mrtResponsibilities,
  navLinks,
  pricingPlans,
  problemCards,
  resultCases,
  skuOptions,
  technologyCards,
  testimonials,
} from "@/lib/site-data";

type FormState = {
  name: string;
  company: string;
  role: string;
  email: string;
  whatsapp: string;
  site: string;
  skuRange: string;
  marketplaces: string[];
  message: string;
};

const initialFormState: FormState = {
  name: "",
  company: "",
  role: "",
  email: "",
  whatsapp: "",
  site: "",
  skuRange: "",
  marketplaces: [],
  message: "",
};

const skuRanges = [
  "Até 50 SKUs",
  "Até 100 SKUs",
  "Até 500 SKUs",
  "Mais de 500 SKUs",
];

function ArrowIcon() {
  return (
    <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function useRevealAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.14 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header({ whatsappUrl }: { whatsappUrl: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
        isOpen ? "is-open" : ""
      }`}
    >
      <div className="nav-inner">
        <a className="brand-link" href="#top" aria-label="MRT Marketplace">
          <Image
            className="brand-mark"
            src="/mrt-logo.png"
            alt="MRT Marketplace"
            width={160}
            height={25}
            fetchPriority="high"
            loading="eager"
            preload
          />
          <span className="brand-fallback">MRT Marketplace</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="#contato">
            <span className="desktop-cta-text">Agendar diagnóstico</span>
            <span className="mobile-cta-text">Diagnóstico</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="menu-lines" />
          </button>
        </div>
      </div>

      <nav className="mobile-menu" aria-label="Navegação mobile">
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contato" onClick={closeMenu}>
            Agendar diagnóstico
          </a>
          <a
            className="btn btn-secondary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroDashboard() {
  const statuses = [
    "Anúncios otimizados",
    "Campanhas ativas",
    "SAC monitorado",
    "SEO em revisão",
  ];
  const marketplaces = [
    "Mercado Livre",
    "Amazon",
    "Shopee",
    "Magalu",
    "TikTok Shop",
  ];

  return (
    <div className="dashboard-shell" data-reveal>
      <div className="dashboard-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="dashboard-title">MRT Operations Dashboard</div>
      </div>
      <div className="dashboard-body">
        <div className="dash-kpis">
          {[
            ["GMV", "R$ 120k"],
            ["SKUs", "1.5k"],
            ["Anúncios", "5k+"],
            ["Canais", "10+"],
          ].map(([label, value]) => (
            <div className="dash-kpi" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="dash-chart-wrap">
          <div className="dash-chart-head">
            <strong>Crescimento operacional</strong>
            <span className="growth-pill">+86% no ciclo</span>
          </div>
          <svg className="dash-chart" viewBox="0 0 480 190" role="img">
            <title>Gráfico de crescimento operacional MRT</title>
            <defs>
              <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1247C8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1247C8" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160].map((y) => (
              <line
                key={y}
                x1="20"
                x2="460"
                y1={y}
                y2={y}
                stroke="#DCE5F2"
                strokeWidth="1"
              />
            ))}
            <path
              d="M28 160 C78 152 96 150 130 126 C164 101 190 112 220 90 C266 58 296 79 330 48 C372 10 404 24 452 20 L452 170 L28 170 Z"
              fill="url(#heroArea)"
            />
            <path
              d="M28 160 C78 152 96 150 130 126 C164 101 190 112 220 90 C266 58 296 79 330 48 C372 10 404 24 452 20"
              fill="none"
              stroke="#1247C8"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <circle cx="452" cy="20" r="6" fill="#1247C8" />
          </svg>
        </div>

        <div className="pipeline" aria-label="Pipeline MRT">
          {["Ignition", "Traction", "Ramp Up", "Growth"].map((step) => (
            <div className="pipeline-step" key={step}>
              {step}
            </div>
          ))}
        </div>

        <div className="status-grid">
          {statuses.map((status) => (
            <div className="status-item" key={status}>
              <span className="status-dot" />
              {status}
            </div>
          ))}
        </div>

        <div className="marketplace-pills">
          {marketplaces.map((marketplace) => (
            <span key={marketplace}>{marketplace}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`} data-reveal>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function MetricsBand() {
  return (
    <section className="metrics-band" aria-label="Indicadores MRT">
      <div className="container">
        <div className="metrics-grid" data-reveal>
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionDiagram() {
  return (
    <div className="solution-grid" data-reveal>
      <div className="solution-column">
        <h3>Sua empresa</h3>
        <ul className="responsibility-list">
          {companyResponsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="solution-core">
        <div className="core-ring" aria-hidden="true">
          <span />
        </div>
        <h3>Operação de Marketplace</h3>
        <p>
          O núcleo operacional conecta produto, canais, rotina comercial,
          indicadores e execução diária.
        </p>
      </div>

      <div className="solution-column">
        <h3>MRT Marketplace</h3>
        <ul className="responsibility-list">
          {mrtResponsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ResultChart({ data, slug }: { data: number[]; slug: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const width = 360;
  const height = 190;
  const padding = { top: 18, right: 18, bottom: 32, left: 34 };
  const max = Math.max(...data) * 1.12;
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const points = data.map((value, index) => {
    const x = padding.left + (index / (data.length - 1)) * innerWidth;
    const y = padding.top + innerHeight - (value / max) * innerHeight;
    return [x, y] as const;
  });

  const linePath = points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1][0]} ${
    height - padding.bottom
  } L ${points[0][0]} ${height - padding.bottom} Z`;

  const onMove = (event: MouseEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = width / rect.width;
    const x = (event.clientX - rect.left) * ratio;
    const nearest = points.reduce(
      (best, point, index) => {
        const distance = Math.abs(point[0] - x);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActiveIndex(nearest.index);
  };

  const active = activeIndex ?? data.length - 1;
  const [activeX, activeY] = points[active];

  return (
    <svg
      className="result-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      onMouseMove={onMove}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <title>Gráfico de crescimento em seis meses</title>
      <defs>
        <linearGradient id={`area-${slug}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1247C8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1247C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((line) => {
        const y = padding.top + (line / 3) * innerHeight;
        return (
          <line
            key={line}
            x1={padding.left}
            x2={width - padding.right}
            y1={y}
            y2={y}
            stroke="#DCE5F2"
            strokeWidth="1"
          />
        );
      })}
      {data.map((_, index) => (
        <text
          key={index}
          x={points[index][0]}
          y={height - 8}
          fill="#8793A6"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
        >
          M{index + 1}
        </text>
      ))}
      <path d={areaPath} fill={`url(#area-${slug})`} />
      <path
        className="chart-line"
        d={linePath}
        fill="none"
        stroke="#1247C8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      {points.map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={index === data.length - 1 ? 5 : 3.5}
          fill={index === data.length - 1 ? "#1247C8" : "#FFFFFF"}
          stroke="#1247C8"
          strokeWidth="2"
        />
      ))}
      <g className="chart-tooltip">
        <line
          x1={activeX}
          x2={activeX}
          y1={padding.top}
          y2={height - padding.bottom}
          stroke="#C8D5E8"
          strokeDasharray="4 4"
        />
        <circle cx={activeX} cy={activeY} r="6" fill="#1247C8" />
        <rect
          x={Math.min(Math.max(activeX - 40, 8), width - 88)}
          y={Math.max(activeY - 42, 4)}
          width="80"
          height="28"
          rx="6"
        />
        <text
          x={Math.min(Math.max(activeX, 48), width - 48)}
          y={Math.max(activeY - 24, 22)}
          textAnchor="middle"
        >
          R${data[active]} mil
        </text>
      </g>
    </svg>
  );
}

function ResultsSection() {
  return (
    <section className="section results-section" id="resultados">
      <div className="container">
        <SectionHead
          eyebrow="Resultados"
          title="Resultados reais de operações construídas com método."
          text="Crescimento em marketplace não vem de ações soltas. Vem de implantação bem feita, catálogo estruturado, anúncios otimizados, campanhas, dados e rotina."
        />

        <div className="result-grid">
          {resultCases.map((item) => (
            <article
              className="premium-card result-card"
              key={item.slug}
              data-reveal
            >
              <span className="case-tag">{item.sector}</span>
              <h3>{item.headline}</h3>
              <div className="result-meta">
                {item.marketplaces.map((marketplace) => (
                  <span className="meta-pill" key={marketplace}>
                    {marketplace}
                  </span>
                ))}
              </div>
              <div className="chart-box">
                <ResultChart data={item.data} slug={item.slug} />
              </div>
              <div className="result-facts">
                <div className="result-fact">
                  <span>Período</span>
                  <strong>{item.period}</strong>
                </div>
                <div className="result-fact">
                  <span>Marketplaces</span>
                  <strong>{item.marketplaces.length} canais</strong>
                </div>
                <div className="result-fact">
                  <span>Resultado</span>
                  <strong>{item.result}</strong>
                </div>
              </div>
              <Link className="btn btn-text" href={`/cases/${item.slug}`}>
                Ver case completo <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  return (
    <section className="section methodology-section" id="metodologia">
      <div className="container">
        <SectionHead
          eyebrow="Método MRT"
          title="Método MRT de Operação em Marketplaces"
          text="Um pipeline claro para implantar, validar, otimizar e escalar a operação sem depender de improviso."
        />

        <div className="timeline">
          {methodologyPhases.map((phase, index) => (
            <article className="phase-card" key={phase.name} data-reveal>
              <div className="phase-index">0{index + 1}</div>
              <div className="phase-body">
                <span className="phase-label">{phase.name}</span>
                <h3>{phase.label}</h3>
                <span className="phase-time">{phase.time}</span>
                <p>{phase.text}</p>
                <div className="chip-row">
                  {phase.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tech-strip" data-reveal>
          <div>
            <h3>Operação apoiada por tecnologia própria</h3>
            <p>
              A MRT utiliza tecnologia própria para acompanhar vendas,
              mensagens, anúncios, indicadores e oportunidades de otimização. O
              cliente tem mais clareza da operação, enquanto o time MRT executa
              e acompanha a rotina.
            </p>
          </div>
          <div className="tech-grid">
            {technologyCards.map((card) => (
              <div className="tech-card" key={card}>
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSimulator() {
  const [skuIndex, setSkuIndex] = useState(1);
  const [channelIndex, setChannelIndex] = useState(1);
  const plan = pricingPlans[Math.max(skuIndex, channelIndex)];

  return (
    <section className="section pricing-section" id="investimento">
      <div className="container">
        <SectionHead
          eyebrow="Modelo comercial"
          title="Simule o porte da sua operação"
          text="O investimento varia conforme quantidade de SKUs, número de canais e complexidade da implantação. Use a simulação abaixo para visualizar uma faixa inicial."
        />

        <div className="pricing-grid">
          <div className="simulator-panel" data-reveal>
            <div className="control-group">
              <div className="control-head">
                <label htmlFor="sku-range">Quantidade de SKUs</label>
                <span className="control-value">{skuOptions[skuIndex]}</span>
              </div>
              <input
                className="range-control"
                id="sku-range"
                type="range"
                min="0"
                max="2"
                step="1"
                value={skuIndex}
                aria-valuetext={`${skuOptions[skuIndex]} SKUs`}
                onChange={(event) => setSkuIndex(Number(event.target.value))}
              />
              <div className="range-ticks" aria-hidden="true">
                {skuOptions.map((option, index) => (
                  <button
                    className={index === skuIndex ? "is-active" : ""}
                    key={option}
                    type="button"
                    onClick={() => setSkuIndex(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <div className="control-head">
                <label htmlFor="channel-range">Canais / marketplaces</label>
                <span className="control-value">
                  {channelOptions[channelIndex]}
                </span>
              </div>
              <input
                className="range-control"
                id="channel-range"
                type="range"
                min="0"
                max="2"
                step="1"
                value={channelIndex}
                aria-valuetext={`${channelOptions[channelIndex]} canais`}
                onChange={(event) =>
                  setChannelIndex(Number(event.target.value))
                }
              />
              <div className="range-ticks" aria-hidden="true">
                {channelOptions.map((option, index) => (
                  <button
                    className={index === channelIndex ? "is-active" : ""}
                    key={option}
                    type="button"
                    onClick={() => setChannelIndex(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="plan-panel" data-reveal>
            <span className="plan-eyebrow">Plano estimado</span>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price-grid">
              <div className="price-box">
                <span>Implantação</span>
                <strong>{plan.implementation}</strong>
              </div>
              <div className="price-box">
                <span>Gerenciamento contínuo</span>
                <strong>{plan.monthly}</strong>
              </div>
            </div>
            <a className="btn btn-primary" href="#contato">
              Solicitar diagnóstico desse cenário <ArrowIcon />
            </a>
            <div className="plan-notes">
              <p>
                Valores ilustrativos. O investimento final depende do
                diagnóstico, complexidade operacional, marketplaces escolhidos e
                estágio atual da empresa.
              </p>
              <p>
                O gerenciamento contínuo começa após a conclusão e aprovação
                formal da implantação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section className="section cases-section" id="cases">
      <div className="container">
        <SectionHead
          eyebrow="Cases"
          title="Cases de operações que saíram do planejamento para escala."
          text="Estruturamos operações em diferentes segmentos, sempre com foco em implantação, rotina, dados e crescimento sustentável."
        />

        <div className="case-grid">
          {resultCases.map((item) => (
            <article
              className="premium-card case-card"
              key={item.slug}
              data-reveal
            >
              <span className="case-tag">{item.sector}</span>
              <h3>{item.headline}</h3>
              <div className="case-list">
                <div>
                  <span>Problema inicial</span>
                  <strong>{item.problem}</strong>
                </div>
                <div>
                  <span>Solução aplicada</span>
                  <strong>{item.solution}</strong>
                </div>
                <div>
                  <span>Tempo até tração</span>
                  <strong>{item.tractionTime}</strong>
                </div>
                <div>
                  <span>Resultado principal</span>
                  <strong>{item.caseResult}</strong>
                </div>
              </div>
              <Link className="btn btn-text" href={`/cases/${item.slug}`}>
                Ver case <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHead
          eyebrow="Depoimentos"
          title="O que clientes dizem sobre operar com a MRT"
          text="Depoimentos reais serão adicionados após validação. Por enquanto, usamos placeholders profissionais."
        />

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className="premium-card testimonial-card"
              key={testimonial.role}
              data-reveal
            >
              <div className="quote-mark">“</div>
              <p>{testimonial.quote}</p>
              <div className="person">
                <div className="avatar" aria-hidden="true">
                  NC
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHead
          eyebrow="FAQ"
          title="Perguntas frequentes"
          text="As dúvidas mais comuns sobre o modelo de outsourcing de marketplace e a rotina operacional da MRT."
          center
        />
        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>
                {faq.question}
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ whatsappUrl }: { whatsappUrl: string }) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleMarketplace = (marketplace: string) => {
    setForm((current) => {
      const exists = current.marketplaces.includes(marketplace);
      return {
        ...current,
        marketplaces: exists
          ? current.marketplaces.filter((item) => item !== marketplace)
          : [...current.marketplaces, marketplace],
      };
    });
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.company ||
      !form.email ||
      !form.whatsapp ||
      !form.skuRange ||
      form.marketplaces.length === 0
    ) {
      setStatus({
        type: "error",
        message:
          "Preencha nome, empresa, e-mail, WhatsApp, SKUs e marketplaces de interesse.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Enviando diagnóstico..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Não foi possível enviar agora.");
      }

      setForm(initialFormState);
      setStatus({
        type: "success",
        message:
          result.message ??
          "Diagnóstico enviado. A equipe MRT vai retornar em breve.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar agora.",
      });
    }
  };

  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <SectionHead
          eyebrow="Diagnóstico"
          title="Quer transformar marketplace em um canal de venda estruturado?"
          text="Agende um diagnóstico e entenda como a MRT pode implantar, operar e escalar seus marketplaces com método, dados e rotina."
        />

        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <h3>Fale com a MRT</h3>
            <p className="lead">
              Envie o cenário da sua empresa ou escolha um canal direto para
              iniciar a conversa.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href="#contact-form">
                Enviar diagnóstico
              </a>
              <a
                className="btn btn-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
              <a
                className="btn btn-secondary"
                href={`mailto:${brand.contactEmail}?subject=Diagnóstico%20de%20Marketplace%20MRT`}
              >
                Enviar e-mail
              </a>
            </div>
          </aside>

          <form
            className="contact-form"
            id="contact-form"
            onSubmit={submitForm}
            data-reveal
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="company">Empresa</label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(event) =>
                    updateField("company", event.target.value)
                  }
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="role">Cargo</label>
                <input
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={(event) => updateField("role", event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={(event) =>
                    updateField("whatsapp", event.target.value)
                  }
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="site">Site da empresa</label>
                <input
                  id="site"
                  name="site"
                  type="url"
                  placeholder="https://"
                  value={form.site}
                  onChange={(event) => updateField("site", event.target.value)}
                />
              </div>
              <div className="field full">
                <label htmlFor="skuRange">Quantidade aproximada de SKUs</label>
                <select
                  id="skuRange"
                  name="skuRange"
                  value={form.skuRange}
                  onChange={(event) =>
                    updateField("skuRange", event.target.value)
                  }
                  required
                >
                  <option value="">Selecione uma faixa</option>
                  {skuRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label>Marketplaces de interesse</label>
                <div className="checkbox-grid">
                  {marketplaceOptions.map((marketplace) => (
                    <label className="checkbox-pill" key={marketplace}>
                      <input
                        type="checkbox"
                        checked={form.marketplaces.includes(marketplace)}
                        onChange={() => toggleMarketplace(marketplace)}
                      />
                      {marketplace}
                    </label>
                  ))}
                </div>
              </div>
              <div className="field full">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Conte rapidamente o estágio atual da operação."
                />
              </div>
            </div>
            <div className="form-actions">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={status.type === "loading"}
              >
                {status.type === "loading"
                  ? "Enviando..."
                  : "Enviar diagnóstico"}
              </button>
              {status.message ? (
                <p className={`form-status ${status.type}`}>
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              className="footer-logo"
              src="/mrt-logo.png"
              alt="MRT Marketplace"
              width={164}
              height={26}
            />
            <p>Outsourcing de Marketplace para indústrias e fabricantes.</p>
          </div>
          <div className="footer-column">
            <h3>Navegação</h3>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
              <a href="#contato">Contato</a>
              <Link href="/cases">Todos os cases</Link>
            </div>
          </div>
          <div className="footer-column">
            <h3>Credenciais e ecossistema</h3>
            <div className="credential-list">
              {credentials.map((credential) => (
                <span key={credential}>{credential}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MRT Marketplace. Todos os direitos
            reservados.
          </span>
          <span>
            <a href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a> ·{" "}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {brand.whatsappLabel}
            </a>{" "}
            ·{" "}
            <a href={brand.currentSite} target="_blank" rel="noreferrer">
              Site atual
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  useRevealAnimations();

  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
        brand.whatsappMessage,
      )}`,
    [],
  );

  return (
    <div className="site-shell" id="top">
      <Header whatsappUrl={whatsappUrl} />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow">Outsourcing de Marketplace</span>
              <h1>
                Seu departamento de Marketplace,{" "}
                <span>sem montar uma equipe interna.</span>
              </h1>
              <p className="hero-subtitle">
                A MRT assume a implantação, operação e crescimento dos seus
                canais em marketplaces — da criação das contas à gestão contínua
                de anúncios, campanhas, SAC, indicadores e escala.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contato">
                  Agendar diagnóstico <ArrowIcon />
                </a>
                <a
                  className="btn btn-secondary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
              <p className="hero-note">
                Para indústrias e fabricantes que querem transformar marketplace
                em um canal real de vendas.
              </p>
            </div>
            <HeroDashboard />
          </div>
        </section>

        <MetricsBand />

        <section className="section problem-section">
          <div className="container">
            <SectionHead
              eyebrow="O problema"
              title="Marketplace não falha por falta de canal. Falha por falta de operação."
              text="Criar conta e publicar produto é só o começo. O desafio real está em transformar marketplaces em uma rotina comercial previsível, com cadastro, preço, reputação, logística, campanha, atendimento e dados trabalhando juntos."
            />
            <div className="problem-grid">
              {problemCards.map((card) => (
                <article
                  className="premium-card problem-card"
                  key={card.title}
                  data-reveal
                >
                  <div className="line-mark" aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="solucao">
          <div className="container">
            <SectionHead
              eyebrow="Solução"
              title="Sua empresa cuida do produto. A MRT cuida da operação."
              text="A indústria mantém o foco no que faz melhor: produto, estoque, qualidade e expedição. A MRT assume a estruturação e a rotina operacional dos marketplaces."
            />
            <SolutionDiagram />
          </div>
        </section>

        <section className="section audience-section">
          <div className="container">
            <SectionHead
              eyebrow="Para quem é"
              title="Feito para indústrias e fabricantes que querem vender mais sem montar uma operação interna de marketplace."
              text="A MRT é para empresas que têm produto, estoque e capacidade de entrega, mas querem transformar Mercado Livre, Amazon, Shopee e outros canais em uma operação estruturada, acompanhada e escalável."
            />
            <div className="audience-layout">
              <div className="operation-statement" data-reveal>
                <h3>Não somos uma agência. Somos a operação.</h3>
                <p>
                  Agências executam campanhas. Consultorias entregam
                  diagnósticos. A MRT implanta, opera, acompanha e escala seus
                  canais como um departamento terceirizado de marketplace.
                </p>
              </div>
              <div className="comparison-grid">
                {comparisonModels.map((model) => (
                  <article
                    className={`premium-card comparison-card ${
                      model.featured ? "featured" : ""
                    }`}
                    key={model.name}
                    data-reveal
                  >
                    <h3>{model.name}</h3>
                    <p>{model.description}</p>
                    <span className="limitation">{model.limitation}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ResultsSection />
        <MethodologySection />
        <PricingSimulator />
        <CasesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection whatsappUrl={whatsappUrl} />
      </main>

      <Footer whatsappUrl={whatsappUrl} />
    </div>
  );
}
