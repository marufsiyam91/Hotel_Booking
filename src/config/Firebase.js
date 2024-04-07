// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtbv1EBY8wtFKdhPyxq7h4QP1Q8n2wxk",
  authDomain: "travelbooking-816c1.firebaseapp.com",
  projectId: "travelbooking-816c1",
  storageBucket: "travelbooking-816c1.appspot.com",
  messagingSenderId: "846929116342",
  appId: "1:846929116342:web:1284acbfd87482a331fa17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)