import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

export default function Nav() {
  const type=localStorage.getItem("typ");
  return (
    <nav className='container'>
  <p><span className='span1'>CRISIS CONNECT</span></p>
  <ul>
    {type === "V" ? (
      <li className='button'><Link to='/home'>HOME</Link></li>
    ) : (
      <li className='button'><Link to='/user'>HOME</Link></li>
    )}
    <li className='button'><Link to='/laprof'>PROFILE</Link></li>
    <li className='button'><Link to='/'>LOGOUT</Link></li>
  </ul>
</nav>
  );
}