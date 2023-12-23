import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
	return (
		<>
			<Header />
			<main className='p-4'>
				<div className='flex flex-col items-center h-full'>
					<Outlet />
				</div>
			</main>
		</>
	);
};
