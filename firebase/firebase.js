import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7fPOUviY9JXb_rC8hWGaV4uZ8C0Ee77Y",
  authDomain: "store-343b4.firebaseapp.com",
  projectId: "store-343b4",
  storageBucket: "store-343b4.appspot.com",
  messagingSenderId: "909253774888",
  appId: "1:909253774888:web:099deec6b4913158736f1d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
