// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgBBPQJ0b0ErwY6jchBa3_sJHGLcI8Q30",
  authDomain: "broker-1b177.firebaseapp.com",
  projectId: "broker-1b177",
  storageBucket: "broker-1b177.appspot.com",
  messagingSenderId: "785450593726",
  appId: "1:785450593726:web:a8b34b9a7e2fb6c01b5def",
  measurementId: "G-GKPLVFZ10D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};