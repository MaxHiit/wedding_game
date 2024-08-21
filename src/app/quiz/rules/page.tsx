import { Title } from '@/components/title';
import { Button } from '@/components/ui/button';
import { RULES_DATA } from '@/constants';
import Link from 'next/link';

export default function RulesPage() {
	return (
		<>
			<Title>Regle du jeu</Title>
			<div className='space-y-4 mt-8'>
				<p className='font-body text-1xl text-center'>{}</p>
				{RULES_DATA.map((rule) => (
					<p key={rule} className='font-body text-1xl  text-center'>
						{rule}
					</p>
				))}
			</div>

			<Button
				asChild
				variant='link'
				className='font-title text-2xl mt-auto underline-offset hover:underline'
			>
				<Link href='/quiz'>Play</Link>
			</Button>
		</>
	);
}
