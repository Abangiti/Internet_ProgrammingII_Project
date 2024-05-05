import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const resetRequest = async () => {
    try {
      const response = await fetch('http://localhost:8000/php-project/api/reset', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          navigate('/');
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
    resetRequest();
  };

  return (
    <form className="register-form" onSubmit={submitHandler}>
      <h2>Reset Password</h2>
      <label>Username or Email</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <button>Reset Password</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default ResetPassword;
