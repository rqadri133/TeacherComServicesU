
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext'

import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBak97Kjb9TEnRexxTD0kfmimDdzfpbhXc",
  authDomain: "teachercomdb.firebaseapp.com",
  databaseURL: "https://teachercomdb-default-rtdb.firebaseio.com",
  projectId: "teachercomdb",
  storageBucket: "teachercomdb.appspot.com",
  messagingSenderId: "735998735764",
  appId: "1:735998735764:web:82d17425482f1e8d7e4b81",
  measurementId: "G-1FTBSYGJ2G"
};
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

export const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null);
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };