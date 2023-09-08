import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HookApp } from './HookApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <HookApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
