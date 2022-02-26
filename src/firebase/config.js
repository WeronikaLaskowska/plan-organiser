import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBgr2BBJWokGx4WYvc7zW4nioh4QFl8z6Y",
    authDomain: "plan-organiser.firebaseapp.com",
    projectId: "plan-organiser",
    storageBucket: "plan-organiser.appspot.com",
    messagingSenderId: "11635497903",
    appId: "1:11635497903:web:c0579f94292c26cbe3ed5a"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebase.firestore();


  export { db, auth };