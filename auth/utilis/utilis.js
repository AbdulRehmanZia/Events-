import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvje5K_HRRdm4D1O-YevHIKAAWPaaJKPU",
  authDomain: "my-2nd-event-planner.firebaseapp.com",
  projectId: "my-2nd-event-planner",
  storageBucket: "my-2nd-event-planner.appspot.com",
  messagingSenderId: "362244047200",
  appId: "1:362244047200:web:2cdec3fe6f9274aa159e05",
  measurementId: "G-V3G6G36934",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  db,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
};
