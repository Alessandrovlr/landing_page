// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)