import type { Quiz } from '@/types';

export const COUNTDOWN = 60; // seconds

export const RULES_DATA = [
	"Le joueur avec le meilleur score l'emporte",
	'Chaque question a une seule réponse correcte.',
	'Répondez à toutes les questions en le plus rapidement en moins de 5 minutes.',
	'Un seul essai autorisé.'
];

export const QUIZ_DATA: Quiz[] = [
	{
		question: 'quel age a la mariée ?',
		answers: ['29', '30', '28', '25'],
		answer: '29'
	},
	{
		question: 'quel est mon plat preférée ?',
		answers: ['riz djon djon pikliz et banane', 'pizza', 'hamburger', 'rougail saucisses'],
		answer: 'hamburger'
	},
	{
		question: 'quelle est ma boisson preférée ?',
		answers: ['vin', 'champagne', 'coca zéro', "jus d'ananas"],
		answer: 'coca zéro'
	},
	{
		question: 'ou a éte son premier job ?',
		answers: ['rice trotteur', 'buffalo grill', 'crocodile', 'los pollos'],
		answer: 'crocodile'
	},
	{
		question: 'quelle est sa plus grande peur ?',
		answers: ['perdre maxime', "l'abandon", 'les serpents', 'perdre ces cheveux'],
		answer: "l'abandon"
	},
	{
		question: 'quelle est sa plus belle experience professionnel ?',
		answers: ['teksystems ', 'fratellini caffé', 'laho rooftop', 'buffalo grill'],
		answer: 'laho rooftop'
	},
	{
		question: "quelle est sa date d'anniversaire ?",
		answers: ['20 septembre 1994', '19 avril 1995', '19 mai 1995', '19 avril 2024'],
		answer: '19 avril 1995'
	},
	{
		question: 'qui est son/sa celebrité crush ?',
		answers: ['shemar moore', 'maxime baronce', 'matt pokara', 'micheal b. jordan'],
		answer: 'shemar moore'
	},
	{
		question: 'quelle est sa serie preférée ?',
		answers: ["les feux de l'amour", 'power', 'esprit criminel', 'lucifer'],
		answer: "les feux de l'amour"
	},
	{
		question: 'son dessert preferée ?',
		answers: ['fondant au chocolat', 'pain perdu', 'paris brest', 'moelleux au chocolat'],
		answer: 'fondant au chocolat'
	}
];
