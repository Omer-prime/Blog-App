// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdgBPK2t20Jo-dBz_iWf0XxAhDktXrnfc",
  authDomain: "blog-app-405121.firebaseapp.com",
  projectId: "blog-app-405121",
  storageBucket: "blog-app-405121.appspot.com",
  messagingSenderId: "348940662847",
  appId: "1:348940662847:web:df1b271a84dbcc744ba08a",
  measurementId: "G-0FE561TXBV"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);