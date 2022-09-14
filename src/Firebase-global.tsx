import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

// @ts-ignore
if (!firebase?.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyABtk1Mc1p1XXy6OPBXO6GqZfUnxu1m3L8",
    authDomain: "aurum-e415f.firebaseapp.com",
    projectId: "aurum-e415f",
    storageBucket: "aurum-e415f.appspot.com",
    messagingSenderId: "336101716649",
    appId: "1:336101716649:web:aa4588e6480ff63673efb8",
    measurementId: "G-9DDC67BKJM",
  });
} else {
  //@ts-ignore
  firebase.app();
}

// @ts-ignore
export var db = firebase.firestore();

export default firebase;
