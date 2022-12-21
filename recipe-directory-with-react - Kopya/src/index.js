import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TemaMutemmini } from "./context/TemaContexti"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaMutemmini>
      <App />
    </TemaMutemmini>
  </React.StrictMode>
);


