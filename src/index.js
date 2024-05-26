import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';

ReactDOM.render(
  <BrowserRouter basename="/gaming-website">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
