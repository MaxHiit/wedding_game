import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
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

		// Vérifiez si les résultats contiennent des utilisateurs associés
		console.log(quizs); // Ajoutez des logs pour déboguer

		revalidatePath('/leaderbooard');

		return quizs;
	} catch (error) {
		console.error('Erreur lors de la récupération des résultats:', error);
		return [];
	}
};
