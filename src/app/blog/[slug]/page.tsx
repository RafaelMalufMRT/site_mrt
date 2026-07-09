import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedBlogCarousel } from "@/components/RelatedBlogCarousel";
import { blogPosts } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado | MRT Marketplace",
    };
  }

  return {
    title: `${post.title} | MRT Marketplace`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-detail">
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
            Voltar para o blog
          </Link>
        </div>
      </header>

      <section className="blog-detail-hero">
        <div className="container">
          <span className="eyebrow">{post.eyebrow}</span>
          <h1>{post.title}</h1>
          <p className="lead">{post.intro}</p>
          <div className="blog-detail-meta">
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="container blog-article-section">
        <article className="blog-article">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </section>

      <RelatedBlogCarousel currentSlug={post.slug} posts={blogPosts} />
    </main>
  );
}
