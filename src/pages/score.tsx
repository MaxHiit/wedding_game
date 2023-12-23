import { useGameStore } from '@/stores/useGameStore';
import { MotionHeading, Text } from '@/components/ui';
import { MaskText } from '@/components/';
import { useEffect, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import { translate } from '@/helpers';
import { PlayerSlice } from '@/stores/playerSlice';
import { motion } from 'framer-motion';
import { scale } from '@/helpers/anim';

export const Score = () => {
	const { score, setPlayer } = useGameStore((state) => state);

	const [scoreState, setScoreState] = useState(score);
	const gameLocalStorage = useReadLocalStorage<PlayerSlice['player']>('game-storage');

	useEffect(() => {
		if (gameLocalStorage) {
			if (gameLocalStorage.name != '' && gameLocalStorage.status === 'completed') {
				setPlayer(gameLocalStorage);
				setScoreState(gameLocalStorage.score);
			}
		}
	}, []);

	return (
		<>
			<motion.div
				variants={scale}
				initial='initial'
				animate='open'
				className='origin-center ms-auto me-auto flex items-center justify-center rounded-full border-4 border-primary w-28 h-28'
			>
				<Text size='5xl' weight='bold'>
					{scoreState}
				</Text>
			</motion.div>
			<MaskText className='mr-auto mt-auto'>
				<MotionHeading
					as='h1'
					size='8xl'
					align='left'
					variants={translate}
					initial='initial'
					animate='enter'
				>
					The <br /> Score
				</MotionHeading>
			</MaskText>
		</>
	);
};
