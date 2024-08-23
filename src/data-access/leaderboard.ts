import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import 'server-only';

export type QuizResultWithUser = Prisma.QuizResultGetPayload<{
	include: { user: true };
}>;

export const getLeaderboard = async (): Promise<QuizResultWithUser[]> => {
	const quizs = await prisma.quizResult.findMany({
		where: {
			userId: { not: undefined }
		},
		orderBy: [{ correctAnswers: 'desc' }, { scoreTime: 'asc' }],
		include: { user: true }
	});

	return quizs;
};
