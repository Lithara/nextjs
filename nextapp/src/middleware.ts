import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
  ]
}

//2:21:50