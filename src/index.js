import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.css';
import './scrollbar.scss';
import './vendor/fonts/ShadowsIntoLight.css';
import './vendor/fonts/Lato.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
