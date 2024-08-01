import { opacity, slideIn, translate } from '@/anims';
import { MotionTitle } from '@/components/title';
import { COUNTDOWN, QUIZ_DATA } from '@/constants';
import { useCountdown } from '@/hooks/useCountdown';
import { useGameStore } from '@/stores/useGameStore';
import { formatTime, shuffleArray } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { type MouseEvent, useMemo, useState } from 'react';

export const Questions = () => {
	const { setRightAnswers, setRemainingTime, calculatePoints, player, setPlayer } = useGameStore(
		(state) => state
	);

	const quizLength = QUIZ_DATA.length;

	const [quizIndex, setQuizIndex] = useState(0);

	const { timeLeft, pause } = useCountdown({ initialTime: COUNTDOWN, callback: () => endGame(0) });

	const quizs = useMemo(() => [...QUIZ_DATA], []);
	const shuffledAnswers = useMemo(() => shuffleArray(quizs[quizIndex].answers), [quizs, quizIndex]);

	const endGame = (time: number) => {
		pause();

		setRemainingTime(time);

		const finalScore = calculatePoints();

		setPlayer({ ...player, score: finalScore });
	};

	const checkAnswerAndNavigate = (event: MouseEvent<HTMLButtonElement>) => {
		const answer = (event.target as HTMLButtonElement).value;

		const isRightAnswer = quizs[quizIndex] && quizs[quizIndex].answer === answer;

		if (isRightAnswer) {
			setRightAnswers();
		}

		if (quizIndex + 1 === quizLength) {
			endGame(timeLeft);
			return;
		}

		setQuizIndex((prev) => prev + 1);
	};

	return (
		<>
			<motion.div
				variants={opacity}
				initial='initial'
				animate='open'
				className='w-full flex justify-between items-center mb-4'
			>
				<p className='font-title font-semibold'>{formatTime(timeLeft)}</p>
				<p className='font-title font-semibold'>{`${quizIndex + 1} / ${quizLength}`}</p>
			</motion.div>
			<AnimatePresence>
				<div className='overflow-hidden'>
					<MotionTitle
						key={quizs[quizIndex].question}
						variants={translate}
						initial='initial'
						animate='enter'
						exit='exit'
						className='font-title text-xl text-center'
					>
						{quizs[quizIndex].question}
					</MotionTitle>
				</div>
			</AnimatePresence>
			<AnimatePresence>
				<div className='flex flex-col gap-4 mt-4' key='anwser_wrapper'>
					{shuffledAnswers.map((answer, idx) => (
						<motion.button
							key={`a_${answer}`}
							variants={slideIn}
							custom={idx}
							initial='initial'
							animate='enter'
							exit='exit'
							className='bg-black uppercase text-slate-50 py-2 px-4'
							value={answer}
							onClick={checkAnswerAndNavigate}
						>
							{answer}
						</motion.button>
					))}
				</div>
			</AnimatePresence>
		</>
	);
};
