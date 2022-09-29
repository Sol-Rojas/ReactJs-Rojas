// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "soundsarc-31485.firebaseapp.com",
  projectId: "soundsarc-31485",
  storageBucket: "soundsarc-31485.appspot.com",
  messagingSenderId: "862943256766",
  appId: "1:862943256766:web:7b9f2d4a0d4be411c9beef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);