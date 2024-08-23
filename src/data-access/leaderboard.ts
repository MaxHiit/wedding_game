import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import 'server-only';

export type QuizResultWithUser = Prisma.QuizResultGetPayload<{
	include: { user: true };
}>;

export const getLeaderboard = async (): Promise<QuizResultWithUser[]> => {
	try {
		const quizs = await prisma.quizResult.findMany({
			orderBy: [{ correctAnswers: 'desc' }, { scoreTime: 'asc' }],
			include: { user: true } // Assurez-vous d'inclure l'utilisateur
		});

		return quizs;
	} catch (error) {
		console.error('Erreur lors de la récupération des résultats:', error);
		return [];
	}
};
