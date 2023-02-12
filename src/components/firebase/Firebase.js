import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBOsn9brXlmwzsiqtLrh9PdrVnuC4ssxBo",
  authDomain: "online-store786.firebaseapp.com",
  projectId: "online-store786",
  storageBucket: "online-store786.appspot.com",
  messagingSenderId: "333317231574",
  appId: "1:333317231574:web:a1a97a4dd8031fbe1fca77"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);