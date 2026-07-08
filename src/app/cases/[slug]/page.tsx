import Link from "next/link";
import { notFound } from "next/navigation";
import { resultCases } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <main className="case-detail">
      <section className="case-detail-hero">
        <div className="container">
          <Link className="back-link" href="/cases">
            Voltar para cases
          </Link>
          <span className="eyebrow">{caseItem.sector}</span>
          <h1>{caseItem.headline}</h1>
          <p className="lead">
            Conteúdo placeholder para receber a narrativa completa do case,
            gráficos detalhados, contexto comercial e indicadores validados.
          </p>
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
              <span>Período</span>
              <strong>{caseItem.period}</strong>
            </div>
            <div>
              <span>Marketplaces</span>
              <strong>{caseItem.marketplaces.join(", ")}</strong>
            </div>
            <div>
              <span>Tempo até tração</span>
              <strong>{caseItem.tractionTime}</strong>
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
