import React, { useState } from 'react';

const LoginForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Handle login logic here
    console.log('Logged in with:', { username, password });
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
      <button onClick={switchForm}>Switch to Signup</button>
    </div>
  );
};

export default LoginForm;