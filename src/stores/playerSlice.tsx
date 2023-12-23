import { StateCreator } from 'zustand';

type Status = 'pending' | 'completed';

export interface PlayerSlice {
	player: {
		name: string;
		id: string;
		score: number;
		status: Status;
	};
	setPlayer: (player: PlayerSlice['player']) => void;
	// setPlayer: (player: { name: string; id: string; score: number; status: Status }) => void;
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
	player: { name: '', id: '', score: 0, status: 'pending' },
	setPlayer: (player) => set(() => ({ player }))
});
