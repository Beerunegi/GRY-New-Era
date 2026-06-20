const WORDPRESS_API = "https://wp.newdigitalera.in/wp-json/wp/v2";
const REVALIDATE_SECONDS = 900;

export type WPCategory = { id: number; name: string; slug: string; count: number };
export type WPAuthor = { id: number; name: string; description: string; avatarUrl?: string };
export type FAQItem = { question: string; answer: string };
export type WPPost = {
  id: number; slug: string; link: string; title: string; excerpt: string; content: string;
  date: string; modified: string; featuredImage?: string; featuredImageAlt?: string;
  author: WPAuthor; categories: WPCategory[]; seoTitle?: string; seoDescription?: string;
  canonical?: string; faqs: FAQItem[];
};

type RawPost = {
  id: number; slug: string; link: string; date: string; modified: string;
  title: { rendered: string }; excerpt: { rendered: string }; content: { rendered: string };
  yoast_head_json?: { title?: string; description?: string; canonical?: string; og_image?: Array<{ url: string }> };
  acf?: { faqs?: Array<{ question?: string; answer?: string }> };
  _embedded?: {
    author?: Array<{ id: number; name: string; description?: string; avatar_urls?: Record<string, string> }>;
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string; count?: number }>>;
  };
};

export type PostsQuery = { page?: number; perPage?: number; search?: string; category?: number; exclude?: number[] };

function decodeEntities(value: string) {
  return value.replace(/&#8211;|&#x2013;|&#8212;|&#x2014;/g, "-")
    .replace(/&#8216;|&#8217;|&rsquo;|&lsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&rdquo;|&ldquo;/g, '"').replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"').replace(/&#039;|&apos;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

export function stripHtml(value = "") {
  return decodeEntities(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function extractFaqs(post: RawPost): FAQItem[] {
  const acfFaqs = post.acf?.faqs?.filter((faq) => faq.question && faq.answer)
    .map((faq) => ({ question: stripHtml(faq.question), answer: stripHtml(faq.answer) }));
  if (acfFaqs?.length) return acfFaqs;

  const questions = [...post.content.rendered.matchAll(/class=["'][^"']*schema-faq-question[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/gi)];
  const answers = [...post.content.rendered.matchAll(/class=["'][^"']*schema-faq-answer[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/gi)];
  return questions.map((question, index) => ({ question: stripHtml(question[1]), answer: stripHtml(answers[index]?.[1] ?? "") }))
    .filter((faq) => faq.question && faq.answer);
}

function normalizePost(post: RawPost): WPPost {
  const author = post._embedded?.author?.[0];
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = (post._embedded?.["wp:term"] ?? []).flat().filter((term) => term.taxonomy === "category")
    .map((term) => ({ id: term.id, name: decodeEntities(term.name), slug: term.slug, count: term.count ?? 0 }));
  return {
    id: post.id, slug: post.slug, link: post.link, title: decodeEntities(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered), content: post.content.rendered, date: post.date, modified: post.modified,
    featuredImage: media?.source_url ?? post.yoast_head_json?.og_image?.[0]?.url,
    featuredImageAlt: media?.alt_text || decodeEntities(post.title.rendered),
    author: { id: author?.id ?? 0, name: author?.name ? decodeEntities(author.name) : "New Digital Era",
      description: author?.description ? stripHtml(author.description) : "Digital growth insights from the New Digital Era team.",
      avatarUrl: author?.avatar_urls?.["96"] ?? author?.avatar_urls?.["48"] },
    categories, seoTitle: post.yoast_head_json?.title, seoDescription: post.yoast_head_json?.description,
    canonical: post.yoast_head_json?.canonical, faqs: extractFaqs(post),
  };
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${WORDPRESS_API}${path}`, { next: { revalidate: REVALIDATE_SECONDS }, headers: { Accept: "application/json" } });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch { return null; }
}

export async function getPosts(query: PostsQuery = {}) {
  const params = new URLSearchParams({ _embed: "1", page: String(query.page ?? 1), per_page: String(query.perPage ?? 12) });
  if (query.search) params.set("search", query.search);
  if (query.category) params.set("categories", String(query.category));
  if (query.exclude?.length) params.set("exclude", query.exclude.join(","));
  const posts = await wpFetch<RawPost[]>(`/posts?${params.toString()}`);
  return (posts ?? []).map(normalizePost);
}

export async function getPostBySlug(slug: string) {
  const posts = await wpFetch<RawPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`);
  return posts?.[0] ? normalizePost(posts[0]) : null;
}

export async function getCategories() {
  return (await wpFetch<WPCategory[]>("/categories?per_page=100&hide_empty=true")) ?? [];
}

export async function getAdjacentPosts(post: WPPost) {
  const [previous, next] = await Promise.all([
    wpFetch<RawPost[]>(`/posts?before=${encodeURIComponent(post.date)}&per_page=1&_embed=1`),
    wpFetch<RawPost[]>(`/posts?after=${encodeURIComponent(post.date)}&per_page=1&order=asc&_embed=1`),
  ]);
  return { previous: previous?.[0] ? normalizePost(previous[0]) : null, next: next?.[0] ? normalizePost(next[0]) : null };
}

export async function getRelatedPosts(post: WPPost, count = 3) {
  return getPosts({ perPage: count, category: post.categories[0]?.id, exclude: [post.id] });
}

export type TocItem = { id: string; text: string; level: 2 | 3 };
export function addHeadingIds(content: string) {
  const items: TocItem[] = [];
  const used = new Set<string>();
  const html = content.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_match, levelValue, attributes, inner) => {
    const level = Number(levelValue) as 2 | 3;
    const text = stripHtml(inner);
    const existingId = attributes.match(/\sid=["']([^"']+)["']/i)?.[1];
    let id = existingId ?? (text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") || `section-${items.length + 1}`);
    const baseId = id; let suffix = 2;
    while (used.has(id)) id = `${baseId}-${suffix++}`;
    used.add(id); items.push({ id, text, level });
    return `<h${level}${existingId ? attributes : `${attributes} id="${id}"`}>${inner}</h${level}>`;
  });
  return { html, items };
}

export function readingTime(content: string) {
  return Math.max(1, Math.ceil(stripHtml(content).split(/\s+/).filter(Boolean).length / 220));
}
