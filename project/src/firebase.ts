// Firebase configuration and initialization
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClpHk9F0_zVqd54KCWEBUWf7u-vHAbTKk",
  authDomain: "bestdeals-d6f7f.firebaseapp.com",
  projectId: "bestdeals-d6f7f",
  storageBucket: "bestdeals-d6f7f.firebasestorage.app",
  messagingSenderId: "448938689090",
  appId: "1:448938689090:web:f953389204f335a304e3db",
  measurementId: "G-LYJCVT6NF1"
};

const app = initializeApp(firebaseConfig);

export default app;
