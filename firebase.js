
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHHdaYctRDylkCyJt-TYuZuANTIPIX7KE",
  authDomain: "laundary-app-d5d22.firebaseapp.com",
  projectId: "laundary-app-d5d22",
  storageBucket: "laundary-app-d5d22.appspot.com",
  messagingSenderId: "846244960267",
  appId: "1:846244960267:web:9c7c6abcf01ff7418acf0e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};