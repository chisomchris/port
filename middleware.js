import { withAuth } from 'next-auth/middleware';

export default withAuth({
    // callbacks: {
    //     authorized: async ({ req, token }) => {
    //         const pathname = req.nextUrl.pathname;
    //         if (pathname.startsWith('/_next') || pathname.startsWith('favicon.ico') || pathname.startsWith('/auth')) {
    //             return true;
    //         }

    //         if (token) { return true }

    //         return false;
    //     }

    // },
    pages: {
        signIn: '/auth/login'
    }
});

export const config = {
    matcher: ['/((?!api|_next|static|_next/image|favicon.ico|auth/).*)']
}