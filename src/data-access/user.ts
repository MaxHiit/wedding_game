import prisma from '@/lib/prisma';

export const getUserById = async (id: string) => {
	const user = await prisma.user.findFirst({
		where: { id: id }
	});

	return user;
};

export const getUserByName = async (firstname: string, lastname: string) => {
	const user = await prisma.user.findFirst({
		where: { firstname, lastname }
	});

	return user;
};

export const createUser = async (firstname: string, lastname: string) => {
	const user = await prisma.user.create({
		data: {
			firstname,
			lastname
		}
	});

	return user;
};
