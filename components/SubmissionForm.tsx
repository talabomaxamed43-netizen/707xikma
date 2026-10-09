'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { WisdomCategory } from '@/lib/types';
import { Send, Sparkles, CheckCircle2, User, BookOpen } from 'lucide-react';

const CATEGORIES: WisdomCategory[] = [
  'Nolosha',
  'Guusha',
  'Samirka',
  'Waaya-aragnimada',
  'Aqoonta',
];

export function SubmissionForm() {
  const { user, isLoaded } = useUser();

  const [category, setCategory] = useState<WisdomCategory>('Nolosha');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Pre-fill author with Clerk authenticated user's name
  useEffect(() => {
    if (isLoaded && user) {
      const defaultName = user.fullName || user.firstName || user.username || '';
      if (!author) {
        setAuthor(defaultName);
      }
    }
  }, [isLoaded, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) return;

    setIsLoading(true);

    // Simulate database write / API dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsLoading(false);
    setIsSubmitted(true);
    setText('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {isSubmitted && (
        <div className="mb-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-4">
          <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
              Mahadsanid! Xikmaddaada si guul leh ayaa loo gudbiyay.
            </h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
              Xikmaddaadu waxay geli doontaa ururinta 707 Xikmadood ka dib marka ay marto dib-u-eegis gaaban.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              type="button"
              className="mt-3 text-xs font-semibold text-emerald-800 dark:text-emerald-200 underline hover:no-underline"
            >
              Gudbi xikmad kale
            </button>
          </div>
        </div>
      )}

      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Soo Bandhig Xikmaddada
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              La wadaag xikmad ama waaya-aragnimo wax dhisaysa bulshada Soomaaliyeed.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              Qeybta Xikmadda (Category)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                    category === cat
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-500/30'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Quote Text */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              Erayada Xikmadda (Quote)
            </label>
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={4}
                placeholder="Ku qor halkan xikmadda aad rabto inaad la wadaagto..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all resize-none"
              />
              <BookOpen className="w-4 h-4 text-slate-400 absolute bottom-4 right-4 pointer-events-none" />
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              Hubi in qoraalkaagu yahay mid sugan oo naxwe ahaan sax ah.
            </p>
          </div>

          {/* Author Name (Pre-filled with Clerk User Profile) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              Qoraaga / Isha Xikmadda (Author)
            </label>
            <div className="relative">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                placeholder="Magaca qoraaga ama halka laga soo xigtay..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
              />
              <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            {user && (
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1">
                <span>✓ Waxaa si toos ah looga soo qaatay akoonkaaga Clerk ({user.primaryEmailAddress?.emailAddress})</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? (
              <span>Gudbinayaa...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Gudbi Xikmadda Hadda</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
