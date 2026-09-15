// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9IBrKW7MgoEjOOggYlX8iltxjq0Ui1Ug",
  authDomain: "magyar-wesnoth.firebaseapp.com",
  projectId: "magyar-wesnoth",
  storageBucket: "magyar-wesnoth.firebasestorage.app",
  messagingSenderId: "56821882706",
  appId: "1:56821882706:web:1981a23cb5b2d707f0248b",
  measurementId: "G-DSQW4Y1RSS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);