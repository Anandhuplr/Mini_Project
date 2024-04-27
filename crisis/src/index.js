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
import Request from './pages/Request';
import Userpage from './counsellor/userpage';
import Laprof from './counsellor/la-profile';
import Requestlist from './counsellor/requestlist';
import Approvedlist from './counsellor/approvedreq';
import Rejected from './counsellor/rejected';
import Reqpage from './counsellor/reqpage'
import Contact from './pages/contact';
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
    path: "/contact",
    element: <Contact/>,
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
  {
    path: "/req",
    element: <Request/>,
  },
  {
    path: "/user",
    element: <Userpage/>,
  },
  {
    path: "/laprof",
    element: <Laprof/>,
  },
  {
    path:"/requestlist",
    element: <Requestlist/>,
  },
  {
    path:"/approvedlist",
    element: <Approvedlist/>,
  },
  {
    path:"/rejected",
    element: <Rejected/>,
  },
  {
    path:"/reqpage",
    element: <Reqpage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
