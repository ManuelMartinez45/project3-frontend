import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDCD_yq-QrRb9bPB097Ssb5N_BJXz3hpEI",
    authDomain: "react-firebase-projects-890ca.firebaseapp.com",
    projectId: "react-firebase-projects-890ca",
    storageBucket: "react-firebase-projects-890ca.appspot.com",
    messagingSenderId: "896169961465",
    appId: "1:896169961465:web:54249589b549003f89bf28"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

function login(){
  return auth.signInWithPopup(provider)
}

function logout(){
  return auth.signOut()
}

export { auth, login, logout }