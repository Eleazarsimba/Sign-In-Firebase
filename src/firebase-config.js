// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

//firebase config credentials
const firebaseConfig = {
    apiKey: "AIzaSyCFdzEnkyLCz1AiP5h5RRnzA1SHe5KAAXY",
    authDomain: "chatapp1-fcf57.firebaseapp.com",
    projectId: "chatapp1-fcf57",
    storageBucket: "chatapp1-fcf57.appspot.com",
    messagingSenderId: "60804080210",
    appId: "1:60804080210:web:25c75d17ad7b88fd8bf58b",
    measurementId: "G-EVK1983065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };