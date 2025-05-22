import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { init } from '@emailjs/browser';

// Initialize EmailJS with public key
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);