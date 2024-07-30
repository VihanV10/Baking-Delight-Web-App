import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQwNARFf70Cj9QHIgUj-M3yTbBgJJ-24k",
    authDomain: "baking-delight.firebaseapp.com",
    projectId: "baking-delight",
    storageBucket: "baking-delight.appspot.com",
    messagingSenderId: "385246884578",
    appId: "1:385246884578:web:9c675ccefb9513f26664bb"
  };

  firebase.initializeApp(firebaseConfig);
const items = firebase.firestore();
//export const auth = firebase.auth();
console.log('imported')
export {items}