'use client';

import { Title } from '@/components/title';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between p-24'>
			<Title>Do You know the bride</Title>
			<p className='mt-8 text-center'>
				Anwser the questions to see how well you know the bride. The person with the most correct answer
				wins !
			</p>
			<div className='mt-8 flex gap-4'>
				<Link href='/register' className=' text-2xl underline-offset hover:underline'>
					Jouer
				</Link>
				<Link href='/leaderboard' className='text-2xl underline-offset hover:underline'>
					Leaderboard
				</Link>
			</div>
		</main>
	);
}
