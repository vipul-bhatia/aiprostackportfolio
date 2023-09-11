import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCd-PGp8CK7sWMJrCKjGtai9q2x0m1UF5M",
    authDomain: "aiprostacksolution.firebaseapp.com",
    projectId: "aiprostacksolution",
    storageBucket: "aiprostacksolution.appspot.com",
    messagingSenderId: "946383570766",
    appId: "1:946383570766:web:8f5ff574a0284b61cfc01f"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}