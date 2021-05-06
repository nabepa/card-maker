import './index.module.css';
import AuthService from './service/auth_service';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
