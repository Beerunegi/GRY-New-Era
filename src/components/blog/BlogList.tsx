import Link from "next/link";
import { Search, X } from "lucide-react";
import { WPCategory, WPPost } from "@/lib/wordpress";
import BlogCard from "./BlogCard";

export default function BlogList({ posts, categories, search, category }: { posts: WPPost[]; categories: WPCategory[]; search?: string; category?: number }) {
  return <>
    <div className="blog-tools">
      <form className="blog-search" action="/blog" role="search"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="blog-search">Search the blog</label><input id="blog-search" name="search" defaultValue={search} placeholder="Search insights, guides and ideas" />{search && <Link href="/blog" aria-label="Clear search"><X size={18} /></Link>}<button type="submit">Search</button></form>
      <nav className="blog-categories" aria-label="Blog categories"><Link href={search ? `/blog?search=${encodeURIComponent(search)}` : "/blog"} className={!category ? "is-active" : ""}>All</Link>{categories.map((item) => <Link key={item.id} href={`/blog?category=${item.id}${search ? `&search=${encodeURIComponent(search)}` : ""}`} className={category === item.id ? "is-active" : ""}>{item.name}</Link>)}</nav>
    </div>
    {posts.length ? <div className="blog-grid">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div> : <div className="blog-empty"><span>0 results</span><h2>No articles found</h2><p>Try a broader search or explore all of our insights.</p><Link href="/blog">View all articles</Link></div>}
  </>;
}
