import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const app: FirebaseApp = initializeApp({
  apiKey: "AIzaSyBuYMzWxuZCUrnZganpG8p2xCAnMzPGxVY",
  authDomain: "radio-sulamita-api.firebaseapp.com",
  projectId: "radio-sulamita-api",
  storageBucket: "radio-sulamita-api.appspot.com",
  messagingSenderId: "975912397385",
  appId: "1:975912397385:web:c888b9f3f682819f532d98",
});

const db: Firestore = getFirestore(app);

export { db };
