import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './app/index.css';
import './shared/config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
