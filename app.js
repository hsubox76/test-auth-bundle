import { SDK_VERSION, initializeApp } from 'firebase/app';
import { getAuth, 
    onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { getFirestore, getDoc, doc, updateDoc, increment } from 'firebase/firestore';
// import 'firebase/analytics';
// import { getStorage, ref, uploadString, getDownloadURL } from '@firebase/storage-exp';
// import { getMessaging }  from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
import { getRemoteConfig } from 'firebase/remote-config';
import {getInstallations} from "@firebase/installations";
// import 'firebase/database';

async function main() {
    console.log('MAIN START');
    
    const app = initializeApp({
        apiKey: "AIzaSyB3BYpqf_FrZ2WQidSh9Ml04kuXJp3fvVk",
        authDomain: "chholland-test.firebaseapp.com",
        databaseURL: "https://chholland-test.firebaseio.com",
        projectId: "chholland-test",
        storageBucket: "chholland-test.appspot.com",
        messagingSenderId: "91336787373",
        appId: "1:91336787373:web:a3dffe45ec797267",
        measurementId: "G-RV2DRJVZ88"
    });
    
    console.log('FIREBASE VERSION', SDK_VERSION);
    
    console.log('CALLING AUTH');
    await signInWithEmailAndPassword(getAuth(app), 'manualtest@test.com', 'abcd1234');

    onAuthStateChanged(getAuth(app), async (user) => {
        console.log('user is', user);
    
        console.log('CALLING FIRESTORE');
        const ref = doc(getFirestore(app), 'testCollection/testDoc');
        console.log('testDoc contents:', JSON.stringify((await getDoc(ref)).data()));
        await updateDoc(ref, { testField: increment(1) });
        console.log('testDoc contents after increment:', JSON.stringify((await getDoc(ref)).data()));
    });

    console.log('INITIALIZING FUNCTIONS');
    getFunctions(app);
    console.log('INITIALIZING PERFORMANCE');
    getPerformance(app);
    console.log('INITIALIZING REMOTE-CONFIG');
    getRemoteConfig(app);
    // console.log('INITIALIZING MESSAGING');
    // getMessaging(app);
    console.log('INITIALIZING INSTALLATIONS');
    getInstallations(app);

    // const functions = getFunctions(app);
    // const storage = getStorage(app);
    // const reference = ref(storage, 'manualtest');
    // const snapshot = await uploadString(reference, 'teststring');
    // console.log(snapshot.metadata);
    // const url = await getDownloadURL(reference);
    // const response = await fetch(url);
    // const text = await response.text();
    // console.log('Storage fetched:', text);
    console.log('MAIN END');
}

main();