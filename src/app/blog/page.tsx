import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import BlogList from "@/components/blog/BlogList";
import { Newsletter } from "@/components/blog/Newsletter";
import { getCategories, getPosts } from "@/lib/wordpress";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "SEO, AEO & Digital Marketing Insights", description: "Practical insights on SEO, local search, AEO, GEO, paid media, content and conversion from New Digital Era's Ghaziabad growth team.", path: "/blog", keywords: ["digital marketing insights India", "SEO blog India", "AEO GEO strategies", "local SEO Ghaziabad"] });

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ search?: string; category?: string }> }) {
  const params = await searchParams;
  const search = params.search?.trim();
  const category = params.category ? Number(params.category) : undefined;
  const [categories, featuredPosts, posts] = await Promise.all([
    getCategories(),
    !search && !category ? getPosts({ perPage: 2 }) : Promise.resolve([]),
    getPosts({ perPage: 12, search, category, exclude: !search && !category ? [] : undefined }),
  ]);
  const featuredIds = new Set(featuredPosts.map((post) => post.id));
  const gridPosts = !search && !category ? posts.filter((post) => !featuredIds.has(post.id)) : posts;

  return <main className="blog-page">
    <section className="blog-hero"><div className="blog-orb blog-orb--one" /><div className="blog-orb blog-orb--two" /><div className="blog-container blog-hero__inner"><div><span className="blog-kicker"><Sparkles size={15} /> New Digital Era Insights</span><h1>Ideas that move<br /><em>business forward.</em></h1></div><p>Expert perspectives, practical playbooks and honest analysis for brands navigating search, AI and modern growth.</p></div></section>
    {featuredPosts.length > 0 && <section className="blog-container blog-featured"><div className="blog-section-heading"><div><span className="blog-kicker">Editor&apos;s selection</span><h2>Featured thinking</h2></div><Link href="#latest">Explore latest <ArrowRight size={18} /></Link></div><div className="blog-featured__grid">{featuredPosts.map((post) => <BlogCard key={post.id} post={post} featured />)}</div></section>}
    <section className="blog-container blog-latest" id="latest"><div className="blog-section-heading"><div><span className="blog-kicker">Knowledge library</span><h2>{search ? `Results for “${search}”` : "Latest insights"}</h2></div></div><BlogList posts={gridPosts} categories={categories} search={search} category={category} /></section>
    <div className="blog-container"><Newsletter /></div>
  </main>;
}
