import { Title } from '@/components/title';
import { Button } from '@/components/ui/button';
import { RULES_DATA } from '@/constants';
import Link from 'next/link';

export default function RulesPage() {
	return (
		<main className='flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto space-y-8'>
			<Title>Regle du jeu</Title>
			<div className='flex flex-col gap-5 my-8 text-center'>
				{RULES_DATA.map((rule) => (
					<p key={rule}>{rule}</p>
				))}
			</div>
			<Button asChild variant='link'>
				<Link href='/quiz'>Play</Link>
			</Button>
		</main>
	);
}
