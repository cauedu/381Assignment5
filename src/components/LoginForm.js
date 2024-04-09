import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    } else
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        // Redirect or perform any action upon successful login
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred, please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <button onClick={switchForm}>Switch to Signup</button>
      </Link>
    </div>
  );
};

export default LoginForm;