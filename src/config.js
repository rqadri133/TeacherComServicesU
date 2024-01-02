import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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
export const db = getDatabase();

export const auth = getAuth(app);
export default app ;


