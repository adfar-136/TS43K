// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAvCs8JNxUfU7qcf-PIK6lxtaiZLaO8-mY",
  authDomain: "ts43-b2689.firebaseapp.com",
  projectId: "ts43-b2689",
  storageBucket: "ts43-b2689.appspot.com",
  messagingSenderId: "834014141099",
  appId: "1:834014141099:web:10a5a5bf17a494b2e2f5ee",
  measurementId: "G-BKCG0F60GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}