import React from 'react'
import contact from "../assets/contact.webp";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${contact})`}}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id = "contact-form" method='POST'>
            <label htmlFor="name">Full Name</label>
            <input name='name' placeholder='Enter full name...' type="text" />
            <label htmlFor="email">Email</label>
            <input name='email' placeholder='Enter email...' type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder='Your Message..' id="" cols="30" rows="10"></textarea>
            <button type='submit'>
                Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
