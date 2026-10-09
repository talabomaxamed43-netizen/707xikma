import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: '707 Xikmadood | Somalilibrary Wisdom Platform',
  description:
    'Madal casri ah oo lagu kaydiyo laguna wadaago xikmadaha ugu sarreeya ee Soomaalida iyo kuwa caalamiga ah. Soo gal Google @gmail.com si aad u hesho xikmadaha oo dhan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="so" suppressHydrationWarning>
        <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-200">
          <Navbar />
          <main className="flex-1">{children}</main>

          {/* Global Minimalist Footer */}
          <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500 dark:text-slate-400">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© 2026 707 Xikmadood (Somalilibrary). Dhammaan xuquuqda way dhowran yihiin.</p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Clerk Auth Protected
                </span>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
