// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpBE4A64Dux7anOY5LFa-uRnVU7yEmrvI",
  authDomain: "instagram-mern-1f370.firebaseapp.com",
  projectId: "instagram-mern-1f370",
  storageBucket: "instagram-mern-1f370.appspot.com",
  messagingSenderId: "750857669526",
  appId: "1:750857669526:web:c93fb22ffaecb7012dabb7",
  measurementId: "G-DQTR5SPL2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };
