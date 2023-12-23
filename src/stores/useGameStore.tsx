import { create } from 'zustand';
import { type QuizSlice, createQuizSlice } from './quizSlice';
import { type PlayerSlice, createPlayerSlice } from './playerSlice';

export const useGameStore = create<PlayerSlice & QuizSlice>()((...a) => ({
	...createQuizSlice(...a),
	...createPlayerSlice(...a)
}));
