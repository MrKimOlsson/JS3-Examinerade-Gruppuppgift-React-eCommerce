import React from 'react'
import { Form } from 'react-router-dom'
import Btnregister from './btnregister/Btnregister'
import './Formforregister.css'

const Formforregister = () => {
  return (
    <div className='form-register-wrapper'>
      <div className='form-register-container'>
        <Form>
          <h4>Please Register Your new Account</h4>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor="firstName">First Name*</label>
              <input className='half-register-input' type="text" />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="lastName">Last Name*</label>
              <input className='half-register-input' type="text" />
            </div>
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">Streetname*</label>
            <input className="whole-register-input" type="text" name="" id="" />
          </div>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor="">Postal Code*</label>
              <input className='half-register-input' type="number" />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="">City*</label>
              <input className='half-register-input' type="text" />
            </div>
          </div>
          <div className="top-section-register">
            <div className="register-section-name padding-between">
              <label htmlFor=""> Mobile  (optional)</label>
              <input className='half-register-input' type="number" />
            </div>
            <div className="register-section-name padding-between">
              <label htmlFor="">Company  (optional)</label>
              <input className='half-register-input' type="text" />
            </div>
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">E-mail*</label>
            <input className="whole-register-input" type="text" name="" id="" />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">Password*</label>
            <input className="whole-register-input" type="text" name="" id="" />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">Confirm Password*</label>
            <input className="whole-register-input" type="text" name="" id="" />
          </div>
          <div className='top-section-register-full padding-between'>
            <label htmlFor="streetname">Upload Profil (optional)</label>
            <input className="whole-register-input" type="text" name="" id="" />
          </div>
          <div className='section-terms'>
            <input type="checkbox" name="" id="" />
            <p>I have read and accepts the terms and agreements</p>
          </div>
          <Btnregister />
        </Form>
      </div>
    </div>
  )
}

export default Formforregister