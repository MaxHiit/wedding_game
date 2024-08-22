import 'server-only';

import { SessionPayload } from '@/types';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

const cookieParams = {
	name: 'session',
	duration: 24 * 60 * 60 * 1000
};

export async function encrypt(payload: SessionPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('1d')
		.sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
			algorithms: ['HS256']
		});

		return payload;
	} catch (error) {
		console.log('Failed to verify session');
	}
}

export async function createSession(userId: string) {
	const expires = new Date(Date.now() + cookieParams.duration);
	const session = await encrypt({ userId });

	cookies().set(cookieParams.name, session, {
		httpOnly: true,
		secure: true,
		expires,
		sameSite: 'lax',
		path: '/'
	});

	redirect('/quiz/rules');
}

export async function verifySession() {
	const cookie = cookies().get(cookieParams.name)?.value;
	const session = await decrypt(cookie);

	if (!session?.userId) {
		redirect('/register');
	}

	return { isAuth: true, userId: String(session.userId) };
}
