import { User } from '@/types';
import { formatTime } from '@/utils';
import clsx from 'clsx';

interface LeaderboardCardProps {
	firstname: User['firstname'];
	lastname: User['lastname'];
	point: number;
	time: number;
	rank: number;
}

export const LeaderboardCard = ({
	firstname,
	lastname,
	point,
	time,
	rank
}: LeaderboardCardProps) => {
	const getCardStyle = (rank: number) => {
		if (rank === 0) {
			return 'bg-yellow-300 md:hidden';
		} else if (rank === 1) {
			return 'bg-gray-300 md:hidden';
		} else if (rank === 2) {
			return 'bg-orange-400 md:hidden';
		} else {
			return 'bg-gray-100';
		}
	};

	return (
		<div
			className={clsx(
				getCardStyle(rank),
				'flex gap-x-4 gap-y-2 justify-between items-center border p-4 font-semibold text-lg duration-300 rounded-xl border-slate-700'
			)}
		>
			<div className='flex flex-col gap-1'>
				<p className='capitalize text-sm'>{`${firstname} ${lastname}`}</p>
				<p className='text-xs text-foreground opacity-60'>{formatTime(time)}</p>
			</div>
			<p>
				{point} {point > 0 ? 'points' : 'point'}
			</p>
			<div className='flex items-center gap-3'>
				<p>#{rank + 1}</p>
			</div>
		</div>
	);
};

export default LeaderboardCard;
