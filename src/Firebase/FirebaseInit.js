// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// var firebaseConfig = {
//     apiKey: "AIzaSyBciN_4dvDY3Pf0RXXXuVQdwqfi8VT9eCE",
//     authDomain: "weddsnaps-c1f1a.firebaseapp.com",
//     databaseURL: "https://weddsnaps-c1f1a-default-rtdb.firebaseio.com",
//     projectId: "weddsnaps-c1f1a",
//     storageBucket: "weddsnaps-c1f1a.appspot.com",
//     messagingSenderId: "303962374807",
//     appId: "1:303962374807:web:ed63f3ad971d6159b75fd2",
//     measurementId: "G-YJSH289TBF"
// };
var firebaseConfig = {
    apiKey: "AIzaSyA-FqGTteZkrQOJK1-T4Ug4aPgmrWeQU6w",
    authDomain: "demoproject-71a40.firebaseapp.com",
    projectId: "demoproject-71a40",
    storageBucket: "demoproject-71a40.appspot.com",
    messagingSenderId: "824170565143",
    appId: "1:824170565143:web:0d0b283b7215a162fa1652"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();