// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaLCUipLqQPlpQt_7A6Hqrw2mOn4C5ywQ",
  authDomain: "lowcoslogin.firebaseapp.com",
  projectId: "lowcoslogin",
  storageBucket: "lowcoslogin.appspot.com",
  messagingSenderId: "840691572482",
  appId: "1:840691572482:web:fb03a4b93c187fcba4ac1b",
  measurementId: "G-V3LBN36S6Z"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
