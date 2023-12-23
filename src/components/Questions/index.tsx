import { MaskText } from '@/components';
import { MotionButton, MotionHeading, Text } from '@/components/ui';
import { COUNTDOWN, QUIZ_DATA } from '@/data';
import { formatTime, opacity, shuffleArray, slideIn, translate } from '@/helpers';
import { db } from '@/lib/firebase';
import type { PlayerSlice } from '@/stores/playerSlice';
import { useGameStore } from '@/stores/useGameStore';
import { addDoc, collection } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

export const Questions = () => {
	const [quizIndex, setQuizIndex] = useState(0);
	const [countdown, setCountdown] = useState(COUNTDOWN);
	const [isCountdownRunning, setCountdownRunning] = useState(true);

	const { setRightAnswers, setRemainingTime, calculatePoints, player, setPlayer } = useGameStore(
		(state) => state
	);

	const navigate = useNavigate();

	const playerCollectionRef = collection(db, 'players');

	const [playerLocalStorage, setPlayerLocalPlayer] = useLocalStorage<PlayerSlice['player']>(
		'game-storage',
		{
			name: '',
			id: '',
			score: 0,
			status: 'pending'
		}
	);

	const quizLength = QUIZ_DATA.length;
	const quizs = useMemo(() => [...QUIZ_DATA], []);

	const shuffledAnswers = useMemo(() => shuffleArray(quizs[quizIndex].answers), [quizs, quizIndex]);

	const createPlayerInDatabase = async (
		name: string,
		player_id: string,
		score: number,
		time: number
	) => {
		try {
			await addDoc(playerCollectionRef, {
				name,
				player_id,
				score,
				time
			});
		} catch (error) {
			console.log(error);
		} finally {
			navigate('/score');
		}
	};

	const checkAnswerAndNavigate = (event: MouseEvent<HTMLButtonElement>) => {
		const answer = (event.target as HTMLButtonElement).value;

		const isRightAnswer = quizs[quizIndex] && quizs[quizIndex].answer === answer;

		if (isRightAnswer) {
			setRightAnswers();
		}

		if (quizIndex + 1 === quizLength) {
			setQuizIndex(0);
			endGame(countdown);
			return;
		}

		setQuizIndex((prev) => prev + 1);
	};

	const endGame = (time: number) => {
		setCountdownRunning(false);

		setRemainingTime(time);

		const finalScore = calculatePoints();

		setPlayer({ ...player, score: finalScore, status: 'completed' });
		setPlayerLocalPlayer({ ...player, score: finalScore, status: 'completed' });
		createPlayerInDatabase(player.name, player.id, finalScore, time);
	};

	useEffect(() => {
		if (isCountdownRunning) {
			const intervalId = setInterval(() => {
				setCountdown((prevCountdown: number) => {
					const newCountdown = prevCountdown - 1;

					if (newCountdown === 0) {
						clearInterval(intervalId);
					}

					return newCountdown;
				});
			}, 1000);

			return () => clearInterval(intervalId);
		}
	}, [isCountdownRunning]);

	useEffect(() => {
		if (countdown === 0) {
			endGame(0);
		}
	}, [countdown]);

	return (
		<>
			<motion.div
				variants={opacity}
				initial='initial'
				animate='open'
				className='w-full flex justify-between items-center mb-4'
			>
				<Text as='p' className='font-title font-semibold'>
					{formatTime(countdown)}
				</Text>
				<Text as='p' className='font-title font-semibold'>{`${quizIndex + 1} / ${quizLength}`}</Text>
			</motion.div>
			<AnimatePresence>
				<MaskText>
					<MotionHeading
						key={quizs[quizIndex].question}
						variants={translate}
						initial='initial'
						animate='enter'
						exit='exit'
						as='h1'
						size='xl'
					>
						{quizs[quizIndex].question}
					</MotionHeading>
				</MaskText>
				<div className='flex flex-col gap-4 mt-4' key='anwser_wrapper'>
					{shuffledAnswers.map((answer, idx) => (
						<MotionButton
							key={`b_${answer}`}
							variants={slideIn}
							custom={idx}
							initial='initial'
							animate='enter'
							exit='exit'
							className='uppercase'
							value={answer}
							onClick={checkAnswerAndNavigate}
						>
							{answer}
						</MotionButton>
					))}
				</div>
			</AnimatePresence>
		</>
	);
};
