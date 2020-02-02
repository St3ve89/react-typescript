import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';

// what we will do is encapsulate our whole app inside the provider

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
