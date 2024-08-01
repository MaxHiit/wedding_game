import { useCountdown } from '@/hooks/useCountdown';
import { useRouter } from 'next/navigation';

export const NotRegister = () => {
	const router = useRouter();
	const { timeLeft } = useCountdown({ initialTime: 5, callback: () => router.push('/register') });

	return (
		<main className='flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto space-y-8'>
			<p>Il semblerait que vous ne soyez pas connecter.</p>
			<p>Vous allez être rediriger vers la page d&apos;inscription dans {timeLeft}</p>
		</main>
	);
};
