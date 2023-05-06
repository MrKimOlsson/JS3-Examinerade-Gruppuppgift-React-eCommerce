import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import { newsletterSub } from '../../../helpers/apiService'
import './newsletterSub.css'

const NewsletterSub = () => {

const actionData = useActionData()

  return (
    <div className='newsletterSub-wrapper'>
        <div className='subscribeForm'>
            
            <div>
                <Form metod='POST'>
                    <input className='subscribeEmailInput' type='text' name='email' id="email" placeholder='Enter your email here'/>
                    <button className='btn-subscribe'>SUBSCIRIBE FOR NEWSLETTER</button>
                    {actionData && <p className='error'>{actionData.message}</p>}
                </Form>
            </div>

        </div>
        
    </div>
  )
}

export const action = (setSubscriber) => async ({ request }) => {
    const data = await request.formData()
    const subscriberData = {
      email: data.get('email')
    }
    return newsletterSub(subscriberData, setSubscriber)
}

export default NewsletterSub