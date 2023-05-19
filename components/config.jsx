// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByaSApTefqvbUhWra6x-GJD15UNOIBQ70",
  authDomain: "recipeapp-427b6.firebaseapp.com",
  projectId: "recipeapp-427b6",
  storageBucket: "recipeapp-427b6.appspot.com",
  messagingSenderId: "521584065545",
  appId: "1:521584065545:web:b89ea0e1c27f939d068cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//if(!firebase.apps.length){
  //firebase.initializeApp(firebaseConfig)
//}

//export { firebase }
//const db = getFirestore(app);

//initialize firestorte
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export { db, auth };