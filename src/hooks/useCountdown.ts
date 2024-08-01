import { useCallback, useEffect, useState } from 'react';

type UseCountdown = {
	initialTime: number;
	callback?: () => void;
	delay?: number;
};

export const useCountdown = ({ initialTime, callback, delay = 1000 }: UseCountdown) => {
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isPause, setIsPause] = useState(false);

	const pause = useCallback(() => {
		setIsPause(true);
	}, []);

	useEffect(() => {
		if (isPause) return;

		const intervalId = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, delay);

		if (timeLeft === 0) {
			if (callback) callback();
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [callback, delay, isPause, timeLeft]);

	return { timeLeft, isPause, pause };
};
