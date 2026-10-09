import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Sparkles, ArrowRight, Lock, BookOpen, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WISDOM_COLLECTION } from '@/data/wisdom';
import { WisdomCard } from '@/components/WisdomCard';

export default function HomePage() {
  // Unauthenticated guests only get the top 5 preview quotes
  const previewQuotes = WISDOM_COLLECTION.slice(0, 5);

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Ururinta 707 Xikmadood • Somalilibrary Edition</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
          Xigmaddu Waa Iftiin – Dhis <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Noloshaada, Guushaada & Samirkaaga
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Madal casri ah oo kulmisay xikmado nolosha badala. Si aad u hesho xogta buuxda ee 
          <strong className="text-slate-900 dark:text-white font-semibold"> 707 Xikmadood</strong> iyo 
          barnaamijka qorista, gal akoonkaaga <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">@gmail.com</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
          <SignedOut>
            <SignInButton mode="modal">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]"
              >
                <span>Ku Gal Google (@gmail.com)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/xikmadaha"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Fur 707-da Xikmadood</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SignedIn>

          <a
            href="#preview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <span>Arag Horudhaca (5 Xikmadood)</span>
          </a>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="p-4 rounded-2xl glass-card text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">707</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Xikmadood oo buuxa</span>
          </div>
          <div className="p-4 rounded-2xl glass-card text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">5</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Qaybood oo kala duwan</span>
          </div>
          <div className="p-4 rounded-2xl glass-card text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Clerk</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Google Auth Amni ah</span>
          </div>
          <div className="p-4 rounded-2xl glass-card text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">100%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Xor & Bilaash ah</span>
          </div>
        </div>
      </section>

      {/* Guest Preview Section (5 Quotes) */}
      <section id="preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Horudhac Kooban</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            5 Xikmadood oo Tijaabo ah
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Kuwani waa 5 xikmadood oo tusaale ah. Si aad u hesho ururinta buuxda ee 707 xikmadood iyo
            shaashadda aad xikmado ku soo gudbin karto, fadlan gal akoonkaaga.
          </p>
        </div>

        {/* 5 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewQuotes.map((quote) => (
            <WisdomCard key={quote.id} quote={quote} />
          ))}

          {/* 6th Card: Callout to unlock remaining 702 */}
          <div className="glass-card rounded-2xl p-7 border-2 border-dashed border-emerald-500/40 dark:border-emerald-500/30 flex flex-col justify-between items-center text-center bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20">
            <div className="my-auto">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Fur 702-da Xikmadood ee Kale
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Ururinta buuxda waxaa lagu xidhay akoonkaaga Google @gmail.com ee Clerk si loo sugo tayada bulshada.
              </p>
            </div>

            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="w-full py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/20"
                >
                  Gal Hadda si aad u furto
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/xikmadaha"
                className="w-full py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/20 text-center"
              >
                U Gudub 707 Xikmadood
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl glass-card">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Clerk Google Authentication
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Xaqiijin toos ah oo ku dhisan Google OAuth iyo Clerk, adigoon u baahnayn furaha sirta ah ee dhibka badan.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              707 Xikmadood oo Qoto Dheer
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Kala saaran qaybaha nolosha, guusha, samirka, waaya-aragnimada, iyo aqoonta oo leh shaandhayn toos ah.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Soo Bandhig Xikmaddada
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Qaybta gaarka ah ee xubnaha u sahlaysa inay ku darsadaan xikmado cusub oo magacooda ku qoran.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
