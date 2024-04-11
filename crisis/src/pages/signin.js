import React from 'react';
import './signin.css';
import Nav from '../components/nav/nav';
import { useNavigate } from 'react-router-dom';
import per from '../images/person.png';
import pass from '../images/password.png';

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div className='sign'>
      <Nav />
      <div className="white-login">
        <div className='par'>
          <p className='p1'>Login</p>
          <div className='input-box'>
            <p className='p2'>Username</p>
            <input type='text' required placeholder='Type your Username' />
            <img src={per} alt="Username icon" />
          </div>
          <div className='input-box'>
            <p className='p2'>Password</p>
            <input type='password' required placeholder='Type your Password' />
            <img src={pass} alt="Password icon" />
          </div>
          <p className='p4'><a className='a4' href='/'>Forgot password?</a></p>
          <button className="button-Login" >Log In</button>
        </div>
        <div className='new'>
          <div className='head'>
            <p className='p3'>New Here?</p>
          </div>
          <div className='head2'>
            <p className='p3'>Create an account to access all features</p>
          </div>
          <button className="button-signup" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
