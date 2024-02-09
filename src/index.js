import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBPKKC_Ap3EnJKNSMCeuBIfzOHKa2IEA",
  authDomain: "react-chat-app-f842d.firebaseapp.com",
  databaseURL: "https://react-chat-app-f842d-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-f842d",
  storageBucket: "react-chat-app-f842d.appspot.com",
  messagingSenderId: "769527896324",
  appId: "1:769527896324:web:e4ef0399a678765970d851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
