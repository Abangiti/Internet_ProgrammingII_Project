import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountConfirm() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const codeHandler = (event) => {
    setCode(event.target.value);
  };

  async function confirmRequest() {
    try {
      const response = await fetch('http://localhost:8000/Real-project-git/Internet_ProgrammingII_Project/php-project/PHP/api.php/confirm', {
        method: 'POST',
        body: JSON.stringify({
          code: code,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 1) {
          // Show success message
          window.alert('You are successfully registered!');
          navigate('/');
        } else {
          console.log("error")
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    await confirmRequest();
  };

  return (
    <form className="register-formm" onSubmit={submitHandler}>
      <h2>Confirm Code</h2>
      <label>Code</label>
      <input type="text" value={code} onChange={codeHandler} />
      <button type="submit" className='bg-cyan-500 mr-5'>Confirm</button>
    </form>
  );
}
