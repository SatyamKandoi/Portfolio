import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {IoLogoWhatsapp} from 'react-icons/io'
import {  useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hi6r7xa', 'template_tt42fel', form.current, 'GHIuTmM9t1xAC9HX4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact' >
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className='contact'>
      <div className="container contact__container">
      
        <div className="contact__options">
        <article className="contact__option">
          <SiGmail  className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>
          <a href='mailto:satyam.19beceg003@gmail.com' target={'blanck'}>Send me a Mail</a>
          </h5>
          
        </article>
        <article className="contact__option">
          <IoLogoWhatsapp  className="contact__option-icon"/>
          <h4>Whatsapp</h4>
      
          <a href='http://api.whatsapp.com/send?phone=919925382987&text=Hello,how are you?' target={'blanck'}>Start a Chat</a>
        </article>
        <article className="contact__option">
          <GrLinkedin  className="contact__option-icon"/>
          <h4>Linkedin</h4>
     
          <a href='https://www.linkedin.com/in/satyam-kandoi' target={'blanck'}>Let's Connect</a>
        </article>
        </div>
        {/*End of Options*/}
        <form ref={form} onSubmit={sendEmail}>
        
          <input type="text" name="name" placeholder='Your Full Name' style={{color:"#ffffff"}} required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' />
          
          <button type='Submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact