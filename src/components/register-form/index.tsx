'use client';

import { registerAction } from '@/app/register/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useServerAction } from 'zsa-react';

const registrationSchema = z.object({
	firstname: z
		.string()
		.min(2, { message: 'Must be as least 2 character' })
		.max(255, { message: 'Must contain a maximum of 225 character' }),
	lastname: z
		.string()
		.min(2, { message: 'Must be as least 2 character' })
		.max(255, { message: 'Must contain a maximum of 225 character' })
});

export const RegisterForm = () => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full mt-8 flex flex-col flex-1'>
				<FormField
					control={form.control}
					name='firstname'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='sr-only'>Firstname</FormLabel>
							<FormControl>
								<Input {...field} className='w-full text-center' placeholder='prénom' type='text' />
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
								<Input {...field} className='w-full text-center' placeholder='nom' type='text' />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{error && (
					<Alert variant='destructive' className='mt-6'>
						<AlertCircle className='h-4 w-4' />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>{error.message}</AlertDescription>
					</Alert>
				)}

				<Button
					disabled={isPending}
					variant='link'
					type='submit'
					className='w-full font-title text-2xl underline-offset hover:underline mt-auto'
				>
					Register
				</Button>
			</form>
		</Form>
	);
};
