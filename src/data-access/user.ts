import prisma from '@/lib/prisma';
import { verifySession } from '@/lib/session';
import { cache } from 'react';
import 'server-only';

export const getUser = cache(async () => {
	// Verify user's session
	const session = await verifySession();
	if (!session) return null;

	// Fetch user data
	try {
		const user = await prisma.user.findFirst({
			where: { id: session.userId },
			include: { quizResults: true }
		});

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
});
