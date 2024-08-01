import { createUser, getUserByName } from '@/data-access/user';

export async function registerUserUseCase(firstname: string, lastname: string) {
	const existingUser = await getUserByName(firstname, lastname);

	if (existingUser) {
		throw new Error('An user with that name already exists.');
	}

	const user = await createUser(firstname, lastname);

	return { id: user.id };
}
