// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvj024BiWubLAvaR6xDXVuOd-b1daj-V4",
    authDomain: "inventory-management-app-52680.firebaseapp.com",
    projectId: "inventory-management-app-52680",
    storageBucket: "inventory-management-app-52680.appspot.com",
    messagingSenderId: "1088140774461",
    appId: "1:1088140774461:web:0489bb554359c776a3ee54",
    measurementId: "G-N4FQ8DT956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore};
