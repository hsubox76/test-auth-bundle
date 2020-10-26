import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/functions';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/performance';
import "firebase/installations";
import 'firebase/database';

async function callFunctions() {
    console.log('CALLING FUNCTION');
    const functions = firebase.functions();
    const callTest = functions.httpsCallable('callTest');
    const result = await callTest({data: 'blah'});
    console.log('FUNCTIONS result:', result.data);
}
async function main() {
    console.log('MAIN START');
    
    const app = firebase.initializeApp({
        apiKey: "AIzaSyB3BYpqf_FrZ2WQidSh9Ml04kuXJp3fvVk",
        authDomain: "chholland-test.firebaseapp.com",
        databaseURL: "https://chholland-test.firebaseio.com",
        projectId: "chholland-test",
        storageBucket: "chholland-test.appspot.com",
        messagingSenderId: "91336787373",
        appId: "1:91336787373:web:a3dffe45ec797267",
        measurementId: "G-RV2DRJVZ88"
    });
    
    var unsubscribe = firebase.auth().onAuthStateChanged(
        (user) => {
            console.log("0");
          unsubscribe();
        },
        (a) => {},
        () => {
          // this doesn't run
          console.log("1");
        }
      );
    
    console.log('FIREBASE VERSION', firebase.SDK_VERSION);
    
    
    firebase.setLogLevel('warn');
    firebase.onLog(({message}) => { console.log('ONLOG WORKS' + message)}, {level: 'debug'});
    
    console.log('CALLING AUTH');
    const auth = firebase.auth();
    const unsub = auth.onAuthStateChanged(user => {
        unsub();
        console.log('hi');
    });
    auth.signInWithEmailAndPassword("testtest@test.test", "pass1234").then(async (cred) => {
        console.log('AUTH: signed in user', cred.user.email);
        console.log('CALLING STORAGE');
        const storage = firebase.storage();
        const storageRef = storage.ref('/test.txt');
        storageRef.getDownloadURL().then(url => {
            console.log('STORAGE download url', url);
        });
        await storageRef.putString('abc');
        const url = await storageRef.getDownloadURL();
        const response = await fetch(url);
        const data = await response.text();
        console.log('Returned data:', data);
    });
    console.log('CALLING DATABASE');
    const db = firebase.database();
    firebase.analytics.isSupported();
    firebase.analytics();
    console.log('FIS TOKEN REFRESH');
    firebase.installations();
    firebase.installations().getToken(true);
    const firestore = firebase.firestore();
    console.log('CALLING FIRESTORE');
    firestore.collection('testCollection')
        .doc('testDoc')
        .get()
        .then(doc => console.log('FIRESTORE results:', doc.data()));
    
    console.log('CALLING MESSAGING');
    const messaging = firebase.messaging();
    messaging.getToken().then(token => console.log(token)).catch(e => console.error(e));
    messaging.requestPermission()
        .then(() => console.log('MESSAGING: permissions granted'))
        .catch(() => console.log('MESSAGING: permissions rejected'));
    console.log('CALLING PERFORMANCE');
    const performance = firebase.performance();
    const trace = performance.trace('test');
    await callFunctions();
    console.log('MAIN END');
}

main();