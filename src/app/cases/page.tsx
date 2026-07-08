import Link from "next/link";
import { resultCases } from "@/lib/site-data";

export const metadata = {
  title: "Cases | MRT Marketplace",
  description:
    "Cases anônimos de operações de marketplace estruturadas pela MRT para indústrias e fabricantes.",
};

export default function CasesPage() {
  return (
    <main className="case-page">
      <section className="case-page-hero">
        <div className="container">
          <Link className="back-link" href="/">
            Voltar para a Home
          </Link>
          <span className="eyebrow">Cases</span>
          <h1>Operações preparadas para escala.</h1>
          <p className="lead">
            Esta área está preparada para receber cases completos com dados,
            contexto, decisões operacionais e evolução por canal.
          </p>
        </div>
      </section>

      <section className="container case-page-grid" aria-label="Lista de cases">
        {resultCases.map((item) => (
          <article className="premium-card case-card" key={item.slug}>
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
                <span>Resultado principal</span>
                <strong>{item.caseResult}</strong>
              </div>
            </div>
            <Link className="btn btn-text" href={`/cases/${item.slug}`}>
              Ver case
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
