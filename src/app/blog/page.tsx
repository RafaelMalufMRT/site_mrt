import Image from "next/image";
import Link from "next/link";
import { blogPosts, upcomingBlogTopics } from "@/lib/blog-data";

export const metadata = {
  title: "Blog | MRT Marketplace",
  description:
    "Conteúdos e bastidores sobre operação, performance e crescimento em marketplaces.",
};

export default function BlogPage() {
  return (
    <main className="blog-page">
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
          <Link className="case-back-link" href="/#blog">
            Voltar para o site
          </Link>
        </div>
      </header>

      <section className="blog-list-hero">
        <div className="container">
          <span className="eyebrow">Blog</span>
          <h1>Conteúdos para vender melhor em marketplaces.</h1>
          <p className="lead">
            Bastidores, aprendizados e guias sobre operação, catálogo, anúncios,
            dados e crescimento.
          </p>
        </div>
      </section>

      <section className="container blog-list-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link
              className="premium-card blog-card featured-blog-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <span className="blog-kicker">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.readTime}</span>
                <span>{post.eyebrow}</span>
              </div>
              <span className="btn btn-text">
                Ler post
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
        </div>
      </section>
    </main>
  );
}
