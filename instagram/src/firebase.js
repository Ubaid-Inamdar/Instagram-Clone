import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAhOzNw54Wn4PyMhU_EA8zD_52wAH3jhmM",
    authDomain: "instagram-clone-react-719f7.firebaseapp.com",
    projectId: "instagram-clone-react-719f7",
    storageBucket: "instagram-clone-react-719f7.appspot.com",
    messagingSenderId: "722124446134",
    appId: "1:722124446134:web:95ab0b656ff03482094917",
    measurementId: "G-1MFBR4RCQP"
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };

