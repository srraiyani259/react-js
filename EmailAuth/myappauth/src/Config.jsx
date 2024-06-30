
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBrVFxaOghpVyc9LRLyLy-dPQdt55N674",
  authDomain: "email-9fd2e.firebaseapp.com",
  projectId: "email-9fd2e",
  storageBucket: "email-9fd2e.appspot.com",
  messagingSenderId: "466478691731",
  appId: "1:466478691731:web:0ae1a80626d7d49cad2466",
  measurementId: "G-G4L9YBJD7V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };