import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ← to jest KLUCZOWE
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
