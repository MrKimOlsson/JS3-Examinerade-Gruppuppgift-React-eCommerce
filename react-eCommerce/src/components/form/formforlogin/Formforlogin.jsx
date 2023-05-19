import React, { useState } from 'react';
import axios from 'axios';
import './Formforlogin.css';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../../../app/action';
import Formbtn from './btnlogin/Formbtn';

const Formforlogin = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9999/api/user/login', {
        email,
        password,
      });
      const { user, token } = res.data; 
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(setUser(user));
      dispatch(setToken(token));
      handleLogin();
      console.log('Logged in user:', user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };


  console.log('Token from Redux:', token);

  return (
    <div className='form-login-wrapper'>
      <div className="form-login-container">
        <Form onSubmit={submitLogin}>
          <h4>Please Login to Your Account</h4>
          <div className="input-group-login d-flex-form">
            <label className='form-label-link' htmlFor="email">E-mail* <Link className='form-link-register-padding' to='/register'>Don't have an Account yet?</Link></label>
            <input type="email" name="email" id="email" className='input-login' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group-login d-flex-form">
            <label htmlFor="password" className='form-label-link-two'>Password* <Link to='/forgotpassword' className='form-link-register-padding'>Forgot your password?</Link></label>
            <input type="password" name="password" id="password" className='input-login' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input className='login-checkbox' type="checkbox" name="" id="" />
          </div>
          <Formbtn />
        </Form>
      </div>
    </div>
  );
};

export default Formforlogin;

