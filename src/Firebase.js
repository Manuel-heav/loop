import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAC9RLV675byoyIV3XQeap-YL0gLcBtGAg",
    authDomain: "loop-4e5c8.firebaseapp.com",
    projectId: "loop-4e5c8",
    storageBucket: "loop-4e5c8.appspot.com",
    messagingSenderId: "843965554601",
    appId: "1:843965554601:web:43061e8f9cb269ddfcaeb8",
    measurementId: "G-KH7CY1Y94G"
  };


const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}