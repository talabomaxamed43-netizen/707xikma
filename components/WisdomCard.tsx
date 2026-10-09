'use client';

import { useState } from 'react';
import { Heart, Bookmark, Copy, Share2, Check, Quote } from 'lucide-react';
import { WisdomQuote } from '@/lib/types';

interface WisdomCardProps {
  quote: WisdomQuote;
}

export function WisdomCard({ quote }: WisdomCardProps) {
  const [likes, setLikes] = useState(quote.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleShare = async () => {
    const shareText = `"${quote.text}" — ${quote.author} | 707 Xikmadood`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: '707 Xikmadood',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  const categoryColors: Record<string, string> = {
    Nolosha: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    Guusha: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    Samirka: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'Waaya-aragnimada': 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    Aqoonta: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  };

  return (
    <article className="group relative glass-card rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-200 dark:border-slate-800/80">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

      {/* Top Header: Quote ID & Category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
            #{String(quote.id).padStart(3, '0')}
          </span>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
              categoryColors[quote.category] ||
              'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            {quote.category}
          </span>
        </div>

        {/* Quote Content */}
        <div className="relative mb-6">
          <Quote className="w-8 h-8 text-emerald-500/20 dark:text-emerald-400/20 absolute -top-3 -left-2 -z-0" />
          <p className="relative z-10 text-slate-800 dark:text-slate-100 text-lg sm:text-xl font-medium leading-relaxed font-serif">
            "{quote.text}"
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-0.5 w-6 bg-emerald-500/60 rounded-full" />
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {quote.author}
          </span>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Like */}
          <button
            onClick={handleLike}
            type="button"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              isLiked
                ? 'text-rose-600 bg-rose-50 dark:bg-rose-950/50 dark:text-rose-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            aria-label="Like this quote"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{likes}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            type="button"
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              isBookmarked
                ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/50 dark:text-amber-400'
                : 'text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            aria-label="Bookmark this quote"
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`}
            />
          </button>
        </div>

        <div className="flex items-center gap-1">
          {/* Copy Quote */}
          <button
            onClick={handleCopy}
            type="button"
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
            title="Koobiyeey Xikmadda"
            aria-label="Copy quote text"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            type="button"
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="La wadaag asxaabta"
            aria-label="Share quote"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
