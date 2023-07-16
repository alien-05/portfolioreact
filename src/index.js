import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/App';
import style from './sass/style.css';
import { BrowserRouter } from 'react-router-dom';

let root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)