
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtB3wqthtrjKGzzKh7gkRzH2tNRx1xz6w",
  authDomain: "fir-project2-e8e12.firebaseapp.com",
  projectId: "fir-project2-e8e12",
  storageBucket: "fir-project2-e8e12.appspot.com",
  messagingSenderId: "364838688447",
  appId: "1:364838688447:web:2187d891bc8b8ba7c9d80a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
