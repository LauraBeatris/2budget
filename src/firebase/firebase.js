import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDpFCXP62lz2S0niT7r6y5Kw3n03vKeJrU",
  authDomain: "budget-296d3.firebaseapp.com",
  databaseURL: "https://budget-296d3.firebaseio.com",
  projectId: "budget-296d3",
  storageBucket: "",
  messagingSenderId: "316945241396",
  appId: "1:316945241396:web:ae378532e8168e70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export { firebase, database as default };
