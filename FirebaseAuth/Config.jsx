import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBzLaKjWROf12muV-yM64SzJlNmtJUC3o",
  authDomain: "fir-auth-9cecf.firebaseapp.com",
  projectId: "fir-auth-9cecf",
  storageBucket: "fir-auth-9cecf.appspot.com",
  messagingSenderId: "259480105897",
  appId: "1:259480105897:web:976262e2da1c005e000ab8",
  measurementId: "G-2RT2L8M6E6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);