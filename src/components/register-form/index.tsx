'use client';

import { PlayerSlice } from '@/stores/playerSlice';
import { useGameStore } from '@/stores/useGameStore';

import { Input } from '@/components/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

const RegisterForm = () => {
	const router = useRouter();
	const { player, setPlayer } = useGameStore((state) => state);

	const [firstname, setFirstName] = useState(player.firstname);
	const [lastname, setLastName] = useState(player.lastname);
	const [debounceFirstname, setDebounceFirstName] = useState('');
	const [debounceLastname, setDebounceLastName] = useState('');

	const [, cancel] = useDebounce(
		() => {
			setDebounceFirstName(firstname);
			setDebounceLastName(lastname);
		},
		250,
		[firstname, lastname]
	);

	const handleRegister = () => {
		if (debounceFirstname.length === 0 || debounceLastname.length === 0) return;

		const userId = player.id ? player.id : uuidv4();

		const newPlayer: PlayerSlice['player'] = {
			firstname: firstname,
			lastname: lastname,
			id: userId,
			score: 0
		};

		setPlayer(newPlayer);
		router.push('/quiz/rules');
	};

	return (
		<div className='flex flex-col space-y-8 w-60'>
			<Input
				type='text'
				value={firstname}
				maxLength={256}
				required
				onChange={(e) => setFirstName(e.target.value.toLowerCase())}
				placeholder='Prénom'
			/>
			<Input
				type='text'
				value={lastname}
				maxLength={256}
				required
				onChange={(e) => setLastName(e.target.value.toLowerCase())}
				placeholder='Nom'
			/>

			<button onClick={handleRegister}>Suivant</button>
		</div>
	);
};

export default RegisterForm;
