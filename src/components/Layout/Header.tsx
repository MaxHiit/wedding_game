import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const animateLogoVariant = {
	initial: { scale: 1.5, marginTop: '5rem' },
	start: { scale: 0.5, marginTop: 0, transition: { duration: 0.2, ease: 'easeIn' } },
	stop: { scale: 1.5, marginTop: '5rem' }
};

export const Header = () => {
	const [isStarted, setIsStarted] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === '/') {
			setIsStarted(false);
		} else {
			setIsStarted(true);
		}
	}, [pathname]);

	return (
		<header className='p-4'>
			<motion.svg
				width='173'
				height='222'
				viewBox='0 0 173 222'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				variants={animateLogoVariant}
				animate={isStarted ? 'start' : 'stop'}
				className='will-change-transform ms-auto me-auto'
			>
				<path
					d='M128.317 63.1283L156.353 0.630066H171.89L167.217 2.96645L164.414 8.45695V114.061L166.75 118.617L171.423 123.641H141.751L147.241 118.617L148.994 114.061V23.4098L130.653 63.1283H128.317Z'
					fill='black'
				/>
				<path
					d='M123.293 80.1839H120.49L110.327 102.496L97.4765 80.1839H79.019L103.668 122.823L123.293 80.1839Z'
					fill='black'
				/>
				<path d='M88.2477 63.1283H69.5567L55.4216 36.844V4.60192L88.2477 63.1283Z' fill='black' />
				<path
					d='M128.317 63.1283L156.353 0.630066H171.89L167.217 2.96645L164.414 8.45695V114.061L166.75 118.617L171.423 123.641H141.751L147.241 118.617L148.994 114.061V23.4098L130.653 63.1283H128.317Z'
					stroke='black'
				/>
				<path
					d='M123.293 80.1839H120.49L110.327 102.496L97.4765 80.1839H79.019L103.668 122.823L123.293 80.1839Z'
					stroke='black'
				/>
				<path d='M88.2477 63.1283H69.5567L55.4216 36.844V4.60192L88.2477 63.1283Z' stroke='black' />
				<path
					d='M7.29206 121.888V109.739L8.46025 103.898L9.62844 100.043L11.9648 94.7863L15.703 90.2304L14.6517 94.7863V99.3423V104.365L15.703 108.454L17.5721 113.244L25.6327 123.757L44.9078 137.776L65.2344 149.808L81.0049 161.14L87.8973 168.499L93.5046 176.326L95.6073 182.751L96.3083 191.279L94.7896 200.274L92.3364 205.765L89.6496 210.437L85.9114 215.344L81.7059 218.848L77.5004 221.769L79.7199 217.446L82.29 211.722L83.4582 204.479L82.9909 195.368L81.0049 188.592L77.734 182.751L74.1126 178.546L65.2344 170.602L54.8375 163.359L34.0436 151.093L23.8804 143.85L15.8199 137.075L11.4975 132.402L8.46025 126.795L7.29206 121.888Z'
					fill='black'
				/>
				<path
					d='M1.10064 218.848C1.10064 212.267 0.867004 198.989 0.867004 198.522L4.4884 204.596L9.16116 210.32L14.418 215.461L21.0767 220.601L13.2498 218.848L9.9789 218.264L6.59114 218.031L3.9043 218.264L1.10064 218.848Z'
					fill='black'
				/>
			</motion.svg>
		</header>
	);
};
