import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FB_API_KEY,
  authDomain: "grambase-7707c.firebaseapp.com",
  projectId: "grambase-7707c",
  storageBucket: "grambase-7707c.appspot.com",
  messagingSenderId: "452195525048",
  appId: "1:452195525048:web:9c3e3be01312c0de01ef4d",
  measurementId: "G-JJ66QZMBX5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
