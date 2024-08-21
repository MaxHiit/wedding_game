import { Title } from '@/components/title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
	return (
		<main className='flex flex-col items-center p-4 pt-20 max-w-3xl m-auto h-full'>
			<Title>Connaissez-vous bien la mariée ?</Title>
			<p className='font-body text-1xl mt-8 text-center'>
				Répondez aux questions pour voir à quel point vous connaissez bien la mariée. La personne avec
				le plus de bonnes réponses gagne !
			</p>
			<div className='flex flex-wrap gap-4 mt-auto'>
				<Button
					asChild
					variant='link'
					className='flex-1 font-title text-2xl underline-offset hover:underline'
				>
					<Link href='/register'>Jouer</Link>
				</Button>
				<Button
					asChild
					variant='link'
					className='flex-1 font-title text-2xl underline-offset hover:underline'
				>
					<Link href='/leaderboard'>Leaderboard</Link>
				</Button>
			</div>
		</main>
	);
}
