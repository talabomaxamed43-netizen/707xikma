# 707 Xikmadood - Web Application Template (Next.js 15 + Clerk + Tailwind CSS)

A complete, production-ready full-stack template for the **"707 Xikmadood"** Somali wisdom platform. Unauthenticated guests can view the landing hero and a preview of 5 quotes. The full collection of 707 wisdom quotes and the community submission form are protected via Clerk Authentication (Google OAuth `@gmail.com`).

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router) & React 19
- **Styling**: Tailwind CSS 3.4 (with Dark/Light Mode & Glassmorphism UI)
- **Authentication**: `@clerk/nextjs` (Google OAuth / Gmail setup)
- **Icons**: `lucide-react`
- **Language**: TypeScript

---

## 📁 Directory Structure

```text
707-xikmadood/
├── app/
│   ├── layout.tsx            # Root layout wrapped in <ClerkProvider>
│   ├── page.tsx              # Landing Hero & 5-quote Guest Preview
│   ├── globals.css           # Tailwind & Glassmorphism styles
│   ├── xikmadaha/
│   │   └── page.tsx          # Protected: Full 707 collection feed + search & filters
│   └── submit/
│       └── page.tsx          # Protected: Community submission form
├── components/
│   ├── Navbar.tsx            # Responsive navbar with Clerk <SignedIn>/<SignedOut>
│   ├── WisdomCard.tsx        # Wisdom card with Like, Bookmark, Copy & Share
│   ├── SubmissionForm.tsx    # Submission form pre-filled with Clerk useUser()
│   └── ThemeToggle.tsx       # Dark/Light mode switcher
├── data/
│   └── wisdom.ts             # Authentic 707 Xikmadood wisdom quote records
├── lib/
│   └── types.ts              # TypeScript models (WisdomQuote, Category, etc.)
├── middleware.ts             # Clerk clerkMiddleware() route protection
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript compiler configuration
├── package.json              # Project dependencies
└── .env.local                # Clerk environment variables
```

---

## 🔑 Clerk Setup

1. Sign in to your [Clerk Dashboard](https://dashboard.clerk.com).
2. Create an application and enable **Google OAuth**.
3. Under **User & Authentication > Social Connections**, configure Google.
4. Copy your keys into `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/xikmadaha
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/xikmadaha
```

---

## 🛠️ Getting Started

```bash
cd 707-xikmadood
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
