import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from '@/components';
import { Home, Quiz, Score } from '@/pages';
import { Register } from '@/pages/register';
import { useGameStore } from '@/stores/useGameStore';
import { useReadLocalStorage } from 'usehooks-ts';
import { PlayerSlice } from '@/stores/playerSlice';
import { useEffect } from 'react';

function App() {
	const { setPlayer } = useGameStore((state) => state);
	const gameLocalStorage = useReadLocalStorage<PlayerSlice['player']>('game-storage');
	const navigate = useNavigate();

	useEffect(() => {
		if (gameLocalStorage) {
			if (gameLocalStorage.name != '' && gameLocalStorage.status === 'pending') {
				setPlayer(gameLocalStorage);
				navigate('/quiz');
			}

			if (gameLocalStorage.name != '' && gameLocalStorage.status === 'completed') {
				setPlayer(gameLocalStorage);
				navigate('/score');
			}
		} else {
			navigate('/');
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='register' element={<Register />} />
				<Route path='quiz' element={<Quiz />} />
				<Route path='score' element={<Score />} />
			</Route>
		</Routes>
	);
}

export default App;
