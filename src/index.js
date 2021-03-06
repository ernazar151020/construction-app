import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from "./context/Context";
import 'animate.css';
ReactDOM.render(
  <React.StrictMode>
      <Context>
          <App />
      </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

