import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAZMKnH3w__Qo9HS9924xCXCj5ihQexnj0",
  authDomain: "beam-scooter-locator.firebaseapp.com",
  databaseURL: "https://beam-scooter-locator.firebaseio.com",
  projectId: "beam-scooter-locator",
  storageBucket: "beam-scooter-locator.appspot.com",
  messagingSenderId: "438470778080",
  appId: "1:438470778080:web:8f7341e9d2383d3ca38485",
  measurementId: "G-LLFF6JZXBQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { db };