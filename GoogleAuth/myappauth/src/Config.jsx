import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Nm69aceLvh_ZkSWCLN-LWuTLGezVxzI",
  authDomain: "auth-a5bf3.firebaseapp.com",
  projectId: "auth-a5bf3",
  storageBucket: "auth-a5bf3.appspot.com",
  messagingSenderId: "726330002910",
  appId: "1:726330002910:web:cdc999ff603cee810b614f",
  measurementId: "G-2LLVVZND7S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}