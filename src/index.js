import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Feed from './components/feed';
import Notifications from './components/notifications';
import Profile from './components/profile';


import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


