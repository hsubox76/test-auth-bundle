import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDPlZ9YEmrVqFesR2CUKxCQpDW-rrgbyjE",
    authDomain: "chatmap-ff77a.firebaseapp.com",
    databaseURL: "https://chatmap-ff77a.firebaseio.com",
    projectId: "chatmap-ff77a",
    storageBucket: "chatmap-ff77a.appspot.com",
    messagingSenderId: "48538250948",
    appId: "1:48538250948:web:a1f899e503c12415ac6391"
});

console.log('FIREBASE VERSION', firebase.SDK_VERSION);
console.log('FIS TOKEN REFRESH');
firebase.installations().getToken(true);
console.log('DONE');