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

// events
// child_removed -> when the child gets deleted
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key);
  console.log(snapshot.val());
});

// child_changed -> when the child gets changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added -> when a child gets added
// its also gets call from exists childrens
database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// Push -> firebase will create a new property on our reference
// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Flutter"
// });

// database.ref("expenses").push({
//   description: "Some random",
//   note: "There's is a note",
//   amount: 300,
//   createdAt: Date.now()
// });

// database.ref("expenses").push({
//   description: "Some random 2",
//   note: "There's is a note 2",
//   amount: 302,
//   createdAt: Date.now()
// });

// database.ref("expenses").push({
//   description: "Some random 3",
//   note: "There's is a note 3",
//   amount: 304,
//   createdAt: Date.now()
// });

database.ref("expenses/-Lm9i8-4dXGhxYWk9rxq").update({
  description: "Just testing"
});

database.ref("expenses/-Lm9j33-fp3ProvnZm2Q").remove();

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());

//     // Transforming into a array
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       console.log(childSnapshot);
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//   console.log(expenses);
// });

//   .then(() => console.log("Success"))
//   .catch(err => console.log(err));

// database.ref("expenses").on(
//   "value",
//   snapshot => {
//     const expenses = [];

//     snapshot.forEach(expense => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       });
//     });

//     console.log(expenses);
//   },
//   err => console.log(err)
// );

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

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// --> FETCHING DATA

// There's two ways of getting the data, one is just in one time and the other is subscribing

// once receives a eventType as a arg, and gets the data one single time
// it can be "value", "child_added", "child_changed", "child_removed", or "child_moved."

// // Fetches the entire database data
// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => console.log("Error fetching data", err));

// ON --> listening something over and over again

// const onDescription = database.ref().on(
//   "value",
//   snapshot => {
//     const value = snapshot.val();

//     console.log(
//       `${value.name} is a ${value.job.title} from ${value.job.company}`
//     );
//   },
//   err => console.log("Something wrong happened", err)
// );

//database.ref().off("value", onDescription);

// setTimeout(() => {
//   database.ref().update({
//     name: "Laura",
//     "job/company": "Eletronic Arts"
//   });
// }, 3500);

// We can't use then because promisses just run on one single time

// We can also setting of subscribing, for example, when a user navigates
// to a specific pages
