import React, { useState } from 'react';
import "../../Styles/Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }

    handleLocalStorage(email, password);
    alert('Success!');
  };

  const handleLocalStorage = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2 className="login-title">Sign in to your account</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Your Login Here"
              required
              value={email}
              onChange={handleEmailChange}
              className="input"
            />
            {emailError && (
              <div className="error-message">
                <p>Please enter a valid email</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password" className="label">
                Password
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password Here"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
            {passwordError && (
              <div className="error-message">
                <p>Please enter a valid password</p>
              </div>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
