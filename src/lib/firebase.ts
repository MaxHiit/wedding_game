import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_API = import.meta.env.VITE_FIREBASE_API;
const FIREBASE_AUTH_DOMAINE = import.meta.env.VITE_FIREBASE_AUTH_DOMAINE;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
	apiKey: FIREBASE_API,
	authDomain: FIREBASE_AUTH_DOMAINE,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
