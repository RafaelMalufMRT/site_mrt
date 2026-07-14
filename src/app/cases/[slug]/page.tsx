import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resultCases } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type CaseGrowthChartProps = {
  data: number[];
  result: string;
  slug: string;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function splitResultLabel(result: string) {
  const [amount] = result.split("/");

  return {
    amount,
    unit: "",
  };
}

function CaseGrowthChart({ data, result, slug }: CaseGrowthChartProps) {
  const width = 760;
  const height = 360;
  const padding = { top: 32, right: 34, bottom: 46, left: 42 };
  const maxValue = Math.max(...data) * 1.12;
  const baseline = height - padding.bottom;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const points = data.map((value, index) => {
    const x = padding.left + (index / (data.length - 1)) * chartWidth;
    const y = baseline - (value / maxValue) * chartHeight;
    return { x, y, value };
  });
  const linePath = points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];
    const midX = (previous.x + point.x) / 2;
    return `${path} C ${midX} ${previous.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
  }, "");
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  const areaPath = `${linePath} L ${lastPoint.x} ${baseline} L ${firstPoint.x} ${baseline} Z`;
  const calloutWidth = 190;
  const calloutX = Math.min(
    Math.max(lastPoint.x - calloutWidth - 18, padding.left),
    width - padding.right - calloutWidth,
  );
  const calloutY = Math.max(lastPoint.y - 64, padding.top);

  return (
    <div className="case-growth-chart">
      <svg
        aria-label={`Evolução do case até ${result}`}
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <linearGradient id={`case-area-${slug}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1247C8" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#1247C8" stopOpacity="0.02" />
          </linearGradient>
          <filter
            id={`case-dot-shadow-${slug}`}
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feDropShadow
              dx="0"
              dy="10"
              floodColor="#1247C8"
              floodOpacity="0.22"
              stdDeviation="10"
            />
          </filter>
        </defs>

        {[0.25, 0.5, 0.75, 1].map((line) => {
          const y = baseline - line * chartHeight;
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

        {points.map((point, index) => (
          <text
            key={index}
            x={point.x}
            y={height - 15}
            fill="#8793A6"
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
          >
            M{index + 1}
          </text>
        ))}

        <path d={areaPath} fill={`url(#case-area-${slug})`} />
        <path
          d={linePath}
          fill="none"
          stroke="#1247C8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />

        {points.map((point, index) => {
          const tooltipWidth = 132;
          const tooltipX = Math.min(
            Math.max(point.x - tooltipWidth / 2, padding.left),
            width - padding.right - tooltipWidth,
          );
          const tooltipY = Math.max(point.y - 62, padding.top);

          return (
            <g className="case-chart-point" key={index}>
              <rect
                x={point.x - 64}
                y={padding.top}
                width="128"
                height={baseline - padding.top}
                fill="transparent"
              />
              <line
                className="case-chart-guide"
                x1={point.x}
                x2={point.x}
                y1={padding.top}
                y2={baseline}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={index === points.length - 1 ? 8 : 4.5}
                fill={index === points.length - 1 ? "#E99A00" : "#FFFFFF"}
                filter={
                  index === points.length - 1
                    ? `url(#case-dot-shadow-${slug})`
                    : undefined
                }
                stroke={index === points.length - 1 ? "#FFFFFF" : "#1247C8"}
                strokeWidth="3"
              />
              <g className="case-chart-tooltip">
                <rect
                  x={tooltipX}
                  y={tooltipY}
                  width={tooltipWidth}
                  height="44"
                  rx="10"
                />
                <text
                  x={tooltipX + tooltipWidth / 2}
                  y={tooltipY + 18}
                  textAnchor="middle"
                >
                  Mês {index + 1}
                </text>
                <text
                  className="case-chart-tooltip-value"
                  x={tooltipX + tooltipWidth / 2}
                  y={tooltipY + 33}
                  textAnchor="middle"
                >
                  {formatCurrency(point.value)}
                </text>
              </g>
            </g>
          );
        })}

        <circle
          className="case-chart-final-dot"
          cx={lastPoint.x}
          cy={lastPoint.y}
          r="8"
          fill="#E99A00"
          filter={`url(#case-dot-shadow-${slug})`}
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        <g className="case-chart-final-callout">
          <rect
            x={calloutX}
            y={calloutY}
            width={calloutWidth}
            height="42"
            rx="10"
            fill="#FFF5E3"
            stroke="#F2C66E"
          />
          <text
            x={calloutX + calloutWidth / 2}
            y={calloutY + 25}
            fill="#A96800"
            fontSize="13"
            fontWeight="800"
            textAnchor="middle"
          >
            {result}
          </text>
        </g>
      </svg>
    </div>
  );
}

export function generateStaticParams() {
  return resultCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const caseItem = resultCases.find((item) => item.slug === slug);

  if (!caseItem) {
    return {
      title: "Case não encontrado | MRT Marketplace",
    };
  }

  return {
    title: `${caseItem.sector} | MRT Marketplace`,
    description: caseItem.caseResult,
  };
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseItem = resultCases.find((item) => item.slug === slug);

  if (!caseItem) {
    notFound();
  }

  const resultLabel = splitResultLabel(caseItem.result);

  return (
    <main className="case-detail">
      <header className="case-topbar">
        <div className="container case-topbar-inner">
          <Link className="case-brand-link" href="/#top" aria-label="MRT Marketplace">
            <Image
              className="case-brand-mark"
              src="/mrt-logo-header-transparent.png"
              alt="MRT Marketplace"
              width={160}
              height={28}
              priority
            />
          </Link>
          <Link className="case-back-link" href="/#resultados">
            Voltar para resultados
          </Link>
        </div>
      </header>
      <section className="case-detail-hero">
        <div className="container">
          <span className="eyebrow">{caseItem.sector}</span>
          <h1>{caseItem.headline}</h1>
          <p className="lead">
            Uma visão de performance construída a partir da estruturação da
            operação, evolução comercial e rotina de indicadores.
          </p>
        </div>
      </section>

      <section className="container case-proof-section">
        <div className="case-proof-card">
          <div className="case-proof-copy">
            <span>Resultado observado</span>
            <h2 className="case-result-label">
              {resultLabel.unit ? <small>{resultLabel.unit}</small> : null}
              <span>{resultLabel.amount}</span>
            </h2>
            <p>
              Evolução em {caseItem.period}, com implantação, catálogo,
              anúncios, campanhas e rotina de indicadores trabalhando juntos.
            </p>
            <div className="case-channel-list">
              {caseItem.marketplaces.map((marketplace) => (
                <span key={marketplace}>{marketplace}</span>
              ))}
            </div>
          </div>
          <CaseGrowthChart
            data={caseItem.data}
            result={caseItem.result}
            slug={caseItem.slug}
          />
        </div>

        <div className="case-proof-facts">
          <div>
            <span>Período</span>
            <strong>{caseItem.period}</strong>
          </div>
          <div>
            <span>Tempo até tração</span>
            <strong>{caseItem.tractionTime}</strong>
          </div>
          <div>
            <span>Canais ativados</span>
            <strong>{caseItem.marketplaces.length} marketplaces</strong>
          </div>
        </div>
      </section>

      <section className="container case-detail-grid">
        <article className="case-detail-main">
          <section>
            <h2>Problema inicial</h2>
            <p>{caseItem.problem}</p>
          </section>
          <section>
            <h2>Solução aplicada</h2>
            <p>{caseItem.solution}</p>
          </section>
          <section>
            <h2>Resultado principal</h2>
            <p>{caseItem.caseResult}</p>
          </section>
        </article>

        <aside className="case-detail-aside">
          <h3>Resumo da operação</h3>
          <div className="aside-list">
            <div>
              <span>Marketplaces</span>
              <strong>{caseItem.marketplaces.join(", ")}</strong>
            </div>
            <div>
              <span>Resultado</span>
              <strong>{caseItem.result}</strong>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
