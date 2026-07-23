import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import { Toaster } from 'react-hot-toast';
    import App from './App';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter basename="/Globo/">
        <App />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: '100px',
              background: '#333',
              color: '#fff',
              fontWeight: 500,
              padding: '12px 24px',
            },
            success: {
              iconTheme: { primary: '#FFC94A', secondary: '#333' }
            }
          }} 
        />
      </BrowserRouter>
    </React.StrictMode>
    );
    