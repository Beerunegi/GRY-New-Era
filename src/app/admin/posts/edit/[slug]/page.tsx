import React from 'react';
import { getPostBySlug } from '@/lib/blog';
import PostForm from '@/components/admin/PostForm';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = getPostBySlug(slug, [
    'title',
    'slug',
    'date',
    'author',
    'excerpt',
    'featuredImage',
    'featuredImageAlt',
    'content',
    'metaTitle',
    'metaDescription',
    'categories',
    'tags',
    'faqs',
    'customSchema'
  ]);

  if (!post) {
    return notFound();
  }

  return <PostForm initialData={post} isEditing={true} />;
}
