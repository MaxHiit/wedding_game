import { COUNTDOWN } from '@/data';
import type { QuizStep } from '@/types';
import { StateCreator } from 'zustand';

export interface QuizSlice {
	step: QuizStep;
	remainingTime: number;
	rightAnswers: number;
	score: number;
	setRemainingTime: (time: number) => void;
	setStep: (step: QuizStep) => void;
	setRightAnswers: () => void;
	calculatePoints: () => number;
}

export const createQuizSlice: StateCreator<QuizSlice> = (set, get) => ({
	step: 'rules',
	remainingTime: COUNTDOWN,
	rightAnswers: 0,
	score: 0,
	setRemainingTime: (time) => set({ remainingTime: time }),
	setStep: (step) => set(() => ({ step })),
	setRightAnswers: () => set((state) => ({ rightAnswers: state.rightAnswers + 1 })),
	calculatePoints: () => {
		const { remainingTime, rightAnswers } = get();

		const PONTS_PER_QUESTION = 5;
		const TIME_MAX_POINTS = 50;

		let timePoints = 0;

		if (remainingTime < COUNTDOWN) {
			const timeRatio = remainingTime / COUNTDOWN;
			timePoints = Math.round(TIME_MAX_POINTS * timeRatio);
		}

		const pointsRightAnswers = rightAnswers * PONTS_PER_QUESTION;

		const totalPoints = Math.max(0, Math.min(timePoints, TIME_MAX_POINTS)) + pointsRightAnswers;

		set({ score: totalPoints });

		return totalPoints;
	}
});
