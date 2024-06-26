import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

// ** import react toastify container
import { ToastContainer } from "react-toastify";

// ** import toastify style
import "react-toastify/dist/ReactToastify.css";

// ** import style sheets
import "./assets/style/style.css";
import "./assets/style/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
