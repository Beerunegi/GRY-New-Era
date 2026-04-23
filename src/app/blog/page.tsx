import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Insights & Updates',
  description: 'Read the latest articles, tutorials, and insights on web development, SEO, and digital marketing.',
  openGraph: {
    title: 'Blog | Insights & Updates',
    description: 'Read the latest articles, tutorials, and insights on web development, SEO, and digital marketing.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'featuredImage',
    'excerpt',
    'categories',
  ]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Our Blog
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Insights, tutorials, and industry news to help you stay ahead.
          </p>
        </div>

        {/* Blog List (Client Component for search/filter) */}
        <BlogList posts={posts} />
        
      </div>
    </div>
  );
}
