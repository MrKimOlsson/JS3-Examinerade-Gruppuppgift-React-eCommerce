import React from 'react'
import './Formforlogin.css'
import { Form, Link } from 'react-router-dom'
import Formbtn from './btnlogin/Formbtn'

const Formforlogin = () => {
  return (
    <div className='form-login-wrapper'>
      <div className="form-login-container">
        <Form method='POST'>
          <h4>Please Login to Your Account</h4>
          <div className="input-group-login d-flex-form">
            <label className='form-label-link' htmlFor="email">E-mail* <Link className='form-link-register-padding' to='/register'>Don't have an Account yet?</Link></label>
            <input type="email" name="email" id="email" className='input-login' />
          </div>
          <div className="input-group-login d-flex-form">
            <label htmlFor="password" className='form-label-link-two'>Password* <Link className='form-link-register-padding'>Forgot your password?</Link></label>
            <input type="password" name="password" id="password" className='input-login' />
          </div>
          <div>
            <input className='login-checkbox' type="checkbox" name="" id="" />
          </div>
        </Form>
        <Formbtn />

      </div>
    </div>
  )
}

export default Formforlogin