'use server';

import prisma from '@/lib/prisma';
import { verifySession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createServerAction } from 'zsa';

export const completeQuiz = createServerAction()
	.input(
		z.object({
			scoreTime: z.number(),
			correctAnswers: z.number(),
			wrongAnswers: z.number()
		})
	)
	.handler(async ({ input }) => {
		const session = await verifySession();
		const userId = session?.userId;

		const scoreTime = input.scoreTime;
		const correctAnswers = input.correctAnswers;
		const wrongAnswers = input.wrongAnswers;

		let existingUser = await prisma.user.findUnique({
			where: { id: userId },
			include: { quizResults: true }
		});

		if (!existingUser?.quizResults) {
			throw new Error('Something wrong try again');
		}

		if (existingUser && existingUser?.quizResults?.status == 'COMPLETE') {
			throw new Error('You already complete the quiz');
		} else {
			await prisma.quizResult.update({
				where: {
					id: existingUser?.quizResults.id
				},
				data: {
					scoreTime,
					correctAnswers,
					wrongAnswers,
					status: 'COMPLETE'
				}
			});

			redirect('/quiz/score');
		}
	});
