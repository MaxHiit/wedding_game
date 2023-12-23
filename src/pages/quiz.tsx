import { Questions, Rules } from '@/components';
import { useGameStore } from '@/stores/useGameStore';

export const Quiz = () => {
	const { step } = useGameStore((state) => state);

	if (step === 'questions') return <Questions />;

	return <Rules />;
};
