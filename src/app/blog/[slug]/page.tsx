import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Home, Sparkles } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { SocialShare } from "@/components/blog/SocialShare";
import { getMetadataBase } from "@/lib/site";
import { addHeadingIds, getAdjacentPosts, getPostBySlug, getRelatedPosts, readingTime } from "@/lib/wordpress";

export const revalidate = 900;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found | New Digital Era" };
  const canonical = `/blog/${post.slug}`;
  const description = post.seoDescription || post.excerpt;
  return {
    title: { absolute: post.seoTitle || `${post.title} | New Digital Era` }, description,
    alternates: { canonical },
    authors: [{ name: post.author.name }],
    openGraph: { title: post.title, description, type: "article", url: canonical, publishedTime: post.date, modifiedTime: post.modified, authors: [post.author.name], section: post.categories[0]?.name, images: post.featuredImage ? [{ url: post.featuredImage, alt: post.featuredImageAlt || post.title }] : [] },
    twitter: { card: "summary_large_image", title: post.title, description, images: post.featuredImage ? [post.featuredImage] : [] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [{ previous, next }, related] = await Promise.all([getAdjacentPosts(post), getRelatedPosts(post)]);
  const { html, items } = addHeadingIds(post.content);
  const siteUrl = getMetadataBase().toString().replace(/\/$/, "");
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.date));
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.seoDescription || post.excerpt,
    image: post.featuredImage ? [post.featuredImage] : undefined, datePublished: post.date, dateModified: post.modified,
    mainEntityOfPage: postUrl, author: { "@type": "Person", name: post.author.name },
    publisher: { "@type": "Organization", name: "New Digital Era", url: siteUrl },
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
  ] };
  const faqSchema = post.faqs.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;

  return <main className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />}

    <header className="article-hero"><div className="blog-orb blog-orb--one" /><div className="blog-container article-hero__inner">
      {post.featuredImage && <div className="article-cover"><Image src={post.featuredImage} alt={post.featuredImageAlt || post.title} fill priority sizes="(max-width: 1200px) 100vw, 1200px" /></div>}
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/"><Home size={15} /> Home</Link><span>/</span><Link href="/blog">Insights</Link><span>/</span><span>{post.categories[0]?.name || "Article"}</span></nav>
      <div className="article-hero__content">{post.categories[0] && <Link className="blog-pill" href={`/blog?category=${post.categories[0].id}`}>{post.categories[0].name}</Link>}<h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-byline"><div className="article-avatar">{post.author.avatarUrl ? <Image src={post.author.avatarUrl} alt={post.author.name} fill sizes="48px" /> : post.author.name.charAt(0)}</div><div><strong>{post.author.name}</strong><span><CalendarDays size={14} /> {date} <i /> <Clock size={14} /> {readingTime(post.content)} min read</span></div></div></div>
    </div></header>

    <div className="blog-container article-shell">
      <div className="article-layout">
        <aside className="article-sidebar">{items.length > 0 && <nav className="article-toc" aria-label="Table of contents"><span className="blog-kicker">On this page</span><ol>{items.map((item) => <li key={item.id} className={item.level === 3 ? "is-sub" : ""}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol></nav>}<SocialShare url={postUrl} title={post.title} /></aside>
        <div className="article-main"><article className="wp-article-content" dangerouslySetInnerHTML={{ __html: html }} />
          {post.faqs.length > 0 && <section className="article-faq" aria-labelledby="article-faq-title"><span className="blog-kicker">Quick answers</span><h2 id="article-faq-title">Frequently asked questions</h2>{post.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>}
          <section className="author-box"><div className="author-box__avatar">{post.author.avatarUrl ? <Image src={post.author.avatarUrl} alt={post.author.name} fill sizes="72px" /> : post.author.name.charAt(0)}</div><div><span className="blog-kicker">Written by</span><h2>{post.author.name}</h2><p>{post.author.description}</p></div></section>
          <nav className="article-pager" aria-label="Post navigation">{previous ? <Link href={`/blog/${previous.slug}`}><ArrowLeft size={19} /><span><small>Previous insight</small>{previous.title}</span></Link> : <span />}{next && <Link href={`/blog/${next.slug}`}><span><small>Next insight</small>{next.title}</span><ArrowRight size={19} /></Link>}</nav>
        </div>
      </div>
    </div>

    {related.length > 0 && <section className="article-related"><div className="blog-container"><div className="blog-section-heading"><div><span className="blog-kicker">Keep exploring</span><h2>Related insights</h2></div><Link href="/blog">View all <ArrowRight size={18} /></Link></div><div className="blog-grid">{related.map((item) => <BlogCard key={item.id} post={item} />)}</div></div></section>}
    <section className="article-cta"><div className="blog-container article-cta__inner"><div><span className="blog-kicker"><Sparkles size={15} /> Turn insight into impact</span><h2>Ready to build your next growth advantage?</h2><p>Let&apos;s turn the right strategy into measurable momentum for your brand.</p></div><Link href="/contact">Start a conversation <ArrowRight size={19} /></Link></div></section>
    <div className="blog-container"><Newsletter compact /></div>
  </main>;
}
