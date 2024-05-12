import React from 'react';
import {Link} from "react-router-dom";
import Mis from '../../components/mission/mis'
import './nav.css';

export default function Nav() {
  return (
    <nav className='container'>
      <p><span className='span1'>CRISIS </span>CONNECT</p>
      <ul>
        
        <li className='button'><Link to='/contact'>CONTACT</Link></li>
        <li className='button'><Link to='/mis'>ABOUT</Link></li>
      </ul>
    </nav>
  );
}

