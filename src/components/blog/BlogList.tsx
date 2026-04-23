'use client';

import { useState, useMemo } from 'react';
import { PostData } from '@/lib/blog';
import BlogCard from './BlogCard';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogListProps {
  posts: PostData[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach(post => {
      post.categories?.forEach(cat => categories.add(cat));
    });
    return Array.from(categories).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        !selectedCategory || 
        (post.categories && post.categories.includes(selectedCategory));

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="w-full">
      {/* Search and Filters */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {allCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
          <p className="text-gray-400">Try adjusting your search or category filter.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
            className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
