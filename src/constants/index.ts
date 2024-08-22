import type { Quiz } from '@/types';

export const COUNTDOWN = 30000; // secondes

export const RULES_DATA = [
	'Le joueur avec le meilleur score et le meilleur temps gagne.',
	"Chaque question n'a qu'une seule réponse correcte.",
	'Vous avez 30 secondes par question.',
	'Un seul essai est autorisé.'
];

export const QUIZ_DATA: Quiz[] = [
	{
		question: 'quel age a la mariée ?',
		countdown: COUNTDOWN,
		options: ['29', '30', '28', '25'],
		answer: '29'
	},
	{
		question: 'quel est mon plat preférée ?',
		countdown: COUNTDOWN,
		options: ['riz djon djon pikliz et banane', 'pizza', 'hamburger', 'rougail saucisses'],
		answer: 'hamburger'
	},
	{
		question: 'quelle est ma boisson sans alcool preférée ?',
		countdown: COUNTDOWN,
		options: ['oasis', 'cola champion', 'coca', "jus d'ananas"],
		answer: 'coca'
	},
	{
		question: 'ou a éte son premier job ?',
		countdown: COUNTDOWN,
		options: ['rice trotteur', 'buffalo grill', 'crocodile', 'los pollos'],
		answer: 'crocodile'
	},
	{
		question: 'quelle est sa plus grande peur ?',
		countdown: COUNTDOWN,
		options: ['perdre maxime', "l'abandon", 'les serpents', 'perdre ces cheveux'],
		answer: "l'abandon"
	},
	{
		question: 'quelle est sa plus belle experience professionnel ?',
		countdown: COUNTDOWN,
		options: ['teksystems ', 'fratellini caffé', 'laho rooftop', 'buffalo grill'],
		answer: 'laho rooftop'
	},
	{
		question: "quelle est sa date d'anniversaire ?",
		countdown: COUNTDOWN,
		options: ['20 septembre 1994', '19 avril 1995', '19 mai 1995', '19 avril 2024'],
		answer: '19 avril 1995'
	},
	{
		question: 'qui est son/sa celebrité crush ?',
		countdown: COUNTDOWN,
		options: ['shemar moore', 'maxime baronce', 'matt pokara', 'micheal b. jordan'],
		answer: 'shemar moore'
	},
	{
		question: 'quelle est sa serie preférée ?',
		countdown: COUNTDOWN,
		options: ["les feux de l'amour", 'power', 'esprit criminel', 'lucifer'],
		answer: "les feux de l'amour"
	},
	{
		question: 'son dessert preferée ?',
		countdown: COUNTDOWN,
		options: ['fondant au chocolat', 'pain perdu', 'paris brest', 'moelleux au chocolat'],
		answer: 'fondant au chocolat'
	},
	{
		question: 'quel est ton premier instrument  ?',
		countdown: COUNTDOWN,
		options: ['violoncelle ', 'flûte traversière', 'piano', 'violon'],
		answer: 'violon'
	}
];
