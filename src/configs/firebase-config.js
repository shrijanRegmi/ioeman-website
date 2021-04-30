import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMVcuY0cRXc-9nOdU0JmegJPo_xO6bz-g",
  authDomain: "ioeman.firebaseapp.com",
  projectId: "ioeman",
  storageBucket: "ioeman.appspot.com",
  messagingSenderId: "1012035888626",
  appId: "1:1012035888626:web:20fe8344f6b41fab6e376b",
  measurementId: "G-KHZTG6DFBM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;