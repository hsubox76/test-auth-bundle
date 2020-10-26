const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    return response.send("Hello from Firebase!");
});
exports.callTest = functions.https.onCall((data, context) => {
    return({ word: 'hellooo' });
});
