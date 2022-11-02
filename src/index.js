import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection, getDocs, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseapp = initializeApp ({
    apiKey: "AIzaSyBm10RWXZ59w61w6s2-UYkhFfbf4p1YiX0",
    authDomain: "projectcrud-employee.firebaseapp.com",
    projectId: "projectcrud-employee",
    storageBucket: "projectcrud-employee.appspot.com",
    messagingSenderId: "1003338747709",
    appId: "1:1003338747709:web:9c625acefb3eb0d64a7f54"
});

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
db.collection ('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapShot = await getDocs(todosCol);

//detect auth state
onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('Logged in');
  } else {
    console.log('No user');
  }
});