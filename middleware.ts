import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: Request) {
    // Extract JWT token from cookies
    const authToken = req.headers.get('cookie')?.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

    if (!authToken) {
        return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login page if no token is found
    }

    try {
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) throw new Error('JWT secret is not defined.');

        // Verify token using 'jose'
        const { payload } = await jwtVerify(
            authToken,
            new TextEncoder().encode(jwtSecret)
        );

        // Add user info to request headers if needed
        const res = NextResponse.next();
        res.headers.set('x-user-id', String(payload.sub));
        return res;

    } catch (error) {
        console.error(error);
        // Redirect if the token is invalid or expired
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/task/:path*', '/sharedTask/:path*', '/profile/:path*'], // Apply to specific routes
};
