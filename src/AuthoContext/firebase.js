// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyAtgx7Sss31rJ2CBnXXuR99060ZC90um7Y",
  authDomain: "reactauth-a486f.firebaseapp.com",
  projectId: "reactauth-a486f",
  storageBucket: "reactauth-a486f.appspot.com",
  messagingSenderId: "581355867299",
  appId: "1:581355867299:web:0d1b22d000e267c63a8316",
  measurementId: "G-4P4L7PCTFW",
};

// Initialize only once
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { auth };
