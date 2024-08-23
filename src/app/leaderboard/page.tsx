import LeaderboardCard from '@/components/leaderboard-card';
import { LeaderboardTopCard } from '@/components/leaderboard-top-card';
import { Title } from '@/components/title';
import { getLeaderboard } from '@/data-access/leaderboard';
import { unstable_noStore as noStore } from 'next/cache';

export default async function LeaderboardPage() {
	noStore();
	const quizs = await getLeaderboard();

	const first = quizs[0];
	const second = quizs[1];
	const third = quizs[2];

	console.log('First quiz:', first);
	console.log('Second quiz:', second);
	console.log('Third quiz:', third);
	console.log('All quizs:', quizs);

	if (quizs.length === 0) {
		return (
			<main className='flex flex-col items-center p-4 pt-20 max-w-screen-md w-full mx-auto'>
				<Title>Leaderboard</Title>
				<p className='text-center text-gray-500 mt-8'>Pas de résultat pour le moment</p>
			</main>
		);
	}

	return (
		<main className='flex flex-col items-center p-4 pt-20 max-w-screen-md w-full mx-auto'>
			<Title>Leaderboard</Title>

			<div className='hidden md:grid grid-cols-3 gap-1 justify-end items-end my-8 w-full'>
				{second?.user && (
					<LeaderboardTopCard
						firstname={second.user.firstname}
						lastname={second.user.lastname}
						point={second.correctAnswers ?? 0}
						time={second.scoreTime ?? 0}
						rank={1}
					/>
				)}

				{first?.user && (
					<LeaderboardTopCard
						firstname={first.user.firstname}
						lastname={first.user.lastname}
						point={first.correctAnswers ?? 0}
						time={first.scoreTime ?? 0}
						rank={0}
					/>
				)}

				{third?.user && (
					<LeaderboardTopCard
						firstname={third.user.firstname}
						lastname={third.user.lastname}
						point={third.correctAnswers ?? 0}
						time={third.scoreTime ?? 0}
						rank={2}
					/>
				)}
			</div>
			<div className='space-y-4 md:mt-none mt-8 w-full'>
				{quizs.map(
					(quiz, idx) =>
						quiz.user && (
							<LeaderboardCard
								key={idx}
								firstname={quiz.user.firstname}
								lastname={quiz.user.lastname}
								point={quiz.correctAnswers ?? 0}
								time={quiz.scoreTime ?? 0}
								rank={idx}
							/>
						)
				)}
			</div>
		</main>
	);
}
