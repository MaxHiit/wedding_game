import { User } from '@/types';
import { formatTime } from '@/utils';
import clsx from 'clsx';

interface LeaderboardTopCardProps {
	firstname: User['firstname'];
	lastname: User['lastname'];
	point: number;
	time: number;
	rank: number;
}

export const LeaderboardTopCard = ({
	firstname,
	lastname,
	point,
	time,
	rank
}: LeaderboardTopCardProps) => {
	const getRankColor = (rank: number) => {
		if (rank === 0) {
			return 'from-yellow-300 h-40 rounded-xl ';
		} else if (rank === 1) {
			return 'from-gray-300 h-28 rounded-tl-xl ';
		} else if (rank === 2) {
			return 'from-orange-400 h-20 rounded-tr-xl ';
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<div className='flex items-center flex-col gap-3 font-semibold text-lg py-2 mb-1'>
				<p className='capitalize'>{`${firstname} ${lastname}`}</p>
				<p>
					{point} {point > 0 ? 'points' : 'point'}
				</p>
				<p>{formatTime(time)}</p>
			</div>
			<div
				className={clsx(
					getRankColor(rank),
					'w-full h-28 bg-gradient-to-b border-slate-700 flex items-center justify-center'
				)}
			>
				<p className='text-3xl'>#{rank + 1}</p>
			</div>
		</div>
	);
};
