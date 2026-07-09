"use client";

import Link from "next/link";
import { useRef } from "react";
import type { BlogPost } from "@/lib/blog-data";
import { upcomingBlogTopics } from "@/lib/blog-data";

type RelatedBlogCarouselProps = {
  currentSlug: string;
  posts: BlogPost[];
};

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

export function RelatedBlogCarousel({
  currentSlug,
  posts,
}: RelatedBlogCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const relatedPosts = posts.filter((post) => post.slug !== currentSlug);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * rail.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="blog-related-section">
      <div className="container">
        <div className="blog-related-head">
          <div>
            <span className="eyebrow">Continue lendo</span>
            <h2>Últimos posts do blog</h2>
          </div>
          <Link className="btn btn-secondary" href="/blog">
            Ver todos
          </Link>
        </div>

        <div className="blog-carousel-shell">
          <button
            className="blog-arrow blog-arrow-prev"
            type="button"
            aria-label="Post anterior"
            onClick={() => scrollRail(-1)}
          >
            {"<"}
          </button>
          <div className="blog-side-scroll" ref={railRef}>
            {relatedPosts.map((post) => (
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
                  Ler post <ArrowIcon />
                </span>
              </Link>
            ))}

            {relatedPosts.length === 0 ? (
              <article className="premium-card blog-card blog-card-soon">
                <span className="blog-kicker">Em breve</span>
                <h3>Próximos conteúdos</h3>
                <ul className="blog-topic-list">
                  {upcomingBlogTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ) : null}

            <Link className="premium-card blog-card blog-card-all" href="/blog">
              <span className="blog-kicker">Todos os posts</span>
              <h3>Veja a biblioteca completa</h3>
              <p>
                Acesse a listagem completa para acompanhar todos os conteúdos
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
            onClick={() => scrollRail(1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
