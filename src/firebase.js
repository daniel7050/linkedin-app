import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQTI2wPgvbGKX3k4M2INyz8qQrgsMGDJY",
  authDomain: "linked-clone-yt-9118d.firebaseapp.com",
  projectId: "linked-clone-yt-9118d",
  storageBucket: "linked-clone-yt-9118d.appspot.com",
  messagingSenderId: "1057129478010",
  appId: "1:1057129478010:web:0c14cba5b1a56bad0048c3",
};

const firebaseApp = firebase.initialize(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
