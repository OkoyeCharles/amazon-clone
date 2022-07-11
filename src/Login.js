import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from './firebase';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault()

    // Firebase Login Functionality
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // User Sucessfully Signed In
      if (auth) navigate('/')
    })
    .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()

    // Firebase Register Functionality
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // User Sucessfully created
      if (auth) navigate('/')
    })
    .catch((error) => alert(error.message))
    
  }

  return (
    <div className="login">
      <Link to='/'>
        <img className='login__logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png' alt="logo" />
      </Link>

     <div className="login__container">
       <h1>Sign-In</h1>

       <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>

          <p>By continuing, you agree to Charles Amazon Clone's <a href="#">Conditions of Use</a> and <a href="#"> Privacy Notice.</a> </p>
          
          
       </form>

       
      </div>

      

      <p className='login__question'>New to Amazon?</p>

      <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
    </div>
  )
}

export default Login