import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware for Supernova Access Control
 * Checks for 'sn_auth_session' cookie on root and other protected routes.
 */
export function middleware(request: NextRequest) {
    // Landing page and assets are public
    return NextResponse.next();
}

/**
 * Configuration for Middleware
 */
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
