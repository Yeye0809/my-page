import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { PortafolioApp } from './myPortafolio/PortafolioApp';

import './styles.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <PortafolioApp />
    </BrowserRouter>
  </React.StrictMode>
);

