import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounceValue from '@/hooks/useDebounceValue';
import { Button, Heading, Input } from '@/components/ui';
import { v4 as uuidv4 } from 'uuid';
import { useGameStore } from '@/stores/useGameStore';
import type { PlayerSlice } from '@/stores/playerSlice';
import { useLocalStorage } from 'usehooks-ts';

export const Register = () => {
	const { player, setPlayer } = useGameStore((state) => state);

	const navigate = useNavigate();
	const [userName, setUserName] = useState(player.name);

	const debounceName = useDebounceValue(userName);

	const [, setPlayerLocalPlayer] = useLocalStorage<PlayerSlice['player']>('game-storage', {
		name: '',
		id: '',
		score: 0,
		status: 'pending'
	});

	const handleRegisterUser = () => {
		if (debounceName.length <= 0) return;

		const newPlayer: PlayerSlice['player'] = {
			name: userName,
			id: uuidv4(),
			score: 0,
			status: 'pending'
		};

		setPlayer(newPlayer);
		setPlayerLocalPlayer(newPlayer);
		navigate('/quiz');
	};

	return (
		<>
			<Heading as='h1' size='3xl'>
				Inscrivez votre nom
			</Heading>

			<Input
				className='mt-8'
				type='text'
				value={userName}
				maxLength={256}
				required
				onChange={(e) => setUserName(e.target.value)}
				placeholder='Nom et Prénom'
			/>

			<Button variant='link' className='mt-8' onClick={handleRegisterUser}>
				Suivant
			</Button>
		</>
	);
};
