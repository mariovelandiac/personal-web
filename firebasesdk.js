// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAATehgi96dq7XweOk0P2pAmHdHmL6i_4c",
  authDomain: "mariovelandiac-a52d1.firebaseapp.com",
  projectId: "mariovelandiac-a52d1",
  storageBucket: "mariovelandiac-a52d1.appspot.com",
  messagingSenderId: "910863865021",
  appId: "1:910863865021:web:f717efd39d9b6c787353d4",
  measurementId: "G-T5Q20Y3Q0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// to deploy is with firebase login; firebase init; firebase deploy