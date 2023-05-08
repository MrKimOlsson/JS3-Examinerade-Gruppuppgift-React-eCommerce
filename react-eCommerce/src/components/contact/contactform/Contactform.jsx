import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import './contactForm.css'
import FormBtn from '../formBtn/FormBtn'
// import { registerErrand } from '../../../helpers/apiService'
import axios from 'axios';

const contactForm = () => {

// const ContactFormRegister = () => {
//   const [nameFL, setNameFL]     =   useState('')
//   const [email, setEmail]       =   useState('')
//   const [number, setNumber]     =   useState('')
//   const [company, setCompany]   =   useState('')
//   const [text, setText]         =   useState('')
//   const [checkbox, setcheckbox] =   useState('')
// }





  return (
  <div className="form">

      <div className="contactForm">
        <Form method='POST' className='formParent'>
        <p className='contactFormHeading'>Write Something</p>
        <div className='contactFormLine'></div>
          <div className="formWrapper">
            <div className="contactFormGroup">
              <label htmlFor="nameFL">Your Name*</label>
              <input type="text" name='nameFL'/>
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
              <input type="radio" name="checkbox" id="contactForm-radioBtn" />
              <p>Save my name, email and website in this browser for the next time i comment.</p>
            </div>
             {/* <FormBtn onSubmit={registerFormData} className="contactFormBtn" /> */}

           </div>
        </Form>
      </div>
</div>

  )
}



// export const registerFormData = (setData) => async ({ request }) => {
//   const data = await request.formData()
//   const formData = {
//       nameFL:       data.get('nameFL'),
//       email:        data.get('email'),
//       number:       data.get('number'), 
//       company:      data.get('company'),
//       text:         data.get('text'),
//       checkbox:     data.get('checkbox')
//   }
//   return registerErrand(formData, setData)
// }
// const contactFormAnswer = async (e) => {
//   try {
//     const res = await axios.post('http://localhost:9999/api/contact', {
//       nameFL, email, number, company, text, checkbox,
//     });
//     // Navigate('/comments')
//   } catch (error) {
//     console.log(error)
//   }
// }


export default contactForm