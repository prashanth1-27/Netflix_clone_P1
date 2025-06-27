import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtT7w6CqRM68wPgiDxXth5C5i_-gc_6w0",
  authDomain: "netflix-clone-9b7ab.firebaseapp.com",
  projectId: "netflix-clone-9b7ab",
  storageBucket: "netflix-clone-9b7ab.appspot.com", // fixed
  messagingSenderId: "527807261499",
  appId: "1:527807261499:web:67ebf7ce8925b8f2ade51e",
  measurementId: "G-NR321Z9GWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password); // fixed
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Login function
const login = async (email, password) => { // fixed
  try {
    await signInWithEmailAndPassword(auth, email, password); // fixed
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
