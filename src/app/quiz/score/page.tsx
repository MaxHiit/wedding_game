import Confetti from '@/components/confetti';
import { StatCard } from '@/components/stat-card/indes';
import { Title } from '@/components/title';
import { Button } from '@/components/ui/button';
import { getUser } from '@/data-access/user';
import { formatTime } from '@/utils';
import Link from 'next/link';

export default async function ScorePage() {
	const user = await getUser();

	return (
		<>
			<Title>Result</Title>
			<div className='grid lg:grid-cols-4 grid-cols-1 gap-10 mt-8'>
				<StatCard title='Temps total' value={formatTime(user?.quizResults?.scoreTime ?? 0)} />
				<StatCard title='Bonnes réponses' value={user?.quizResults?.correctAnswers ?? 0} />
				<StatCard title='Mauvaise réponses' value={user?.quizResults?.wrongAnswers ?? 0} />
			</div>
			<Confetti />
			<Button
				asChild
				variant='link'
				className='font-title text-2xl mt-auto underline-offset hover:underline'
			>
				<Link href='/leaderboard'>Voir les scores</Link>
			</Button>
		</>
	);
}
