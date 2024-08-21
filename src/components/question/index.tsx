'use client';

import { Title } from '@/components/title';
import { Quiz } from '@/types';
import { shuffleArray } from '@/utils';
import { useEffect, useState } from 'react';

interface QuestionProps {
	item: Omit<Quiz, 'answer'>;
	onAnswer: (answer: string) => void;
}

export const Question = ({ item, onAnswer }: QuestionProps) => {
	const { question, options } = item;
	// const shuffledOptions = useMemo(() => shuffleArray(options), [options]);
	const [shuffledOptions, setShuffledOptions] = useState(options);

	useEffect(() => {
		setShuffledOptions(shuffleArray([...options]));
	}, [options]);

	return (
		<>
			<div className='overflow-hidden'>
				<Title className='font-title text-xl text-center'>{question}</Title>
			</div>

			<div className='flex flex-col gap-4 mt-4' key='anwser_wrapper'>
				{shuffledOptions.map((option) => (
					<button
						key={option}
						className='bg-black uppercase text-slate-50 py-2 px-4 text-center rounded-md'
						onClick={() => onAnswer(option)}
					>
						{option}
					</button>
				))}
			</div>
		</>
	);
};
