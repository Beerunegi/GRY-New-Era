import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/blog';

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug, [
      'title',
      'excerpt',
      'featuredImage',
      'author',
      'date',
    ]);

    if (!post) {
      return {};
    }

    return {
      title: `${post.title} | Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: [
          {
            url: post.featuredImage || '',
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.featuredImage || ''],
      },
    };
  } catch (e) {
    return {};
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug, [
      'title',
      'date',
      'slug',
      'author',
      'content',
      'featuredImage',
      'categories',
      'tags',
      'faqs',
    ]);
  } catch (e) {
    return notFound();
  }

  if (!post) {
    return notFound();
  }

  const contentHtml = await markdownToHtml(post.content || '');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // 1. Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.featuredImage],
    datePublished: post.date,
    dateModified: post.date,
    author: [{
      '@type': 'Person',
      name: post.author,
    }],
  };

  // 2. Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // 3. FAQ Schema
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(post.date));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <article className="min-h-screen bg-black text-gray-200 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-500 line-clamp-1">{post.title}</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex gap-2">
                {post.categories.map((cat: string) => (
                  <span key={cat} className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                    {cat}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-400 text-sm space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p>{formattedDate}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl border border-white/10">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-invert prose-blue max-w-none text-lg leading-relaxed 
                       prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 
                       prose-img:rounded-xl prose-img:shadow-lg prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqs.map((faq: any, index: number) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
              <span className="text-white font-semibold mr-2 flex items-center">Tags:</span>
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 transition-colors border border-white/10">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
