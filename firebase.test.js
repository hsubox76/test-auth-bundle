const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyB3BYpqf_FrZ2WQidSh9Ml04kuXJp3fvVk",
  authDomain: "chholland-test.firebaseapp.com",
  databaseURL: "https://chholland-test.firebaseio.com",
  projectId: "chholland-test",
  storageBucket: "chholland-test.appspot.com",
  messagingSenderId: "91336787373",
  appId: "1:91336787373:web:a3dffe45ec797267",
  measurementId: "G-RV2DRJVZ88"
});

test('function test', async () => {
  await firebase.auth().signInAnonymously();
  const callTest = firebase.functions().httpsCallable('callTest');
  const result = await callTest({data: 'abcd'})
  console.log('FUNCTIONS result:', result.data);
});