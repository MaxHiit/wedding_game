export type Quiz = {
	question: string;
	options: string[];
	countdown: number;
	answer: string;
};

export type User = {
	id: string;
	firstname: string;
	lastname: string;
};

export type SessionPayload = {
	userId: string;
	// expires: Date;
};
