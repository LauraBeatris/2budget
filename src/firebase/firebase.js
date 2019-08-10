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

database
  .ref()
  .set({
    name: "Laura",
    stressLevel: 5,
    job: {
      title: "Software Developer",
      company: "Blizard"
    },
    hobbies: {
      sports: "football"
    },
    location: {
      city: "Florianópolis",
      state: "Santa Catarina"
    }
  })
  .then(() => console.log("Success"))
  .catch(err => console.log(err));

// --> REMOVING

// Another way to remove data
// database.ref("isSingle").set(null);

// database
//   .ref()
//   .remove()
//   .then(() => console.log("Removed"))
//   .catch(err => console.log("Did not removed data", err));

// --> UPDATING

// Update has to be call with a object

// Changing existing values, adding a new one and removing an existing one

// Only updates at the root level

database.ref().update({
  stressLevel: 9,
  "job/company": "Amazon",
  "location/city": "Seattle"
});

// --> READING

// There's two ways of getting the data, one is just in one time and the other is subscribing
