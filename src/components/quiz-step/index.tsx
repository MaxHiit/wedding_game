'use client';
import { NotRegister } from '@/components/not-register';
import { Questions } from '@/components/questions';
import { Rules } from '@/components/rules';
import { useGameStore } from '@/stores/useGameStore';

export const QuizStep = () => {
	const { step, player } = useGameStore((state) => state);

	if (!player.id) {
		return <NotRegister />;
	}

	return (
		<main className='flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto space-y-8'>
			{step === 'questions' ? <Questions /> : <Rules />}
		</main>
	);
};
