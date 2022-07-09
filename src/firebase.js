import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
require('firebase/auth')

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpBE4A64Dux7anOY5LFa-uRnVU7yEmrvI",
  authDomain: "instagram-mern-1f370.firebaseapp.com",
  databaseURL: "https://instagram-mern-1f370.firebaseio.com",
  projectId: "instagram-mern-1f370",
  storageBucket: "instagram-mern-1f370.appspot.com",
  messagingSenderId: "750857669526",
  appId: "1:750857669526:web:c93fb22ffaecb7012dabb7",
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };