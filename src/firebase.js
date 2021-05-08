import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbxRpjno7lkXoVIXLHy4h3bvyDU_xIELA",
    authDomain: "disneyplus-clone-79841.firebaseapp.com",
    projectId: "disneyplus-clone-79841",
    storageBucket: "disneyplus-clone-79841.appspot.com",
    messagingSenderId: "249201755674",
    appId: "1:249201755674:web:5bb9fed4fbbb58ef2df3a3",
    measurementId: "G-S479KYDXXW"
    };


    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();


    export {auth, provider, storage};
    export default db;