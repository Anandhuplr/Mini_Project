import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

export default function Nav() {
  return (
    <nav className='container'>
      <p><span className='span1'>CRISIS </span>CONNECT</p>
      <ul>
        <li className='button'><Link to='/home'>HOME</Link></li>
        <li className='button'><Link to='/laprof'>PROFILE</Link></li>
        <li className='button' ><Link to='/'>LOGOUT</Link></li>
      </ul>
    </nav>
  );
}