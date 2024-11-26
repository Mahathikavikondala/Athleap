import React, { useState } from 'react';
import '../styles/Login.css'; // Import the CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Mahathi' && password === 'Hello123') {
      // Successful login, redirect to index.html (or any other page)
      window.location.href = '/home';
    } else {
      // Display error message
      setErrorMessage('Sorry, wrong username or password.');
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="image-section">
          {/* You can add a placeholder or any additional content here */}
        </div>
        <div className="login-section">
          <div className="login-card">
            <h2>Welcome Back!</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
              <p>
                Don't have an account? <a href="#">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
