import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Service Worker Killer: Unregister any existing service workers
console.log("Portfolio Version: 2026-01-31-DEBUG-FIX");
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister().then(function() {
        console.log('Service Worker unregistered');
        // Optional: Force reload if a controller was active
        // window.location.reload(); 
      });
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
