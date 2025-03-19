/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log('Project IDs:', import.meta.env);

console.log('Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBBGuQaz-Ap2R2VDlQ82BM9hA-h_AEifbQ",
//   authDomain: "nitc-cb497.firebaseapp.com",
//   projectId: "nitc-cb497",
//   storageBucket: "nitc-cb497.appspot.com",
//   messagingSenderId: "612685320343",
//   appId: "1:612685320343:web:af12754d50902d524799d2",
//   measurementId: "G-0NPZ3Z8B3V",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, analytics, firestore };
