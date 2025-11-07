// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbo2B0dmSgg1n6I9Q85xVcW75ZMu__wUo",
    authDomain: "visonary-8d949.firebaseapp.com",
    projectId: "visonary-8d949",
    storageBucket: "visonary-8d949.firebasestorage.app",
    messagingSenderId: "1037380077909",
    appId: "1:1037380077909:web:994c67f1ed8c43c22407dc",
    measurementId: "G-PXDWSKLPTW",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
