import { StateCreator } from 'zustand';

export interface PlayerSlice {
	player: {
		firstname: string;
		lastname: string;
		id: string;
		score: number;
	};
	setPlayer: (player: PlayerSlice['player']) => void;
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
	player: { firstname: '', lastname: '', id: '', score: 0 },
	setPlayer: (player) => set(() => ({ player }))
});
