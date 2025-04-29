import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";

export const AuthContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAtgx7Sss31rJ2CBnXXuR99060ZC90um7Y",
  authDomain: "reactauth-a486f.firebaseapp.com",
  projectId: "reactauth-a486f",
  storageBucket: "reactauth-a486f.appspot.com",
  messagingSenderId: "581355867299",
  appId: "1:581355867299:web:0d1b22d000e267c63a8316",
  measurementId: "G-4P4L7PCTFW",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
