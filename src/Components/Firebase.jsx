// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4PvWCW_AFuUir6BB5PnkFBT7IrB8rKrM",
  authDomain: "fir-test-1-f17ef.firebaseapp.com",
  projectId: "fir-test-1-f17ef",
  storageBucket: "fir-test-1-f17ef.appspot.com",
  messagingSenderId: "679307584262",
  appId: "1:679307584262:web:a63067da1cb4e09918f487",
  measurementId: "G-CT6V78W5RB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
