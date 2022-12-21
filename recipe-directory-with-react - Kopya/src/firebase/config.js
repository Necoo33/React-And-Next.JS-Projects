import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCb3tyyj7Z32tfrWG1NiOHN4UjNzLejtaM",
    authDomain: "necdet-in-tarifleri-react.firebaseapp.com",
    projectId: "necdet-in-tarifleri-react",
    storageBucket: "necdet-in-tarifleri-react.appspot.com",
    messagingSenderId: "51938394772",
    appId: "1:51938394772:web:5ce210830d2e44eac92a81",
    measurementId: "G-20W9P3S2S6"
  };

firebase.initializeApp(firebaseConfig);

let firestoreDanisMahfazasi = firebase.firestore();

export { firestoreDanisMahfazasi };