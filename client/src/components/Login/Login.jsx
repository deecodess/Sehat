import image from './../../assets/Sehat.png';

import React, {useState} from 'react';
import './Login.css'; // Import your CSS file
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  //   const [message, setMessage] = useState ('');

  const handleLogin = async e => {
    e.preventDefault ();
    try {
      const response = await fetch ('http://localhost:3000/login', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({username, password}),
      });

      if (response.ok) {
        alert ('login sucess');
      } else {
        alert ('login failed');
      }
    } catch (error) {
      console.error ('Error during login:', error);
    }
  };

  const navigate = useNavigate ();

  return (
    <div className="login-container">
      <div className="image-con">
        <img src={image} id="img-1" alt="Login" />
      </div>

      <div className="login-text">
        <h1>Welcome to the Login Page!</h1>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="custom-input"
              value={username}
              onChange={e => setUsername (e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="custom-input"
              value={password}
              onChange={e => setPassword (e.target.value)}
            />
          </div>
          <button onClick={() => navigate ('/home')}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
