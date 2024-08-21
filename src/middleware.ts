import prisma from '@/lib/prisma';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: ['/register', '/quiz', '/quiz/rules']
};

export default async function middleware(req: NextRequest) {
	const cookie = cookies().get('session')?.value;
	const session = await decrypt(cookie);

	if (!session && !req.nextUrl.pathname.startsWith('/register')) {
		return NextResponse.redirect(new URL('/register', req.nextUrl));
	}

	try {
		if (!session) return NextResponse.next();

		const user = await prisma.user.findFirst({
			where: { id: session.userId },
			include: { quizResults: true }
		});

		const status = user?.quizResults?.status;

		if (req.nextUrl.pathname.startsWith('/register') && status === 'IN_PROGRESS') {
			return NextResponse.redirect(new URL('/quiz/rules', req.nextUrl));
		}

		if (status === 'COMPLETE') {
			return NextResponse.redirect(new URL('/quiz/score', req.nextUrl));
		}
	} catch (err) {
		console.log('Error fetching user or quiz status:', err);
	}

	return NextResponse.next();
}
