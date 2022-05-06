import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA9dje9e6b-yfCWb-mM9CZhd-LVxF22wQY",
    authDomain: "hoc-api-1c770.firebaseapp.com",
    databaseURL: "https://hoc-api-1c770-default-rtdb.firebaseio.com",
    projectId: "hoc-api-1c770",
    storageBucket: "hoc-api-1c770.appspot.com",
    messagingSenderId: "318648409064",
    appId: "1:318648409064:web:6b569239b496e48af2e25d"
  };
  
  // Initialize Firebase
  var firebaseDB = firebase. initializeApp(firebaseConfig);
  export default firebaseDB.databaseURL().ref();