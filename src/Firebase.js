// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqiNRhgIzhizmREcQLwJbYlU2IRKzAm-A",
    authDomain: "slack-clone-be179.firebaseapp.com",
    databaseURL: "https://slack-clone-be179.firebaseio.com",
    projectId: "slack-clone-be179",
    storageBucket: "slack-clone-be179.appspot.com",
    messagingSenderId: "180668191551",
    appId: "1:180668191551:web:4364882cda1394d47eb98a",
    measurementId: "G-HCRZ2E52BZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};