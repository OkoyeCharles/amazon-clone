import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login">
      <Link to='/'>
        <img className='login__logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png' alt="logo" />
      </Link>

     <div className="login__container">
       <h1>Sign-In</h1>

       <form action="">
          <h5>Email</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button type="submit" className='login__signInButton'>Sign In</button>

          <p>By continuing, you agree to Charles Amazon Clone's <a href="#">Conditions of Use</a> and <a href="#"> Privacy Notice.</a> </p>
          
          
       </form>

       
      </div>

      

      <p className='login__question'>New to Amazon?</p>

      <button className='login__registerButton'>Create Your Amazon Account</button>
    </div>
  )
}

export default Login