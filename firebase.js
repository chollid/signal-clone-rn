import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCenBTesiQEjgUjN732puik3hxWGg_FZ2c",
  authDomain: "signal-clone-rn-31c4e.firebaseapp.com",
  projectId: "signal-clone-rn-31c4e",
  storageBucket: "signal-clone-rn-31c4e.appspot.com",
  messagingSenderId: "641243819250",
  appId: "1:641243819250:web:7b691e73b0ed0c68e5f46b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
