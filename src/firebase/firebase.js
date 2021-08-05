import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGh2bVS6lyLUWJxCsZxxmoWj_XKBFfc08",
    authDomain: "hora-azul-store.firebaseapp.com",
    projectId: "hora-azul-store",
    storageBucket: "hora-azul-store.appspot.com",
    messagingSenderId: "378689793382",
    appId: "1:378689793382:web:4654f6a0d059f5f9042ca7"
  };

const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
    return app;
}

export const database = firebase.firestore()