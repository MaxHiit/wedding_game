'use client';

import { completeQuiz } from '@/app/quiz/actions';
import { Loader } from '@/components/loader';
import { COUNTDOWN, QUIZ_DATA } from '@/constants';
import { formatTime } from '@/utils';
import { useCallback, useMemo, useState } from 'react';
import Countdown from 'react-countdown';
import { useServerAction } from 'zsa-react';
import { Question } from '../question';

let remainingTime = COUNTDOWN;

export const QuizForm = () => {
	const quizLength = QUIZ_DATA.length;
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<{ answer: string; timeLeft: number }[]>([]);
	const [questionStartTime, setQuestionStartTime] = useState(Date.now());

	const questions = useMemo(() => [...QUIZ_DATA], []);

	const { execute, isPending, error } = useServerAction(completeQuiz, {
		onError({ err }) {
			console.log(err);
		}
	});

	const handleAnswer = useCallback(
		(answer: string) => {
			setAnswers((prev) => [...prev, { answer, timeLeft: COUNTDOWN - remainingTime }]);

			if (currentQuestionIndex < quizLength - 1) {
				setCurrentQuestionIndex((prev) => prev + 1);
				setQuestionStartTime(Date.now());
				remainingTime = COUNTDOWN;
			} else {
				const correct = answers.filter((ans, index) => ans.answer === questions[index].answer).length;
				const wrong = questions.length - correct;
				const totalTimeLeft = answers.reduce((acc, current) => acc + current.timeLeft, 0);

				execute({ scoreTime: totalTimeLeft, correctAnswers: correct, wrongAnswers: wrong });
			}
		},
		[answers, currentQuestionIndex, execute, questions, quizLength]
	);

	return (
		<>
			{isPending ? (
				<Loader />
			) : (
				<>
					<div className='w-full flex justify-between items-center mb-8'>
						<Countdown
							key={currentQuestionIndex}
							date={questionStartTime + COUNTDOWN}
							onTick={(delta) => (remainingTime = delta.total)}
							intervalDelay={0}
							precision={3}
							onComplete={() => handleAnswer('')}
							renderer={(props) => <div>{formatTime(props.total)}</div>}
						/>
						<p className='font-title font-semibold'>{`${currentQuestionIndex + 1} / ${quizLength}`}</p>
					</div>

					<Question item={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
				</>
			)}
		</>
	);
};
