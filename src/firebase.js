import { initializeApp } from 'firebase/app';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUz7Dhz-FO88zY-Y4a38m0UGRbNF0zL2g",
  authDomain: "clone-e73e5.firebaseapp.com",
  projectId: "clone-e73e5",
  storageBucket: "clone-e73e5.appspot.com",
  messagingSenderId: "459659884929",
  appId: "1:459659884929:web:13083c6ad7e3ec64579080",
  measurementId: "G-5XQLZ0YT6T"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth , createUserWithEmailAndPassword, signInWithEmailAndPassword};