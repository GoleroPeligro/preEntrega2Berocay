import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Router';
import App from './screens/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


