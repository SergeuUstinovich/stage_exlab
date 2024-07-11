import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global/index.scss'
import { BrowserRouter } from 'react-router-dom'
import StoreProviders from './providers/StoreProvider/StoreProviders.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ThemeProvider from './providers/ThemeContext/ThemeProvider.tsx'


const clientID = '949215497470-rbutqin0rniig6t0ujai6d0vlchbh2ng.apps.googleusercontent.com'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProviders>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientID}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </StoreProviders>
  </React.StrictMode>
)
