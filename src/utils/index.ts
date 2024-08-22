import { COUNTDOWN } from '@/constants';

export const shuffleArray = <T>(array: T[]) => array.sort(() => Math.random() - 0.5);

export const formatTime = (milliseconds: number) => {
	const minutes = Math.floor(milliseconds / 60000);
	const seconds = Math.floor((milliseconds % 60000) / 1000);
	const millisecondsLeft = milliseconds % 1000;

	if (minutes > 0) {
		return `${padZero(minutes)}:${padZero(seconds)}:${padZero(millisecondsLeft)} min`;
	} else {
		return `${seconds}.${padZero(millisecondsLeft)} sec`;
	}
};

const padZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

export const calculatePoints = (remainingTime: number, rightAnswers: number) => {
	const PONTS_PER_QUESTION = 5;
	const TIME_MAX_POINTS = 50;

	let timePoints = 0;

	if (remainingTime < COUNTDOWN) {
		const timeRatio = remainingTime / COUNTDOWN;
		timePoints = Math.round(TIME_MAX_POINTS * timeRatio);
	}

	const pointsRightAnswers = rightAnswers * PONTS_PER_QUESTION;

	const totalPoints = Math.max(0, Math.min(timePoints, TIME_MAX_POINTS)) + pointsRightAnswers;

	return totalPoints;
};
