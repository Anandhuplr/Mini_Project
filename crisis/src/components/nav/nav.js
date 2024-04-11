import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

export default function Nav() {
  return (
    <nav className='container'>
      <p><span className='span1'>CRISIS </span>CONNECT</p>
      <ul>
        <li className='button'><Link to='/'>HOME</Link></li>
        <li className='button'><Link to='/tail'>CONTACT</Link></li>
        <li className='button'><Link to='/signup'>ABOUT</Link></li>
      </ul>
    </nav>
  );
}

