import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { readingTime, WPPost } from "@/lib/wordpress";

export default function BlogCard({ post, featured = false }: { post: WPPost; featured?: boolean }) {
  const formattedDate = new Intl.DateTimeFormat("en-IN", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.date));
  return (
    <article className={`blog-card ${featured ? "blog-card--featured" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="blog-card__image" aria-label={`Read ${post.title}`}>
        {post.featuredImage ? <Image src={post.featuredImage} alt={post.featuredImageAlt || post.title} fill sizes={featured ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover" /> : <div className="blog-card__placeholder" />}
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">{post.categories[0] && <span className="blog-pill">{post.categories[0].name}</span>}<span>{formattedDate}</span><span><Clock size={14} /> {readingTime(post.content)} min</span></div>
        <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="blog-card__link">Read insight <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
