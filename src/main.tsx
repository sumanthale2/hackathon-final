import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import { CardApplicationProvider } from './context/CardApplicationContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CardApplicationProvider>
          <App />
        </CardApplicationProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
