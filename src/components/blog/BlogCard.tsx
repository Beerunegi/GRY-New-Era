import Image from 'next/image';
import Link from 'next/link';
import { PostData } from '@/lib/blog';

export default function BlogCard({ post }: { post: PostData }) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(post.date));

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={post.featuredImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {post.categories && post.categories.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full backdrop-blur-md shadow-lg">
              {post.categories[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-400 mb-3 space-x-2">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
          Read Article 
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
