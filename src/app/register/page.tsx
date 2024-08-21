import { RegisterForm } from '@/components/register-form';
import { Title } from '@/components/title';

export default async function RegisterPage() {
	return (
		<main className='flex flex-col items-center p-4 pt-20 max-w-3xl m-auto h-full w-full'>
			<Title>Entrer votre nom et prénom</Title>
			<RegisterForm />
		</main>
	);
}
