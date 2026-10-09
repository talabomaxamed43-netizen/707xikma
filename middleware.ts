import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

/**
 * Route matcher to protect the complete 707 collection and submission dashboard.
 * Unauthenticated users attempting to access these routes are redirected by Clerk.
 */
const isProtectedRoute = createRouteMatcher([
  '/xikmadaha(.*)',
  '/submit(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
