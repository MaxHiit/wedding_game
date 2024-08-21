import prisma from '@/lib/prisma';
import 'server-only';

export const getLeaderboard = async () => {
	const quizs = await prisma.quizResult.findMany({
		orderBy: [{ correctAnswers: 'desc' }, { scoreTime: 'asc' }],
		include: { user: true }
	});

	return quizs;
};
