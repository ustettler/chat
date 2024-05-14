// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHJLvIOk4w9We1gmf-yA97WVCXiH-v-DI",
  authDomain: "chat-78c88.firebaseapp.com",
  projectId: "chat-78c88",
  storageBucket: "chat-78c88.appspot.com",
  messagingSenderId: "839846107650",
  appId: "1:839846107650:web:032d78a33b3de9e400e51b",
  measurementId: "G-4T1C7YBWC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);