export default async function QuizLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='flex flex-col items-center p-4 pt-20 max-w-5xl w-full m-auto h-full'>
			{children}
		</main>
	);
}
