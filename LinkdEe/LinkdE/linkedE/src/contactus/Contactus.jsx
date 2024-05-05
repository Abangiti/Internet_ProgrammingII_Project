import React from 'react'
import './contactus.css';

export default function Contactus() {
  return (
    <main>
    <div className="container">
      <h2>Contact Us</h2>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required="" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required=""
          defaultValue={""}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="contactus">
        <div className="contact emal">
          <img src="../Resources/icons/icons8-email-50.png" width="30px" />
          <h4>linke_support@gmail.com</h4>
        </div>
        <div className="contact instagram">
          <img src="../Resources/icons/icons8-instagram-48.png" alt="" />
          <h4>Instagram</h4>
        </div>
        <div className="contact Telegram">
          <img src="../Resources/icons/icons8-telegram-48.png" alt="" />
          <h4>Telegram</h4>
        </div>
        <div className="contact phone">
          <img src="../Resources/icons/icons8-phone-50.png" alt="" />
          <h4>+251930856496</h4>
        </div>
      </div>
    </div>
  </main>
  
  )
}
