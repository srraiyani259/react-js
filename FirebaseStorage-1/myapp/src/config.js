import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClWrYDXZBwqjLkQvwQHA4DMEYujCsgPws",
  authDomain: "fir-storage-a7e96.firebaseapp.com",
  databaseURL: "https://fir-storage-a7e96-default-rtdb.firebaseio.com",
  projectId: "fir-storage-a7e96",
  storageBucket: "fir-storage-a7e96.appspot.com",
  messagingSenderId: "18186511635",
  appId: "1:18186511635:web:c832b7771aeaa2e2aaa6e6",
  measurementId: "G-9JPT9YKE46"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}
