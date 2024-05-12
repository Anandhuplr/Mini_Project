import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserContextProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <GoogleOAuthProvider clientId='1042659668234-f01rn6fq8qosf42c7mikpbgshj45p5ul.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// const cors = require('cors');

// App.use(cors());