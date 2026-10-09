import Link from 'next/link';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { SubmissionForm } from '@/components/SubmissionForm';

export default function SubmitWisdomPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/xikmadaha"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ku noqo 707 Xikmadood</span>
        </Link>
      </div>

      {/* Submission Form Container */}
      <SubmissionForm />

      {/* Community Guidelines */}
      <div className="mt-12 p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-2">
          <BookOpen className="w-4 h-4 text-emerald-500" />
          <span>Xeerarka & Anshaxa Xikmadaha</span>
        </div>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>Fadlan xaqiiji in xikmaddaadu tahay mid dhisaysa anshaxa, aqoonta, ama nolosha.</li>
          <li>Xus haddii ay jirto isha asalka ah ama qofka laga soo xigtay.</li>
          <li>Ha soo gudbin xayeysiis ama waxyaabo ka baxsan hadafka madasha.</li>
        </ul>
      </div>
    </div>
  );
}
