import React, { useState } from 'react';
import './login.css';
import vide3 from "../../Assets/your_video.mp4";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kullanıcı adı:', username);
    console.log('Şifre:', password);
    // Burada giriş işlemleri gerçekleştirilebilir
  };

  return (
    <div className="login-container">
      <video autoPlay muted loop className="login-video">
        <source src={vide3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-content">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
