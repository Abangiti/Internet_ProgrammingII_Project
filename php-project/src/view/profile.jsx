import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export default function profile () {
  const [user, setUser] = useState(null);
  const userToken = jwtDecode(localStorage.getItem('token') || '');


  const getUser = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:8000/Real-project-git/Internet_ProgrammingII_Project/php-project/PHP/api.php/user', { 
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.status);
      } else {
        throw new Error('Error fetching user data');
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user && (
        <>
          <label>Name: {user.firstname}</label>
          <label>Last Name: {user.lastname}</label>
          <label>Username: {user.username}</label>
          <label>Email: {user.email}</label>
        </>
      )}
      <h2>User from token</h2>
      {userToken && (
        <>
          <label>Name: {userToken.user.firstname}</label>
          <label>Last Name: {userToken.user.lastname}</label>
          <label>Username: {userToken.user.username}</label>
          <label>Email: {userToken.user.email}</label>
        </>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};

 

  