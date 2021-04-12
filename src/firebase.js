import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAA_8qI5dTyIAkeShBkT-4YsEJclZhO3LM",
  authDomain: "clone-abbb7.firebaseapp.com",
  projectId: "clone-abbb7",
  storageBucket: "clone-abbb7.appspot.com",
  messagingSenderId: "904080475157",
  appId: "1:904080475157:web:2099ec51931f614b473a1c",
  measurementId: "G-T0Y1XB5R20"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};