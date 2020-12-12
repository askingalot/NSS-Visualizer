import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {initializeApi} from './api';
import App from './App';

initializeApi();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
