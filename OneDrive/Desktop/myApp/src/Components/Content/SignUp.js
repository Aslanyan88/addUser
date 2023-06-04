import React, { useState } from 'react';
import "../../Styles/SignUp.css"
import dc4 from "../../Images/doctor.png"

function SignUp({addUser}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

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

    console.log(name, surname, email, password, 'hopar')

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }

    if (!emailError && !passwordError) {
      addUser({ id: Date.now(), src: dc4, title: `${name} ${surname}`, text: 'Urology' });
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
    }

    alert('Success!');
  };

  return (
    <div className="login-container2">
      <div className="login-form2">
        <div className="login-header2">
          <h2 className="login-title2">Create your account</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group2">
            <label htmlFor="name" className="label2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name Here"
              required
              value={name}
              onChange={handleNameChange}
              className="input2"
            />
          </div>
          <div className="form-group2">
            <label htmlFor="surname" className="label2">
              Surname
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Enter Your Surname Here"
              required
              value={surname}
              onChange={handleSurnameChange}
              className="input2"
            />
          </div>
          <div className="form-group2">
            <label htmlFor="email" className="label2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Your Email Here"
              required
              value={email}
              onChange={handleEmailChange}
              className="input2"
            />
            {emailError && (
              <div className="error-message2">
                <p>Please enter a valid email</p>
              </div>
            )}
          </div>
          <div className="form-group2">
            <label htmlFor="password" className="label2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password Here"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="input2"
            />
            {passwordError && (
              <div className="error-message2">
                <p>Please enter a valid password</p>
              </div>
            )}
          </div>
          <div className="form-group2">
            <button type="submit" className="submit-button2">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
