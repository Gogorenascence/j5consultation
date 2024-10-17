// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3KUgZsasLKcPAwObpU4W6bb77Ub-1kkg",
  authDomain: "j5consultation.firebaseapp.com",
  projectId: "j5consultation",
  storageBucket: "j5consultation.appspot.com",
  messagingSenderId: "735761948764",
  appId: "1:735761948764:web:2c47a21a9cd0a1f0758699",
  measurementId: "G-HDWQBYL91E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
