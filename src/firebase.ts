// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.API_KEY
const AUTH_DOMAIN = import.meta.env.AUTH_DOMAIN
const DB_URL = import.meta.env.DB_URL
const PROJECT_ID = import.meta.env.PROJECT_ID
const STORAGE_BUCKET = import.meta.env.STORAGE_BUCKET
const MESSAGING_SENDER_ID = import.meta.env.STORAGE_BUCKET
const APP_ID = import.meta.env.APP_ID
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  API_KEY,//"AIzaSyC6Flcf_xfWJSRmIDoM-jdEMssQBvV2F4Q",
  authDomain: AUTH_DOMAIN,//"furlong-3ffb2.firebaseapp.com",
  databaseURL: DB_URL,//"https://furlong-3ffb2-default-rtdb.firebaseio.com",
  projectId: PROJECT_ID,//"furlong-3ffb2",
  storageBucket: STORAGE_BUCKET, //"furlong-3ffb2.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID, //"276073528527",
  appId: APP_ID, //"1:276073528527:web:e926445bab5d15e5574bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
