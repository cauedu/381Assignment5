import React, { useState } from 'react';

const SignupForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle signup logic here
    console.log('Signed up with:', { username, password, email });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={e => { e.preventDefault(); handleSignup(); }}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <button onClick={switchForm}>Switch to Login</button>
    </div>
  );
};

export default SignupForm;