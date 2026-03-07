import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue</p>

        <div className="login-fields">
          <label htmlFor="email" className="labels">
            Email
          </label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>

        <div className="login-fields">
          <label htmlFor="password" className="labels">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="login-button" type="button">
          Login
        </button>

        <p className="register-text">Register as:</p>

        <div className="register-links">
          <Link to="/patient/register">Patient</Link>
          <Link to="/doctor/register">Doctor</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;