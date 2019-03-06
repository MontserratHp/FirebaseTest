import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyCq9nQ6RRMUwm0nWNXhcb8eDBgh1wKaf3E",
        authDomain: "farmaciabackend-78f6e.firebaseapp.com",
        databaseURL: "https://farmaciabackend-78f6e.firebaseio.com",
        projectId: "farmaciabackend-78f6e",
        storageBucket: "farmaciabackend-78f6e.appspot.com",
        messagingSenderId: "862850358930"
    }
);

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
