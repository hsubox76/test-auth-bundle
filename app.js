import {initializeApp} from "firebase/app";
import {initializeAuth, GoogleAuthProvider} from 'firebase/auth';

//your firebase config
const firebaseConfig = {
  //  fill in your config
};

const app = initializeApp(firebaseConfig);
// getAuth() includes BrowserPopupRedirectResolver by default, we
// need to do this to make sure we don't bring it in
const auth = initializeAuth(app, {popupRedirectResolver: undefined});
const provider = new GoogleAuthProvider();
// Console log these to establish that they are not unused code
console.log(auth);
console.log(provider);