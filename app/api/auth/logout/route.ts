import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  console.log('Logout route called');

  // Set a cookie to expire, effectively logging the user out
  return new NextResponse(
    JSON.stringify({ message: 'Logout successful' }),
    {
      status: 200,
      headers: {
        'Set-Cookie': serialize('authToken', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          expires: new Date(0),
          path: '/',
        }),
        'Content-Type': 'application/json',
      },
    }
  );
}
