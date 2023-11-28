// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ5Kt5g8StQImO_COWG-S3uJAsBzghxJA",
  authDomain: "explore-crystalveey.firebaseapp.com",
  projectId: "explore-crystalveey",
  storageBucket: "explore-crystalveey.appspot.com",
  messagingSenderId: "519480246545",
  appId: "1:519480246545:web:8699d9be86387385b40cb0",
  measurementId: "G-50D69T84SF",
};



// Initialize Firebase
const app = initializeApp( firebaseConfig  );

export const db = getFirestore(app);
// export const db2 = getFirestore(app);

export const auth = getAuth(app);
export const storage = getStorage(app);