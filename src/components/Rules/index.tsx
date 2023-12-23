import { Button, Heading, Text } from '@/components/ui';
import { RULES_DATA } from '@/data';
import { useGameStore } from '@/stores/useGameStore';

export const Rules = () => {
	const { setStep } = useGameStore((state) => state);

	return (
		<>
			<Heading as='h1' size='3xl'>
				Regle du jeu
			</Heading>
			<div className='flex flex-col gap-5 mt-8 text-center'>
				{RULES_DATA.map((rule) => (
					<Text key={rule} as='p' size='xl'>
						{rule}
					</Text>
				))}
			</div>
			<div className='mt-8'>
				<Button variant='link' onClick={() => setStep('questions')}>
					Play
				</Button>
			</div>
		</>
	);
};
