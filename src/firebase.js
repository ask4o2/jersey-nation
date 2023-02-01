import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcVrnGwqdWhAA8jIsSSXsLfvT8oaEIZys",
  authDomain: "jersey-nation-9ef83.firebaseapp.com",
  projectId: "jersey-nation-9ef83",
  storageBucket: "jersey-nation-9ef83.appspot.com",
  messagingSenderId: "83460224674",
  appId: "1:83460224674:web:1d5a9a8a539e65b5e809fb",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, storage };
