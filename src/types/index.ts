export type Quiz = {
	question: string;
	answers: string[];
	answer: string;
};

export type QuizStep = 'rules' | 'questions';
