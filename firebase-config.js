import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKB2ei5bSbo3qX2LjKbnOyOdVB03ePEsY",
  authDomain: "ai-study-30b8e.firebaseapp.com",
  projectId: "ai-study-30b8e",
  storageBucket: "ai-study-30b8e.firebasestorage.app",
  messagingSenderId: "253444055390",
  appId: "1:253444055390:web:829ecbe0d20be9d5e4efcf",
  measurementId: "G-2M0LKWW8X4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
