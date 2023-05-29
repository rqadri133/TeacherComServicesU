import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-languages-select/css/react-languages-select.css';
 
//OR import sass module

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <GoogleOAuthProvider clientId="221869384055-jo745ppfdidkklaqltrlrnklbh10nk72.apps.googleusercontent.com">
    <React.StrictMode>
        <App />
    </React.StrictMode>
</GoogleOAuthProvider>,
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
