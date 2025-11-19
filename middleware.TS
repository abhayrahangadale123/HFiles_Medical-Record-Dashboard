// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

   if (pathname.startsWith('/Deshbord')) {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      // redirect to login
      const url = req.nextUrl.clone();
      url.pathname = '/Login';
      return NextResponse.redirect(url);
    }
   }

  return NextResponse.next();
}

 export const config = {
  matcher: ['/dashboard/:path*'],
};
