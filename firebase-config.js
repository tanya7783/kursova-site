// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKB2ei5bSbo3qX2LjKbnOyOdVB03ePEsY",
  authDomain: "ai-study-30b8e.firebaseapp.com",
  projectId: "ai-study-30b8e",
  storageBucket: "ai-study-30b8e.firebasestorage.app",
  messagingSenderId: "253444055390",
  appId: "1:253444055390:web:829ecbe0d20be9d5e4efcf",
  measurementId: "G-2M0LKWW8X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
