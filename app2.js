import firebase from 'firebase/app';
import 'firebase/functions';

let start;

firebase.initializeApp({
  // ...
});

async function callFunctions() {
  console.log('CALLING FUNCTION');
  const callTest = firebase.functions().httpsCallable('callTest');
  const result = await callTest({data: 'abcd'});
  console.log('FUNCTIONS result:', result.data);
  console.log('MS ELAPSED:', Date.now() - start);
}

async function main() {
  start = Date.now();
  console.log('MAIN START');
  await callFunctions();
  console.log('MAIN END. MS ELAPSED:', Date.now() - start);
}

main();