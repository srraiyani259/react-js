import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDDUDssx2ssidfACt6SpRva_M5SUtM-bKM",
  authDomain: "uber-web-clone.firebaseapp.com",
  databaseURL : "https://uber-web-clone-default-rtdb.firebaseio.com",
  projectId: "uber-web-clone",
  storageBucket: "uber-web-clone.appspot.com",
  messagingSenderId: "817952615868",
  appId: "1:817952615868:web:19bba7e901f423a3368fb9",
  measurementId: "G-8FRM5ERGFC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app)

export { auth , provider , database };
