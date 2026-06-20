"use client";

import { Check, Copy, Facebook, Linkedin, Share2 } from "lucide-react";
import { useState } from "react";

export function SocialShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  async function copyLink() { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
  const encodedUrl = encodeURIComponent(url); const encodedTitle = encodeURIComponent(title);
  return <div className="blog-share" aria-label="Share this article"><span><Share2 size={16} /> Share</span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn"><Linkedin size={18} /></a><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><Facebook size={18} /></a><a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer" aria-label="Share on X"><span className="blog-share__x">X</span></a><button type="button" onClick={copyLink} aria-label="Copy article link">{copied ? <Check size={18} /> : <Copy size={18} />}</button></div>;
}
