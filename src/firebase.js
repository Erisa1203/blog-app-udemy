import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth" 
import { getFirestore } from "firebase/firestore" 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEm_XythsP8ZcsfzRvBuQTkuWJGcPdcHg",
  authDomain: "blog-979b4.firebaseapp.com",
  projectId: "blog-979b4",
  storageBucket: "blog-979b4.appspot.com",
  messagingSenderId: "415339165168",
  appId: "1:415339165168:web:e08b0fed47658983721935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
