import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-CyzS0c_5FUKNR_SIBIsS6OLcfJDGZQA",
  authDomain: "monaco-project-68004.firebaseapp.com",
  projectId: "monaco-project-68004",
  storageBucket: "monaco-project-68004.appspot.com",
  messagingSenderId: "851715528302",
  appId: "1:851715528302:web:ec0b308a10445b6cbdf87f",
  measurementId: "G-0JME2D2JMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
