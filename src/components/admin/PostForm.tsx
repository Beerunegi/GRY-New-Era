'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Save, 
  ArrowLeft, 
  Image as ImageIcon, 
  Upload, 
  Plus, 
  Trash2, 
  Info, 
  Layout, 
  Search as SeoIcon, 
  Code,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

interface PostFormProps {
  initialData?: any;
  isEditing?: boolean;
}

export default function PostForm({ initialData, isEditing }: PostFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState('general'); // general, content, seo, schema
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    date: new Date().toISOString(),
    author: 'Admin',
    excerpt: '',
    featuredImage: '',
    featuredImageAlt: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    categories: [] as string[],
    tags: [] as string[],
    faqs: [] as { question: string; answer: string }[],
    customSchema: '',
    ...initialData
  });

  const [categoryInput, setCategoryInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  // Auto-generate slug from title if not editing
  useEffect(() => {
    if (!isEditing && formData.title && !formData.slug) {
      setFormData(prev => ({
        ...prev,
        slug: prev.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      }));
    }
  }, [formData.title, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.url) {
        setFormData(prev => ({ ...prev, featuredImage: result.url }));
      }
    } catch (error) {
      console.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...formData.faqs];
    newFaqs[index][field] = value;
    setFormData(prev => ({ ...prev, faqs: newFaqs }));
  };

  const addCategory = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && categoryInput.trim()) {
      e.preventDefault();
      if (!formData.categories.includes(categoryInput.trim())) {
        setFormData(prev => ({ ...prev, categories: [...prev.categories, categoryInput.trim()] }));
      }
      setCategoryInput('');
    }
  };

  const removeCategory = (cat: string) => {
    setFormData(prev => ({ ...prev, categories: prev.categories.filter(c => c !== cat) }));
  };

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      }
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: isEditing ? 'Post updated successfully!' : 'Post created successfully!' });
        if (!isEditing) {
          router.push(`/admin/posts/edit/${formData.slug}`);
        }
      } else {
        const err = await res.json();
        setMessage({ type: 'error', text: err.error || 'Failed to save post' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/admin')}
            className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold text-white">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h1>
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          <span>{loading ? 'Saving...' : 'Save Post'}</span>
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-xl border flex items-center gap-3 animate-in slide-in-from-top duration-300 ${
          message.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
            : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <p className="font-medium">{message.text}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-white/10 gap-8 overflow-x-auto pb-px">
        {[
          { id: 'general', label: 'General Info', icon: Layout },
          { id: 'content', label: 'Article Content', icon: Code },
          { id: 'seo', label: 'SEO Settings', icon: SeoIcon },
          { id: 'schema', label: 'Schema Markup', icon: Info },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-all font-medium whitespace-nowrap ${
              activeTab === tab.id 
                ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Core Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Post Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter an engaging title..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500/50 outline-none transition-all text-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Slug (URL)</label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-gray-300 focus:border-blue-500/50 outline-none transition-all font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Author</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500/50 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Excerpt / Meta Description</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Brief summary for list pages and search engines..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-blue-500/50 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Categorization */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Categorization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Categories (Press Enter)</label>
                    <input
                      type="text"
                      value={categoryInput}
                      onChange={(e) => setCategoryInput(e.target.value)}
                      onKeyDown={addCategory}
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.categories.map(cat => (
                        <span key={cat} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs flex items-center gap-2">
                          {cat}
                          <button onClick={() => removeCategory(cat)}><Trash2 className="w-3 h-3" /></button>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Tags (Press Enter)</label>
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={addTag}
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs flex items-center gap-2">
                          {tag}
                          <button onClick={() => removeTag(tag)}><Trash2 className="w-3 h-3" /></button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 min-h-[600px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Markdown Content</h3>
                  <div className="flex gap-2">
                    <span className="text-xs text-gray-500">Styling supported</span>
                  </div>
                </div>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your masterpiece here using Markdown..."
                  className="flex-1 w-full bg-black/30 border border-white/10 rounded-xl p-6 text-gray-200 focus:border-blue-500/50 outline-none transition-all font-mono resize-none leading-relaxed"
                />
              </div>

              {/* FAQs Section */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">FAQ Section</h3>
                  <button 
                    onClick={addFaq}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add Question
                  </button>
                </div>
                {formData.faqs.map((faq, index) => (
                  <div key={index} className="space-y-3 p-4 border border-white/5 bg-white/5 rounded-xl relative group">
                    <button 
                      onClick={() => removeFaq(index)}
                      className="absolute top-4 right-4 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) => updateFaq(index, 'question', e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-blue-500/50"
                    />
                    <textarea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                      rows={2}
                      className="w-full bg-transparent py-2 text-gray-400 outline-none resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-semibold text-white mb-4">Meta Optimization</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-400">SEO Meta Title</label>
                    <span className={`text-xs ${formData.metaTitle.length > 60 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {formData.metaTitle.length} / 60
                    </span>
                  </div>
                  <input
                    type="text"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleChange}
                    placeholder="Custom SEO title (defaults to Post Title if empty)"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-400">SEO Meta Description</label>
                    <span className={`text-xs ${formData.metaDescription.length > 160 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {formData.metaDescription.length} / 160
                    </span>
                  </div>
                  <textarea
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Custom SEO description (defaults to Excerpt if empty)"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Featured Image Alt Text</label>
                  <input
                    type="text"
                    name="featuredImageAlt"
                    value={formData.featuredImageAlt}
                    onChange={handleChange}
                    placeholder="Describe the image for accessibility and SEO..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none"
                  />
                </div>
              </div>

              {/* SERP Preview */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Google Preview</h3>
                <div className="max-w-[600px] space-y-1">
                  <div className="text-[#99c3ff] text-sm truncate">yoursite.com › blog › {formData.slug || 'url'}</div>
                  <div className="text-[#8ab4f8] text-xl font-medium cursor-pointer hover:underline truncate">
                    {formData.metaTitle || formData.title || 'Your Post Title Here'}
                  </div>
                  <div className="text-[#bdc1c6] text-sm line-clamp-2">
                    {formData.metaDescription || formData.excerpt || 'A compelling description of your post content will appear here in search results...'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schema Tab */}
          {activeTab === 'schema' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Custom JSON-LD Schema</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Add custom structured data for this specific post. This will be injected into the page head.
                  Standard Article, Breadcrumb, and FAQ schemas are generated automatically.
                </p>
                <textarea
                  name="customSchema"
                  value={formData.customSchema}
                  onChange={handleChange}
                  placeholder='{ "@context": "https://schema.org", "@type": "HowTo", ... }'
                  rows={15}
                  className="w-full bg-black/30 border border-white/10 rounded-xl p-6 text-purple-300 outline-none font-mono text-sm"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Media & Options */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-white">Featured Image</h3>
            <div className="relative aspect-video rounded-xl border border-dashed border-white/20 bg-black/40 overflow-hidden flex flex-col items-center justify-center group">
              {formData.featuredImage ? (
                <>
                  <Image 
                    src={formData.featuredImage} 
                    alt="Featured" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <label className="p-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500 transition-colors">
                      <Upload className="w-5 h-5 text-white" />
                      <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                    </label>
                    <button 
                      onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                      className="p-2 bg-red-600 rounded-lg hover:bg-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </>
              ) : (
                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                  {uploading ? (
                    <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-gray-600 mb-2" />
                      <span className="text-sm text-gray-500">Upload Image</span>
                    </>
                  )}
                  <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                </label>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">External URL (Alternative)</label>
              <input
                type="text"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-black/30 border border-white/10 rounded-xl py-2 px-3 text-sm text-gray-400 outline-none"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Publishing</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Publish Date</label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date.substring(0, 16)}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white outline-none"
              />
            </div>
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <span className="text-emerald-400 font-medium">Published</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Visibility</span>
                <span className="text-blue-400 font-medium">Public</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
