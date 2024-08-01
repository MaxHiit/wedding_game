import { create } from 'zustand';
import { type PlayerSlice, createPlayerSlice } from './playerSlice';
import { type QuizSlice, createQuizSlice } from './quizSlice';

export const useGameStore = create<PlayerSlice & QuizSlice>()((...a) => ({
	...createQuizSlice(...a),
	...createPlayerSlice(...a)
}));
