import React, { useState } from 'react';

const Login = () => {
  // State variables to hold the user's credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle changes in the email input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle changes in the password input field
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle the login form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Add code to authenticate user's credentials and redirect them to the dashboard
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
