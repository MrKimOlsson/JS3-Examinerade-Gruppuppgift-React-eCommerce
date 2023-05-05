import React from 'react'
import ContactForm from '../components/contact/contactform/contactForm'
import Contacthero from '../components/contact/contacthero/Contacthero'
import Contactmap from '../components/contact/contactmap/Contactmap'


function Contact() {
  return (
    <>
    <Contacthero />
    <ContactForm />
    <Contactmap />
    </>
    )
}

export default Contact