// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(NextRequest) {

  const userData = request.cookies.get('userData');


  const protectedRoutes = [
    '/Store',

    '/admin'
  ];


  const adminRoutes = [
    '/Admin/dashboard',
  ];


  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );


  const isAdminRoute = adminRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );


  if (isProtectedRoute && !userData) {
    return NextResponse.redirect(new URL('/SignIn', request.url));
  }


  if (isAdminRoute) {
    const userHasAdminPermission = false; 

    if (!userHasAdminPermission) {
      return NextResponse.redirect(new URL('/Store', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/Store/:path*', 
    '/Admin/:path*'
  ]
}