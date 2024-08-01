'use client';

import { Title } from '@/components/title';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Skull } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useServerAction } from 'zsa-react';
import { registerAction } from './actions';

const registrationSchema = z.object({
	firstname: z.string().min(2).max(255),
	lastname: z.string().min(2).max(255)
});

export default function RegisterPage() {
	const { execute, isPending, error } = useServerAction(registerAction, {
		onError({ err }) {
			console.log(err);
		}
	});

	const form = useForm<z.infer<typeof registrationSchema>>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			firstname: '',
			lastname: ''
		}
	});

	const onSubmit = (values: z.infer<typeof registrationSchema>) => {
		execute(values);
	};

	return (
		<main className='flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto space-y-8'>
			<Title>Entrer votre nom et prénom</Title>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
					<FormField
						control={form.control}
						name='firstname'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='sr-only'>Email</FormLabel>
								<FormControl>
									<Input {...field} className='w-full' placeholder='Enter your firstname' type='text' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastname'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='sr-only'>Lastname</FormLabel>
								<FormControl>
									<Input {...field} className='w-full' placeholder='Enter your lastname' type='text' />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{error && (
						<Alert variant='destructive'>
							<Skull className='h-4 w-4' />
							<AlertDescription>{error.message}</AlertDescription>
						</Alert>
					)}

					<Button disabled={isPending} variant='link' type='submit' className='w-full'>
						Register
					</Button>
				</form>
			</Form>
		</main>
	);
}
