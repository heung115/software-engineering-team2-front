import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SessionProvider from './services/SessionProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SessionProvider>
                <App />
            </SessionProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
