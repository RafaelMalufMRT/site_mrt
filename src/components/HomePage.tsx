"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FormEvent, MouseEvent } from "react";
import { blogPosts, upcomingBlogTopics } from "@/lib/blog-data";
import {
  brand,
  companyResponsibilities,
  comparisonModels,
  credentials,
  faqs,
  marketplaceOptions,
  methodologyPhases,
  metrics,
  mrtResponsibilities,
  navLinks,
  operationRouteSteps,
  pricingPlans,
  problemCards,
  resultCases,
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m6.5 12.4 3.4 3.4 7.6-8.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ProblemIcon({ index }: { index: number }) {
  const icons = [
    "M7 7h10v10H7z M10 10h4 M10 14h4",
    "M7 17V9l5-3 5 3v8 M9.5 17v-5h5v5",
    "M6 16l5.5-8 3.5 5 2-2 2 5 M8 16h10",
    "M7 7h10v7H7z M9 17h6 M12 14v3",
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={icons[index % icons.length]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function OperationStepIcon({ index }: { index: number }) {
  const icons = [
    <g key="diagnostic">
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4 4M8.5 12.5v-3M10.5 12.5v-5M12.5 12.5v-2" />
    </g>,
    <g key="integration">
      <path d="M9.5 8.5 8 7a3.2 3.2 0 0 0-4.5 4.5l2.1 2.1a3.2 3.2 0 0 0 4.5 0l.7-.7" />
      <path d="m14.5 15.5 1.5 1.5a3.2 3.2 0 0 0 4.5-4.5l-2.1-2.1a3.2 3.2 0 0 0-4.5 0l-.7.7" />
      <path d="m8.7 15.3 6.6-6.6" />
    </g>,
    <g key="catalog">
      <circle cx="12" cy="5.2" r="2.4" />
      <circle cx="5.5" cy="16.5" r="2.4" />
      <circle cx="18.5" cy="16.5" r="2.4" />
      <path d="M12 7.6v3.3M7.7 15.2l3.2-3M16.3 15.2l-3.2-3" />
    </g>,
    <g key="image">
      <rect x="4" y="5.5" width="16" height="13" rx="2" />
      <path d="m6.5 16 4-4 3 3 2-2 2.5 3M15.5 9.5h.1" />
    </g>,
    <g key="price">
      <path d="m4.5 12 7.8-7.8h5.2v5.2L9.7 17.2z" />
      <circle cx="15.3" cy="6.7" r="1.2" />
      <path d="M9.5 12.5c1.6 1.2 4.1.8 4.1-.9 0-1.5-1.7-1.6-3-2.1-1.1-.4-1.4-1.9.2-2.4 1-.3 1.9 0 2.6.4M11.8 6.5v7" />
    </g>,
    <g key="campaign">
      <path d="M4 13h3l7 4V7l-7 4H4zM17 9.5l2-1.2M17 14.5l2 1.2M18 12h2" />
      <path d="M7 13v4" />
    </g>,
    <g key="document">
      <path d="M6.5 3.8h7l4 4v12.4h-11zM13.5 3.8v4h4" />
      <path d="M9 11h5.5M9 14h5.5M9 17h3" />
    </g>,
    <g key="support">
      <path d="M5 6.5h14v9H9l-4 3z" />
      <circle cx="16.4" cy="16.4" r="3.1" />
      <path d="m16.4 14.9.5 1 1.1.2-.8.8.2 1.1-1-.5-1 .5.2-1.1-.8-.8 1.1-.2z" />
    </g>,
    <g key="dashboard">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M7.5 15v-3M12 15V9M16.5 15v-5" />
      <path d="M7 8h4" />
    </g>,
    <g key="profit">
      <path d="M4 17h16M6 15v-2M10 15v-5M14 15V8M18 15V6" />
      <path d="m5 11 4-4 4 2 5-5" />
      <circle cx="17" cy="15.5" r="3.1" />
      <path d="M17 13.9v3.2M15.9 14.7c.6-.6 2.2-.5 2.2.4 0 1.1-2.1.6-2.1 1.6 0 .8 1.5 1 2.3.4" />
    </g>,
    <g key="ai">
      <path d="M9.5 5.2a3 3 0 0 0-3 3v7.2a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V8.2a3 3 0 0 0-3-3z" />
      <path d="M9.5 9.5h5M9.5 12h5M9.5 14.5h3" />
      <path d="M17.5 8h2M17.5 12h2M17.5 16h2M4.5 8h2M4.5 12h2M4.5 16h2" />
    </g>,
    <g key="rocket">
      <path d="M13.5 4.5c3.4.3 5.2 2.1 5.5 5.5l-5.6 5.6-5-5z" />
      <path d="m8.4 10.6-3.1.8-1.2 3.3 3.8-.8M13.4 15.6l-.8 3.8-3.3 1.2.8-3.1" />
      <circle cx="14.9" cy="8.6" r="1.4" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {icons[index % icons.length]}
      </g>
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
            src="/mrt-logo-header-transparent.png"
            alt="MRT Marketplace"
            width={160}
            height={28}
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
    { label: "Anúncios otimizados", tone: "healthy" },
    { label: "Campanhas ativas", tone: "healthy" },
    { label: "SAC monitorado", tone: "healthy" },
    { label: "SEO em revisão", tone: "healthy" },
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
          {[
            { label: "Ignition", state: "done" },
            { label: "Traction", state: "done" },
            { label: "Ramp Up", state: "done" },
            { label: "Growth", state: "active" },
          ].map((step) => (
            <div
              className={`pipeline-step pipeline-step-${step.state}`}
              key={step.label}
            >
              <span>{step.label}</span>
              <span className="pipeline-state" aria-hidden="true">
                {step.state === "done" ? <CheckIcon /> : null}
              </span>
            </div>
          ))}
        </div>

        <div className="status-grid">
          {statuses.map((status) => (
            <div className={`status-item status-${status.tone}`} key={status.label}>
              <span className="status-dot" />
              {status.label}
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
  const roadmapLayout = [
    { x: 8, y: 10, numberX: 8, numberY: 49.1, side: "top" },
    { x: 15.6, y: 69, numberX: 15.6, numberY: 54.4, side: "bottom" },
    { x: 23.3, y: 10, numberX: 23.3, numberY: 62, side: "top" },
    { x: 30.9, y: 69, numberX: 30.9, numberY: 52.8, side: "bottom" },
    { x: 38.5, y: 10, numberX: 38.5, numberY: 49.5, side: "top" },
    { x: 46.2, y: 69, numberX: 46.2, numberY: 60.4, side: "bottom" },
    { x: 53.8, y: 10, numberX: 53.8, numberY: 59.4, side: "top" },
    { x: 61.5, y: 69, numberX: 61.5, numberY: 49, side: "bottom" },
    { x: 69.1, y: 10, numberX: 69.1, numberY: 54.3, side: "top" },
    { x: 76.7, y: 69, numberX: 76.7, numberY: 62, side: "bottom" },
    { x: 84.4, y: 10, numberX: 84.4, numberY: 52.9, side: "top" },
    { x: 92, y: 69, numberX: 92, numberY: 49.3, side: "bottom" },
  ];

  return (
    <div className="solution-system" data-reveal>
      <div className="solution-owner-grid">
        <div className="solution-lane-card company">
          <div>
            <span className="lane-kicker">Sua empresa</span>
            <h3>Produto e entrega</h3>
          </div>
          <ul className="responsibility-list compact">
            {companyResponsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="solution-lane-card mrt">
          <div>
            <span className="lane-kicker">MRT Marketplace</span>
            <h3>Operação e crescimento</h3>
          </div>
          <ul className="responsibility-list compact">
            {mrtResponsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="operation-road-card">
        <div className="operation-road-head">
          <span className="lane-kicker">Fluxo operacional</span>
          <h3>Operação de ponta a ponta</h3>
        </div>
        <div className="operation-vector-scroll">
          <div
            className="operation-vector-map"
            aria-label="Roadmap operacional de ponta a ponta"
          >
            <svg
              className="operation-vector-road"
              viewBox="0 0 1120 190"
              aria-hidden="true"
            >
              <path
                className="operation-road-shadow"
                d="M35 105 C85 55 130 55 180 105 S280 155 330 105 S430 55 480 105 S580 155 630 105 S730 55 780 105 S880 155 930 105 S1030 55 1088 105"
              />
              <path
                className="operation-road-outer"
                d="M35 105 C85 55 130 55 180 105 S280 155 330 105 S430 55 480 105 S580 155 630 105 S730 55 780 105 S880 155 930 105 S1030 55 1088 105"
              />
              <path
                className="operation-road-body"
                d="M35 105 C85 55 130 55 180 105 S280 155 330 105 S430 55 480 105 S580 155 630 105 S730 55 780 105 S880 155 930 105 S1030 55 1088 105"
              />
              <path
                className="operation-road-dash"
                d="M35 105 C85 55 130 55 180 105 S280 155 330 105 S430 55 480 105 S580 155 630 105 S730 55 780 105 S880 155 930 105 S1030 55 1088 105"
              />
            </svg>

            {operationRouteSteps.map((step, index) => {
              const position = roadmapLayout[index];
              return (
                <div
                  className={`operation-vector-card is-${position.side} ${
                    index % 4 < 2 ? "is-orange" : "is-blue"
                  }`}
                  key={step}
                  style={
                    {
                      "--x": `${position.x}%`,
                      "--y": `${position.y}%`,
                    } as CSSProperties
                  }
                >
                  <div className="operation-vector-icon">
                    <OperationStepIcon index={index} />
                  </div>
                  <strong>{step}</strong>
                  <span aria-hidden="true" />
                </div>
              );
            })}

            {operationRouteSteps.map((step, index) => {
              const position = roadmapLayout[index];
              return (
                <div
                  className="operation-vector-number"
                  key={`number-${step}`}
                  style={
                    {
                      "--x": `${position.numberX}%`,
                      "--y": `${position.numberY}%`,
                    } as CSSProperties
                  }
                >
                  {index + 1}
                </div>
              );
            })}

            {roadmapLayout.map((position, index) => (
              <span
                className={`operation-vector-stem is-${position.side}`}
                key={`stem-${index}`}
                style={
                  {
                    "--x": `${position.x}%`,
                    "--y":
                      position.side === "top"
                        ? "32%"
                        : `${position.numberY}%`,
                    "--stem-height":
                      position.side === "top"
                        ? `${Math.max(position.numberY - 32, 10)}%`
                        : `${Math.max(position.y - position.numberY, 10)}%`,
                  } as CSSProperties
                }
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <div
          className="operation-mobile-timeline"
          aria-label="Fluxo operacional de ponta a ponta"
        >
          {operationRouteSteps.map((step, index) => (
            <div
              className={`operation-mobile-step ${
                index % 4 < 2 ? "is-orange" : "is-blue"
              }`}
              key={`mobile-${step}`}
            >
              <span className="operation-mobile-number">{index + 1}</span>
              <div className="operation-mobile-card">
                <div className="operation-vector-icon">
                  <OperationStepIcon index={index} />
                </div>
                <strong>{step}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrbitDiagram() {
  return (
    <div className="orbit-diagram orbit-diagram-image" data-reveal>
      <Image
        className="venn-image"
        src="/mrt-venn-diagram-optimized.webp"
        alt="Diagrama de Venn com MRT na interseção entre agência, consultoria e equipe interna"
        width={1503}
        height={1047}
        unoptimized
      />
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

function SalesEngineVisual() {
  return (
    <div className="sales-engine-visual" aria-hidden="true">
      <Image
        className="sales-engine-motor"
        src="/mrt-sales-engine-motor-cutout.png"
        alt=""
        width={1070}
        height={862}
        unoptimized
      />
    </div>
  );
}

function MethodRoad() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(
    methodologyPhases.length - 1,
  );

  return (
    <div className="method-road" data-reveal>
      <div className="method-road-cards">
        {methodologyPhases.map((phase, index) => (
          <article
            className={`method-road-card ${
              index === activePhaseIndex ? "is-live" : ""
            }`}
            key={phase.name}
            onClick={() => setActivePhaseIndex(index)}
          >
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
          </article>
        ))}
      </div>
    </div>
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

        <MethodRoad />

        <div className="tech-strip" data-reveal>
          <div>
            <span className="lane-kicker">MRT Sales Engine</span>
            <h3>Operação apoiada por tecnologia própria</h3>
            <p>
              Tecnologia própria para acompanhar vendas, mensagens, anúncios,
              indicadores e oportunidades de otimização.
            </p>
          </div>
          <SalesEngineVisual />
        </div>
      </div>
    </section>
  );
}

function PricingSimulator() {
  const [skuCount, setSkuCount] = useState(50);
  const [channelCount, setChannelCount] = useState(5);
  const skuMin = 5;
  const skuMax = 100;
  const channelMin = 1;
  const channelMax = 10;
  const skuMarks = [
    { value: 5, label: "5" },
    { value: 100, label: "100+" },
  ];
  const channelMarks = [
    { value: 1, label: "1" },
    { value: 10, label: "10+" },
  ];
  const skuProgress = ((skuCount - skuMin) / (skuMax - skuMin)) * 100;
  const channelProgress =
    ((channelCount - channelMin) / (channelMax - channelMin)) * 100;
  const roundedSkuCount =
    skuCount >= 100 ? 100 : Math.max(skuMin, Math.ceil(skuCount / 5) * 5);
  const planSkuCount = roundedSkuCount >= 100 ? 101 : roundedSkuCount;
  const planChannelCount =
    channelCount >= 10 ? 11 : Math.max(channelMin, Math.ceil(channelCount));
  const plan =
    pricingPlans.find(
      (item) =>
        planSkuCount <= item.skuLimit &&
        planChannelCount <= item.channelLimit,
    ) ?? pricingPlans[pricingPlans.length - 1];
  const skuDisplay =
    roundedSkuCount >= 100 ? "100+ SKUs" : `${roundedSkuCount} SKUs`;
  const channelDisplay =
    channelCount >= 10 ? "10+ canais" : `${planChannelCount} canais`;

  const rangeStyle = (progress: number) =>
    ({ "--range-progress": `${progress}%` }) as CSSProperties;

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
                <span className="control-value">{skuDisplay}</span>
              </div>
              <input
                className="range-control"
                id="sku-range"
                type="range"
                min={skuMin}
                max={skuMax}
                step="0.01"
                value={skuCount}
                style={rangeStyle(skuProgress)}
                aria-valuetext={skuDisplay}
                onChange={(event) => setSkuCount(Number(event.target.value))}
              />
              <div className="range-ticks" aria-hidden="true">
                {skuMarks.map((mark) => (
                  <span
                    className={skuCount === mark.value ? "is-active" : ""}
                    key={mark.value}
                  >
                    {mark.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="control-group">
              <div className="control-head">
                <label htmlFor="channel-range">Canais / marketplaces</label>
                <span className="control-value">{channelDisplay}</span>
              </div>
              <input
                className="range-control"
                id="channel-range"
                type="range"
                min={channelMin}
                max={channelMax}
                step="0.01"
                value={channelCount}
                style={rangeStyle(channelProgress)}
                aria-valuetext={channelDisplay}
                onChange={(event) =>
                  setChannelCount(Number(event.target.value))
                }
              />
              <div className="range-ticks" aria-hidden="true">
                {channelMarks.map((mark) => (
                  <span
                    className={channelCount === mark.value ? "is-active" : ""}
                    key={mark.value}
                  >
                    {mark.label}
                  </span>
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
              <p className="plan-note-primary">
                O gerenciamento contínuo começa apenas após a conclusão e
                aprovação formal da implantação.
              </p>
              <p>
                O investimento final depende do diagnóstico, complexidade
                operacional, marketplaces escolhidos e estágio atual da empresa.
                Valores podem ser diferentes após diagnóstico.
              </p>
            </div>
          </div>
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
          text="Relatos de empresas que estruturaram a operação de marketplace com método, rotina e acompanhamento próximo."
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

function BlogSection() {
  const blogRailRef = useRef<HTMLDivElement>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const scrollBlogRail = (direction: -1 | 1) => {
    const rail = blogRailRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth,
      behavior: "smooth",
    });
  };

  const submitNewsletter = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus({
        type: "error",
        message: "Informe seu e-mail para entrar na lista.",
      });
      return;
    }

    setNewsletterStatus({ type: "loading", message: "Salvando..." });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Não foi possível salvar agora.");
      }

      setNewsletterEmail("");
      setNewsletterStatus({
        type: "success",
        message: result.message ?? "E-mail cadastrado.",
      });
    } catch (error) {
      setNewsletterStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível salvar agora.",
      });
    }
  };

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <SectionHead
          eyebrow="Blog"
          title="Últimos posts"
          text="Conteúdos, bastidores e aprendizados sobre operação, performance e crescimento em marketplaces."
        />

        <div className="blog-carousel-shell" data-reveal>
          <button
            className="blog-arrow blog-arrow-prev"
            type="button"
            aria-label="Post anterior"
            onClick={() => scrollBlogRail(-1)}
          >
            {"<"}
          </button>
          <div className="blog-side-scroll" ref={blogRailRef}>
            {blogPosts.map((post) => (
              <Link
                className="premium-card blog-card featured-blog-card"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <span className="blog-kicker">{post.category}</span>
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <span>{post.readTime}</span>
                  <span>{post.eyebrow}</span>
                </div>
                <span className="btn btn-text">
                  Ler post <ArrowIcon />
                </span>
              </Link>
            ))}

            <article className="premium-card blog-card blog-card-soon">
              <span className="blog-kicker">Em breve</span>
              <h3>Próximos conteúdos</h3>
              <ul className="blog-topic-list">
                {upcomingBlogTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>

            <Link
              className="premium-card blog-card blog-card-all"
              href="/blog"
            >
              <span className="blog-kicker">Todos os posts</span>
              <h3>Veja a biblioteca completa</h3>
              <p>
                Acesse a listagem do blog para acompanhar os conteúdos
                publicados pela MRT.
              </p>
              <span className="btn btn-text">
                Ver todos <ArrowIcon />
              </span>
            </Link>
          </div>
          <button
            className="blog-arrow blog-arrow-next"
            type="button"
            aria-label="Próximo post"
            onClick={() => scrollBlogRail(1)}
          >
            {">"}
          </button>
        </div>

        <form
          className="blog-newsletter"
          onSubmit={submitNewsletter}
          data-reveal
        >
          <div>
            <span className="blog-kicker">Newsletter</span>
            <h3>Quer receber nossos próximos posts?</h3>
            <p>
              Cadastre seu e-mail para entrar na lista de conteúdos da MRT.
            </p>
          </div>
          <div className="blog-newsletter-action">
            <label className="sr-only" htmlFor="newsletter-email">
              E-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder="seuemail@empresa.com"
              required
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={newsletterStatus.type === "loading"}
            >
              {newsletterStatus.type === "loading" ? "Salvando..." : "Inscrever"}
            </button>
          </div>
          {newsletterStatus.message ? (
            <p className={`newsletter-status ${newsletterStatus.type}`}>
              {newsletterStatus.message}
            </p>
          ) : null}
        </form>
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
              {problemCards.map((card, index) => (
                <article
                  className={`premium-card problem-card problem-card-${index + 1}`}
                  key={card.title}
                  data-reveal
                >
                  <div className="problem-icon" aria-hidden="true">
                    <ProblemIcon index={index} />
                  </div>
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
              <OrbitDiagram />
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
        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <ContactSection whatsappUrl={whatsappUrl} />
      </main>

      <Footer whatsappUrl={whatsappUrl} />
    </div>
  );
}
