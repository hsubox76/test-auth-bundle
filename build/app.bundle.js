/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/auth'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

 // import 'firebase/analytics';
// import 'firebase/functions';
// import 'firebase/storage';
// import '@firebase/firestore/dist/index.cjs.min';
// import 'firebase/messaging';
// import 'firebase/performance';
// import "firebase/installations";

!(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).initializeApp({
  apiKey: "AIzaSyB3BYpqf_FrZ2WQidSh9Ml04kuXJp3fvVk",
  authDomain: "chholland-test.firebaseapp.com",
  databaseURL: "https://chholland-test.firebaseio.com",
  projectId: "chholland-test",
  storageBucket: "chholland-test.appspot.com",
  messagingSenderId: "91336787373",
  appId: "1:91336787373:web:a3dffe45ec797267",
  measurementId: "G-RV2DRJVZ88"
});
console.log('FIREBASE VERSION', !(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SDK_VERSION);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).auth();
const provider = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'firebase/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).auth.OAuthProvider('apple.com');
console.log(provider); // firebase.setLogLevel('warn');
// firebase.onLog(({message}) => { console.log('ONLOG WORKS' + message)}, {level: 'debug'});
// firebase.analytics();
// console.log('FIS TOKEN REFRESH');
// firebase.installations();
// firebase.installations().getToken(true);
// const firestore = firebase.firestore();
// console.log('CALLING FIRESTORE');
// firestore.collection('testCollection')
//     .doc('testDoc')
//     .get()
//     .then(doc => console.log('FIRESTORE results:', doc.data()));
// console.log('CALLING STORAGE');
// const storage = firebase.storage();
// const storageRef = storage.ref('/test.txt');
// storageRef.getDownloadURL().then(url => {
//     console.log('STORAGE download url', url);
// })
// const functions = firebase.functions();
// console.log('CALLING AUTH');
// const auth = firebase.auth();
// const unsub = auth.onAuthStateChanged(user => {
//     unsub();
//     console.log('hi');
// });
// auth.signInWithEmailAndPassword("testtest@test.test", "pass1234").then(cred => {
//     console.log('AUTH: signed in user', cred.user.email);
// });
// async function callFunctions() {
//     console.log('CALLING FUNCTION');
//     const callTest = firebase.functions().httpsCallable('callTest');
//     const result = await callTest({data: 'abcd'});
//     console.log('FUNCTIONS result:', result.data);
// }
// console.log('CALLING FUNCTION');
// const callTest = firebase.functions().httpsCallable('callTest');
// callTest({data: 'abcd'})
// .then(result => console.log('FUNCTIONS result:', result.data))
// .catch(e => console.error(e));
// console.log('CALLING MESSAGING');
// const messaging = firebase.messaging();
// messaging.getToken().then(token => console.log(token)).catch(e => console.error(e));
// messaging.requestPermission()
//     .then(() => console.log('MESSAGING: permissions granted'))
//     .catch(() => console.log('MESSAGING: permissions rejected'));
// console.log('CALLING PERFORMANCE');
// const performance = firebase.performance();
// const trace = performance.trace('test');

console.log('DONE'); // async function main() {
//     console.log('MAIN START');
//     await callFunctions();
//     console.log('MAIN END');
// }
// main();

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map