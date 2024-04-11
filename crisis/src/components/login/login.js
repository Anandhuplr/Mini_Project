import React from 'react'
import './login.css'
import {useNavigate} from 'react-router-dom'
export default function Login() {
  const navigate=useNavigate();
  return (

    <div className='log'>
      <button className="login" onClick={()=>navigate("/login")}>LOGIN</button>
     <button className="signup" onClick={()=>navigate("/signup")}>SIGNUP</button>
    </div>
  )
}
