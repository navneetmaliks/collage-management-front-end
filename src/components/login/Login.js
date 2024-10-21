import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './../signup/signup.css'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const submitHandler=(event)=>{
   
    event.preventDefault();
    const loginCredentials={
      email:email,
      password:password
    }
    
    axios.post('http://localhost:4000/api/v1/auth/login',loginCredentials)
    .then(result=>{
      toast.success('Login Successfully')
      localStorage.setItem('token',result.data.token);
      localStorage.setItem('email',result.data.data.user.email);
      localStorage.setItem('firstname',result.data.data.user.firstname);
     
      setTimeout(()=>{
        navigate('/dashboard');
      },1000)
      
      console.log(result);

    })
    .catch(err=>{
      toast.error(`${err.message}`);
      console.log(err.message);
    });
    
    //console.log(firstname,lastname,email,password,confirmpassword);
  }
  return (
    <div className='signup-wraper'>
      <div className='signup-box'>
        <div className='signup-left'>
          <img alt='book logo' src={require('./../../assets/bookbg.png')} />

          <h3 className='signup-left-heading'>Collage Management</h3>




        </div>
        <div className='signup-right'>
          <div className='signupform-heading'>
            <h1 className='signup-right-heading'>Login</h1>
          </div>

          <form className='signup-form' method='post' onSubmit={submitHandler}>
            
            <input type='text' name='email' placeholder='Enter Email' onChange={e=>{setEmail(e.target.value)}} />
            <input type='text' name='password' placeholder='Enter Password' onChange={e=>{setPassword(e.target.value)}} />
            
            <button type='submit'>Submit</button>
            <Link className='link' to='/signup'>Create Your Account</Link>
          </form>



        </div>

      </div>
    </div>
  )
}

export default Login