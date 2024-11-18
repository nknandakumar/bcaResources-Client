import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS); // Replace with your actual Measurement ID
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  title: 'main.jsx',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
