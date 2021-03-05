import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDeHt5uKp1nSOViKZOhxWOmm1DVfQ5IiVM",
  authDomain: "expensify-f8090.firebaseapp.com",
  databaseURL: "https://expensify-f8090-default-rtdb.firebaseio.com",
  projectId: "expensify-f8090",
  storageBucket: "expensify-f8090.appspot.com",
  messagingSenderId: "753283689388",
  appId: "1:753283689388:web:a0f8327d105af674c56809",
  measurementId: "G-47P8DS7ZDM"
};

firebase.initializeApp(config);

const database = firebase.database();

