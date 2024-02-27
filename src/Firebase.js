import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCPW8tCixXYgBKJjj9BQdXlEKvOW_vunF0",
  authDomain: "red-parts-2001.firebaseapp.com",
  projectId: "red-parts-2001",
  storageBucket: "red-parts-2001.appspot.com",
  messagingSenderId: "620291116962",
  appId: "1:620291116962:web:01a31c6dfdb114b10f6cfb"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)