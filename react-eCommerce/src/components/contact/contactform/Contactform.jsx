import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import './contactForm.css'
import FormBtn from '../formBtn/FormBtn'

const contactForm = () => {
  return (
  
    <div className='formContainer'>

      <div className="contactForm">
        <Form method='POST'>
        <h4>Write Something</h4>
        <div className='line'></div>
          <div className="formWrapper">
          <div className="formGroup">
            <label htmlFor="name">Your Name*</label>
            <input type="text" name='name'/>
          </div>
          <div className="formGroup">
            <label htmlFor="email">Your Email</label>
            <input type="text" name='email'/>
          </div>
          <div className="formGroup">
            <label htmlFor="number">Phone Number</label>
            <input type="number" name="number" id="" />
          </div>
          <div className="formGroup">
            <label htmlFor="company">Company (optional)</label>
            <input type="text" name='company'/>
          </div>
          </div>
          <div className="formGroup wide">
            <label htmlFor="extra">Someting write*</label>
            <textarea rows="5" cols="60" type="text" className='wide' />
      <div className="radiobtn">
        <input type="radio" name="save" id="" />Save my name, email and website in this browser for the next time i comment.
      </div>
          </div>
        </Form>
        <FormBtn />
      </div>
    </div>


  )
}

export default contactForm