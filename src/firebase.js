import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgSEkJ45PVS6igBvA7rqZ8E3XT90cJF40",
  authDomain: "react-youtub-view.firebaseapp.com",
  projectId: "react-youtub-view",
  storageBucket: "react-youtub-view.appspot.com",
  messagingSenderId: "775839578852",
  appId: "1:775839578852:web:f39fc89cc2a1624e970af1",
  measurementId: "G-QV7SEGT16Z"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();