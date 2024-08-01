import { Questions } from '@/components/questions';

export default function QuizPage() {
	return (
		<main className='flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto space-y-8'>
			<Questions />
		</main>
	);
}
