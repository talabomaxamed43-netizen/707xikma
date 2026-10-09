'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, Sparkles, PenTool, BookOpen, RotateCcw } from 'lucide-react';
import { WISDOM_COLLECTION } from '@/data/wisdom';
import { WisdomCard } from '@/components/WisdomCard';
import { WisdomCategory } from '@/lib/types';

const CATEGORIES: ('Dhammaan' | WisdomCategory)[] = [
  'Dhammaan',
  'Nolosha',
  'Guusha',
  'Samirka',
  'Waaya-aragnimada',
  'Aqoonta',
];

export default function WisdomCollectionPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Dhammaan' | WisdomCategory>('Dhammaan');

  const filteredQuotes = useMemo(() => {
    return WISDOM_COLLECTION.filter((quote) => {
      const matchesSearch =
        quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'Dhammaan' ? true : quote.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Dhammaan');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ururinta Buuxda ee 707 Xikmadood</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dhammaan Xikmadaha
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Ka dhex baaro, akhriso, oo la wadaag xikmadaha ugu miisaanka culus ee nolosha, guusha,
            iyo samirka.
          </p>
        </div>

        <Link
          href="/submit"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/20 transition-all self-start md:self-auto"
        >
          <PenTool className="w-4 h-4" />
          <span>Soo Bandhig Xikmad</span>
        </Link>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Raadi eray xikmad ah ama qoraa..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Nadiifi
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:inline-block flex-shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Meta */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 px-1">
        <span>
          Waxaa la helay <strong className="text-slate-900 dark:text-white">{filteredQuotes.length}</strong> xikmadood
        </span>
        {(searchQuery || selectedCategory !== 'Dhammaan') && (
          <button
            onClick={handleResetFilters}
            type="button"
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Dib u celi shaandhada</span>
          </button>
        )}
      </div>

      {/* Grid of Wisdom Cards */}
      {filteredQuotes.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center max-w-md mx-auto my-12 border border-slate-200 dark:border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
            Wax xikmad ah lama helin
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Lama helin xikmad u dhiganta baadhitaankaaga "{searchQuery}".
          </p>
          <button
            onClick={handleResetFilters}
            type="button"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            Tus Dhammaan Xikmadaha
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote) => (
            <WisdomCard key={quote.id} quote={quote} />
          ))}
        </div>
      )}
    </div>
  );
}
