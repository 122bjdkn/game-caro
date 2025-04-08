// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFIifvlouwIKV4m3gtZSnAVMx8KC9k1TE",
  authDomain: "carogame-ce9f5.firebaseapp.com",
  databaseURL: "https://carogame-ce9f5-default-rtdb.firebaseio.com",
  projectId: "carogame-ce9f5",
  storageBucket: "carogame-ce9f5.firebasestorage.app",
  messagingSenderId: "694853754232",
  appId: "1:694853754232:web:22d3ad772a20093189fc8d",
  measurementId: "G-PJC6361WSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);