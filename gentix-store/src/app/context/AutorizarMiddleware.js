// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(NextRequest) {
  // Recupera o token/usuário do cookie ou local storage
  const userData = request.cookies.get('userData');

  // Rotas que requerem autenticação
  const protectedRoutes = [
    '/Store',
    '/Profile',
    '/Checkout',
    '/admin'
  ];

  // Rotas específicas de admin
  const adminRoutes = [
    '/admin/dashboard',
    '/admin/users',
    '/admin/products'
  ];

  // Verificar se a rota atual é protegida
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Verificar se a rota é de admin
  const isAdminRoute = adminRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // Sem usuário logado
  if (isProtectedRoute && !userData) {
    return NextResponse.redirect(new URL('/SignIn', request.url));
  }

  // Rota de admin requer permissão especial
  if (isAdminRoute) {
    // Aqui você precisaria validar se o usuário tem permissão de admin
    // Por exemplo, verificando o token ou dados do usuário
    const userHasAdminPermission = false; // Implementar lógica real

    if (!userHasAdminPermission) {
      return NextResponse.redirect(new URL('/Store', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/Store/:path*', 
    '/Profile/:path*', 
    '/Checkout/:path*',
    '/admin/:path*'
  ]
}