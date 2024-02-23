import React, { useState } from 'react';

const LoginPage = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    const { username, password } = formData;
    
    // Example: Check if username and password match a predefined value
    if (username === 'exampleuser' && password === 'password123') {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <center>
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </center>
  );
};

export default LoginPage;

