import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNlAI0Yb_Z4lBfLn3Vc-epwweDE5tha40",
  authDomain: "panda-react-c28cc.firebaseapp.com",
  projectId: "panda-react-c28cc",
  storageBucket: "panda-react-c28cc.firebasestorage.app",
  messagingSenderId: "427462947035",
  appId: "1:427462947035:web:bd9e7e73a20a9b37f19cfe",
  measurementId: "G-Q3S1L1PB2D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const githubProvider = new GithubAuthProvider();

