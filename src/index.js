import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdWz7CzCYeBaLAjl2aMICAVqtdDoto3PU",
  authDomain: "proyecto-react-js-d2d9c.firebaseapp.com",
  projectId: "proyecto-react-js-d2d9c",
  storageBucket: "proyecto-react-js-d2d9c.appspot.com",
  messagingSenderId: "168338266981",
  appId: "1:168338266981:web:5f8610440b9ea74f5b1f8c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);