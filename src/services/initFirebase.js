// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc8TC8zTYr5fJ7nCSZ8-eIUBlCL9MTrPE",
  authDomain: "chat-887ce.firebaseapp.com",
  projectId: "chat-887ce",
  storageBucket: "chat-887ce.appspot.com",
  messagingSenderId: "41477159920",
  appId: "1:41477159920:web:767f7899add428093c3b35",
  measurementId: "G-X2N158NY5H"
};

// Initialize Firebase
export const initBD = initializeApp(firebaseConfig);