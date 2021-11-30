import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAJM3mZq0EqH6SpqpCMIcBad0hf-MIQmhc",
    authDomain: "social-next-123a4.firebaseapp.com",
    projectId: "social-next-123a4",
    storageBucket: "social-next-123a4.appspot.com",
    messagingSenderId: "636436410473",
    appId: "1:636436410473:web:1681fdb5adcbec59fd32f8",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();