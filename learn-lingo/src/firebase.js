// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuB2Bh5Ako2Y665yNISiAmpluGYOOVKCo",
  authDomain: "learn-lingo-f26ce.firebaseapp.com",
  projectId: "learn-lingo-f26ce",
  storageBucket: "learn-lingo-f26ce.appspot.com",
  messagingSenderId: "560718700640",
  appId: "1:560718700640:web:1856fb3dfed92da1dc2305",
  measurementId: "G-TVNDVSFEEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db, analytics };
