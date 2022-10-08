import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "soundsarc-31485.firebaseapp.com",
  projectId: "soundsarc-31485",
  storageBucket: "soundsarc-31485.appspot.com",
  messagingSenderId: "862943256766",
  appId: "1:862943256766:web:7b9f2d4a0d4be411c9beef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);