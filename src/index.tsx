import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './views';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
