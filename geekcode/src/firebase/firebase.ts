// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoWFt5EWn499Y9jVcySPmFDiabhi29CVI",
  authDomain: "geekcode-1.firebaseapp.com",
  projectId: "geekcode-1",
  storageBucket: "geekcode-1.firebasestorage.app",
  messagingSenderId: "530329718104",
  appId: "1:530329718104:web:82fe35574a470b32cee92d"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

const auth =getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore,app }