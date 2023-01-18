import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// "initializeapp()" function is must to invoke, also you should create firebase project and web app and take that config codes from 
// the Project Settings tab or when you create your project. Other imports are must for somethings.

const firebaseConfig = {
    apiKey: "AIzaSyD67g42EwaZxJhNtLc3ZwAAUusCxvJcyVU",
    authDomain: "reading-app-a370a.firebaseapp.com",
    projectId: "reading-app-a370a",
    storageBucket: "reading-app-a370a.appspot.com",
    messagingSenderId: "597383176687",
    appId: "1:597383176687:web:24579b59a89578c957161a"
  };

  initializeApp(firebaseConfig);

  let firebaseDatabaseService = getFirestore();

  let firebaseAuthService = getAuth();

  export { firebaseDatabaseService, firebaseAuthService };