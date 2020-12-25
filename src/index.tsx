import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { initializeApi } from './api';
import App from './App';

initializeApi();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
