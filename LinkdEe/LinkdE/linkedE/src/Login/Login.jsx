import React from 'react'
import './login.css';

export default function Login() {
  return (
    <main>
  <form>
    <h2>Sign In</h2>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required="" />
    <button type="submit">Login</button>
    <h4>
      Don't have an account? <a href="./beforesignup.html">Sign Up</a>
    </h4>
  </form>
</main>

  )
}
