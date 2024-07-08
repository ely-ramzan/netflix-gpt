
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO8ahfoJ6y8wtQYlGhAFytAm5xuwqQ1B8",
  authDomain: "netflix-gpt-43c19.firebaseapp.com",
  projectId: "netflix-gpt-43c19",
  storageBucket: "netflix-gpt-43c19.appspot.com",
  messagingSenderId: "830734585870",
  appId: "1:830734585870:web:5311da593c9827c02b6c5f",
  measurementId: "G-3DJX450TW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()