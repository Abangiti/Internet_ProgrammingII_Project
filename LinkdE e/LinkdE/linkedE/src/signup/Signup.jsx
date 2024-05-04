import React from 'react'
// import './signup.css';

export default function Signup() {
  return (
    <main>
    <form id="customersignup" onsubmit="return validateForm()">
      <h2>Sign Up</h2>
      <div className="name-group">
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="firstname" name="firstname" required="" />
        <label htmlFor="lastname" className="last">
          Last Name:{" "}
        </label>
        <input type="text" id="lastname" name="lastname" required="" />
      </div>
      <label htmlFor="birthdate">Birthdate:</label>
      <input type="date" id="birthdate" name="birthdate" required="" />
      <label htmlFor="phonenumber">Phone Number:</label>
      <input
        type="tel"
        id="phonenumber"
        name="phonenumber"
        maxLength={13}
        required=""
      />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required="" />
      <div id="sError" className="error-message" />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required=""
      />
      <div id="passwordError" className="error-message" />
      <input type="submit" defaultValue="Register" />
    </form>
  </main>
  
  )
}
