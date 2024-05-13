import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginRequest();
  };

  async function loginRequest() {
    try {
      const response = await fetch('http://localhost:8000/php-project/PHP/api.php/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
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
          navigate('/');
        } else {
          // Set error
        }
      } else {
        throw new Error('error');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form className="login-form"  onSubmit={submitHandler}>
      <h2>Login</h2>
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler} />
      <label>Password</label>
      <input type="password" value={password} onChange={passwordHandler} />
      <button>Login</button>
      <Link to="/register">Register</Link>
      <Link to="/reset">Reset Password</Link>
    </form>
  );
}
