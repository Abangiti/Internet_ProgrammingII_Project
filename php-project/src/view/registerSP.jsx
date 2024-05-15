import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceProviderRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [companyCreationDate, setCompanyCreationDate] = useState("");
  const [description, setDescription] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const companyNameHandler = (event) => {
    setCompanyName(event.target.value);
  };

  const serviceTypeHandler = (event) => {
    setServiceType(event.target.value);
  };

  const companyCreationDateHandler = (event) => {
    setCompanyCreationDate(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const companyEmailHandler = (event) => {
    setCompanyEmail(event.target.value);
  };

  const companyPhoneHandler = (event) => {
    setCompanyPhone(event.target.value);
  };

  const registerRequest = async () => {
    try {
      // const response = await fetch(
      //   "http://localhost:8000/Real-project-git/Internet_ProgrammingII_Project/php-project/PHP/api.php/register",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       companyName: companyName,
      //       serviceType: serviceType,
      //       companyCreationDate: companyCreationDate,
      //       description: description,
      //       companyEmail: companyEmail,
      //       companyPhone: companyPhone,
      //       username: username,
      //       email: email,
      //       password: password,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      if (response.ok) {
        const data = await response.json();
        console.log("Registration data:", data);
        if (data.status) {
          localStorage.setItem("token", data.status);
          console.log("Redirecting to confirmation page...");
          navigate("/confirm");
        } else {
          // Handle error here
          console.log("Registration failed:", data.error, data.status);
        }
      } else {
        // Handle non-200 response here
        console.log("Error:", response.status, response.statusText);
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
    <form className="register-formm" onSubmit={submitHandler}>
      <h2 className="font-bold text-2xl">Service Provider Registration</h2>
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler} required />
      <label>Email</label>
      <input type="text" value={email} onChange={emailHandler} required />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={passwordHandler}
        required
      />
      <label>Company Name</label>
      <input
        type="text"
        value={companyName}
        onChange={companyNameHandler}
        required
      />
      <label>Service Type</label>
      <input
        type="text"
        value={serviceType}
        onChange={serviceTypeHandler}
        required
      />
      <label>Company Creation Date</label>
      <input
        type="date"
        value={companyCreationDate}
        onChange={companyCreationDateHandler}
        required
      />
      <label>Description</label>
      <textarea
        value={description}
        onChange={descriptionHandler}
        required
      ></textarea>
      <label>Company Email</label>
      <input
        type="text"
        value={companyEmail}
        onChange={companyEmailHandler}
        required
      />
      <label>Company Phone</label>
      <input
        type="text"
        value={companyPhone}
        onChange={companyPhoneHandler}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-cyan-500 mr-5">Register</button>
      <Link to="/login">Login</Link>
    </form>
  );
};

export default ServiceProviderRegister;
