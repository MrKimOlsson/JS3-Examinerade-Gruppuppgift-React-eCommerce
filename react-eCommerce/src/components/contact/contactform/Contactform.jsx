import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import './contactForm.css'
import FormBtn from '../formBtn/FormBtn'

const contactForm = () => {
  return (
  <div className="form">

      <div className="contactForm">
        <Form method='POST' className='formParent'>
        <p>Write Something</p>
        <div className='line'></div>
          <div className="formWrapper">
            <div className="contactFormGroup">
              <label htmlFor="name">Your Name*</label>
              <input type="text" name='name'/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="email">Your Email</label>
              <input type="text" name='email'/>
            </div>
            <div className="contactFormGroup">
              <label htmlFor="number">Phone Number</label>
              <input type="number" name="number" id="" />
            </div>

            <div className="contactFormGroup">
              <label htmlFor="company">Company (optional)</label>
              <input type="text" name='company'/>
            </div>

            <div className="contactFormGroup">
              <label htmlFor="extra">Someting write*</label>
              <textarea rows="5" cols="60" type="text" className='contact-textarea' />
            </div>
           </div>

           <div className='contactFormSubmitGroup'>
            <div className="contactFormRadioButtonGroup">
              <input type="radio" name="save" id="contactForm-radioBtn" />
              <p>Save my name, email and website in this browser for the next time i comment.</p>
            </div>
             <FormBtn className="contactFormBtn"/>

           </div>
        </Form>
      </div>
</div>

  )
}

export default contactForm