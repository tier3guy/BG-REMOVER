import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase Configuration
const FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bg-remover-27541.firebaseapp.com",
  projectId: "bg-remover-27541",
  storageBucket: "bg-remover-27541.appspot.com",
  messagingSenderId: "753374010042",
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

// Initializing the app
const app = initializeApp(FirebaseConfig);

// creating storage
const storage = getStorage(app);

export {storage};