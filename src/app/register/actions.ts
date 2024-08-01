'use server';

import { registerUserUseCase } from '@/use-cases/user';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
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
		const currentUser = await registerUserUseCase(
			input.firstname.toLowerCase(),
			input.lastname.toLowerCase()
		);

		const oneDay = 24 * 60 * 60 * 1000;
		cookies().set('userToken', currentUser.id, { expires: Date.now() + oneDay });

		return redirect('/rules');
	});
