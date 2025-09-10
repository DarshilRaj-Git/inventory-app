// src/lib/firebase.js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBue5YlJOwiaeHZcQk2-_O6XvWhA90brn0",
  authDomain: "gitprinceg.firebaseapp.com",
  projectId: "gitprinceg",
  storageBucket: "gitprinceg.firebasestorage.app",
  messagingSenderId: "336083760970",
  appId: "1:336083760970:web:da8b96f95943b48c6f73b3",
  measurementId: "G-484S2DKR28"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore DB
export const db = getFirestore(app);
