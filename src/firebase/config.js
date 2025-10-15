import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZeV25Mg-Uy66_BQ37PMhto216R2QZGb4",
  authDomain: "skibidibaddieticklers.firebaseapp.com",
  projectId: "skibidibaddieticklers",
  storageBucket: "skibidibaddieticklers.firebasestorage.app",
  messagingSenderId: "144680199751",
  appId: "1:144680199751:web:0114227f04fd3c31a53362",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
