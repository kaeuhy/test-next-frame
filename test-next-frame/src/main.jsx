// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import TicketButton from './Button.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TicketButton />
    </React.StrictMode>
);
