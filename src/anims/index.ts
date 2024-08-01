export const opacity = {
	initial: {
		opacity: 0
	},
	open: {
		opacity: 1,
		transition: { duration: 0.35 }
	}
};

export const slideIn = {
	initial: {
		opacity: 0,
		y: 20
	},
	enter: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.75 + i * 0.1,
			ease: [0.215, 0.61, 0.355, 1]
		}
	}),
	exit: {
		opacity: 0,
		transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' }
	}
};

export const translate = {
	initial: {
		y: '100%',
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
	},
	exit: {
		y: '100%',
		opacity: 0,
		transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
	}
};

export const scale = {
	initial: {
		scale: 0
	},
	open: {
		scale: 1,
		transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] }
	}
};
