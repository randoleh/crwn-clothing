import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBUt_LExAEXJFog6k09Zoe806rEpra96yo',
  authDomain: 'crwn-db-cc6a3.firebaseapp.com',
  projectId: 'crwn-db-cc6a3',
  storageBucket: 'crwn-db-cc6a3.appspot.com',
  messagingSenderId: '492706356789',
  appId: '1:492706356789:web:443fb95f8ec1a5ee7fdb7c',
  measurementId: 'G-7BY3W57KYV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
