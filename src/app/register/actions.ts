'use server';

import prisma from '@/lib/prisma';
import { createSession } from '@/lib/session';
import { z } from 'zod';
import { createServerAction } from 'zsa';

export const registerAction = createServerAction()
	.input(
		z.object({
			firstname: z.string().min(2).max(255),
			lastname: z.string().min(2).max(255)
		})
	)
	.handler(async ({ input }) => {
		const firstname = input.firstname.toLowerCase();
		const lastname = input.lastname.toLowerCase();

		// Check if the user's name already exists
		const existingUser = await prisma.user.findFirst({
			where: { firstname, lastname }
		});

		if (existingUser) {
			throw new Error('An user with that name already exists, please use a different name.');
		}

		// Insert the user into the database
		const user = await prisma.user.create({
			data: {
				firstname,
				lastname
			}
		});

		if (!user) {
			throw new Error('An error occurred while creating your account.');
		}

		// Initialize quiz
		await prisma.quizResult.create({
			data: {
				userId: user.id,
				scoreTime: 0,
				correctAnswers: 0,
				wrongAnswers: 0
			}
		});

		// Create a session for the user
		const userId = user.id;

		await createSession(userId);
	});
