import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAWXZKIV0L3vHbNUgvTaRjYPpcLyU5Kfhc",
    authDomain: "disney-clone-ac8b7.firebaseapp.com",
    projectId: "disney-clone-ac8b7",
    storageBucket: "disney-clone-ac8b7.appspot.com",
    messagingSenderId: "180253916967",
    appId: "1:180253916967:web:9b82d79f1f782f2b4f3302",
    measurementId: "G-HDZ66H809G"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;