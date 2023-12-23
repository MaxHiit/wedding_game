export const formatTime = (seconds: number) => {
	const date = new Date(seconds * 1000);
	const minutes = date.getUTCMinutes();
	const remainingSeconds = date.getUTCSeconds();
	return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
