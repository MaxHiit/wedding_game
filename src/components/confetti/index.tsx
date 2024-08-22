'use client';

import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Confetti() {
	function randomInRange(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	const duration = 5 * 1000;
	const animationEnd = Date.now() + duration;
	const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

	useEffect(() => {
		confetti({
			particleCount: 100,
			spread: 140,
			origin: { y: 0.5 }
		});

		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			var particleCount = 50 * (timeLeft / duration);
			// since particles fall down, start a bit higher than random
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
			});
		}, 250);
	}, []);

	return <></>;
}
