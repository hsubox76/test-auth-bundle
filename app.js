import {initializeApp} from "firebase/app";
import {initializeAuth, GoogleAuthProvider} from 'firebase/auth';

//your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB3BYpqf_FrZ2WQidSh9Ml04kuXJp3fvVk",
  authDomain: "chholland-test.firebaseapp.com",
  databaseURL: "https://chholland-test.firebaseio.com",
  projectId: "chholland-test",
  storageBucket: "chholland-test.appspot.com",
  messagingSenderId: "91336787373",
  appId: "1:91336787373:web:a3dffe45ec797267",
  measurementId: "G-RV2DRJVZ88",
};

const app = initializeApp(firebaseConfig);
// getAuth() includes BrowserPopupRedirectResolver by default, we
// need to do this to make sure we don't bring it in
const auth = initializeAuth(app, {popupRedirectResolver: undefined});
const provider = new GoogleAuthProvider();
// Console log these to establish that they are not unused code
console.log(auth);
console.log(provider);