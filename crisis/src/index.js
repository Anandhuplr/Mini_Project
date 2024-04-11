import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Sign from './signup'
import Login from './pages/signin'
import Tail from './components/tail/tail'
import Home from './pages/Home'
import Feedback from './pages/feedback';
import Profile from './pages/profile';
import Track from './pages/track';
import Grievance  from './pages/grievance';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/signup",
    element: <Sign/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/tail",
    element: <Tail/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/feedback",
    element: <Feedback/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/track",
    element: <Track/>,
  },
  {
    path: "/grievance",
    element: <Grievance/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
