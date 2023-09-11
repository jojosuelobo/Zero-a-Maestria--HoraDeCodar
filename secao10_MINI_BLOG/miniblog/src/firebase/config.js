import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCIc61cAmL5YaUCHupVx6Rgn6QACpsl5mU",
  authDomain: "miniblog-f70eb.firebaseapp.com",
  projectId: "miniblog-f70eb",
  storageBucket: "miniblog-f70eb.appspot.com",
  messagingSenderId: "479120806909",
  appId: "1:479120806909:web:cc84a530c73c889e233f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}