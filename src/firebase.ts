// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Flcf_xfWJSRmIDoM-jdEMssQBvV2F4Q",
  authDomain: "furlong-3ffb2.firebaseapp.com",
  databaseURL: "https://furlong-3ffb2-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_PROJECT_ID,//"furlong-3ffb2",
  storageBucket:"furlong-3ffb2.appspot.com",
  messagingSenderId:"276073528527",
  appId: "1:276073528527:web:e926445bab5d15e5574bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
