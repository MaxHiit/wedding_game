import { Header } from '@/components/header';
import type { Metadata } from 'next';
import './globals.css';

import { fonts } from './fonts';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body lang='fr' dir='ltr' className={fonts?.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
