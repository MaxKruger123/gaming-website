import React, { useState } from 'react';
import './styles/SignUp.css';
import userIcon from './styles/Images/NewPng.png';
import backGround from './styles/Images/SignUpBackground.jpg'



function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignedUp(true);
  };

  if (isSignedUp) {
    return (
      <div className="thankYouMessage">
        <p className="LoggedInMessage">You are logged in as {username}</p>
        <img src={userIcon} alt="User Icon" className="userIcon" />
      </div>
    );
  }

  return (
    <div className="signUpContainer">

    <div className="inFrontForm">
      
        
      <form onSubmit={handleSignUp} className="signUpForm">
        <h2>Sign Up</h2>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signUpButton">Sign Up</button>
      </form>

      </div>
      
    </div>
  );
}

export default SignUp;
