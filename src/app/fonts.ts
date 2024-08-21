import clsx from 'clsx';
import localFont from 'next/font/local';

export const sfui = localFont({
	src: '../../public/fonts/SFUIText-Regular.ttf',
	variable: '--font-sfui',
	display: 'swap',
	preload: true
});

export const bodar = localFont({
	src: '../../public/fonts/BODAR.ttf',
	variable: '--font-bodar',
	display: 'swap',
	preload: true
});

export const fonts = { className: clsx(bodar.variable, sfui.variable) };
