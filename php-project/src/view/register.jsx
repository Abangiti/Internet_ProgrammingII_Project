import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const firstnameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastnameHandler = (event) => {
    setLastName(event.target.value);
  };

  const birthdateHandler = (event) => {
     setBirthdate(event.target.value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const registerRequest = async () => {
    try {
      const response = await fetch('http://localhost:8000/php-project/PHP/api.php', {
        method: 'POST',
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          birthdate: birthdate,
          phone: phone,
          username: username,
          email: email,
          password: password,
         
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          localStorage.setItem('token', data.status);
          navigate('/confirm');
        } else {
          // Handle error here
        }
      } else {
        // Handle non-200 response here
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    registerRequest();
  };

  return (
    <form className="register-form" action="register" onSubmit={submitHandler}>
      <h2>Register</h2>
      <label>First Name</label>
      <input type="text" value={firstname} onChange={firstnameHandler} />
      <label>Last Name</label>
      <input type="text" value={lastname} onChange={lastnameHandler} />
      <label>Birthdate</label>
      <input type="date" value={birthdate} onChange={birthdateHandler} />
      <label>Phone Number</label>
      <input type="text" value={phone} onChange={phoneHandler} />
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <label>Email</label>
      <input type="text" value={email} onChange={emailHandler} />
      <label>Password</label>
      <input type="password" value={password} onChange={passwordHandler} />

     
      <button>Register</button>
      <Link to="/login">Login</Link>
      
    </form>
  );
};

export default Register;
