import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { RoutesIndex } from './routes'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <RoutesIndex/>
  </BrowserRouter>,
  document.getElementById('root')
);


