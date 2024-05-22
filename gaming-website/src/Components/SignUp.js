import React, { useState } from 'react';
import './styles/SignUp.css';
import userIcon from './styles/Images/NewPng.png';
import backGround from './styles/Images/SignUpBackground.jpg'
import Icon1 from './styles/Images/WoWIcon1.jpg'
import Icon2 from './styles/Images/WoWIcon2.jpg'
import Icon3 from './styles/Images/WowIcon3.jpg'
import Icon4 from './styles/Images/WowIcon4.jpg'
import Icon5 from './styles/Images/WowIcon5.jpg'
import Icon6 from './styles/Images/WowIcon6.jpg'


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
    
      <img src={Icon1} alt="Left Image" className="colorPopLeft" />
      
      
      <img src={Icon2} alt="Left Image2" className="colorPopLeft2" />

      <img src={Icon3} alt="Left Image3" className="colorPopLeft3" />
        
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

      <img src={Icon4} alt="Right Image" className="colorPopRight1" />
      <img src={Icon5} alt="Right Image2" className="colorPopRight2" />
      <img src={Icon6} alt="Right Image3" className="colorPopRight3" />
    </div>
  );
}

export default SignUp;
