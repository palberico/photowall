import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDQOigZy5S1lwD1ItcrbvAy71f1LBVHf5Q",
    authDomain: "photowall-6c3f7.firebaseapp.com",
    databaseURL: "https://photowall-6c3f7.firebaseio.com",
    projectId: "photowall-6c3f7",
    storageBucket: "",
    messagingSenderId: "512254213574"
  };
  
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}