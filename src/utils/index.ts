export const shuffleArray = <T>(array: T[]) => array.sort(() => Math.random() - 0.5);

export const formatTime = (seconds: number) => {
	const date = new Date(seconds * 1000);
	const minutes = date.getUTCMinutes();
	const remainingSeconds = date.getUTCSeconds();
	return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
