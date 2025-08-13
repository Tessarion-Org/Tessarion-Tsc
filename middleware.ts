import { withAuth } from 'next-auth/middleware';

export default withAuth({});

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
};

> This middleware requires an authenticated session for /dashboard and /admin. Unauthed users will be redirected by NextAuth to its default flow.
