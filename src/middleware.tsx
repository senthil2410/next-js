import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware=(request: NextRequest)=>
{
    const { pathname } = request.nextUrl;

     if (pathname.startsWith('/userdetails/'))
     {
        const role = request.cookies.get('role')?.value;


        if (role !== 'admin' && role !== 'manager')
        {
            const url = request.nextUrl.clone();
            url.pathname = '/unauthorized';
             return NextResponse.redirect(url);
        }

     }

      return NextResponse.next();
}

export const config = {
  matcher: '/userdetails/:path*',
};
