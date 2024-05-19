import React from "react";
import "./signinpage.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {

  const nav = useNavigate()
  return (
    <div className="sign-in-container">
      <div className="left-side">
        <div className="logo">
          <img src="/signinpagelogo.svg" alt="Logo" />
        </div>
        <div className="title">
          <div className="brand">BASE</div>
          <div className="social-icons">
            <img src="/logos.svg" alt="Social Icons" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="title1">Sign In</div>
        <div className="subtitle">Sign in to your account</div>
        <div className="social-login">
          <div className="social-button">
            <img src="/google.svg" alt="Google Icon" />
            <div>Sign in with Google</div>
          </div>
          <div className="social-button">
            <img src="/apple.svg" alt="Apple Icon" />
            <div>Sign in with Apple</div>
          </div>
        </div>
        <form className="form-container" onSubmit={() => nav('/mainpage')}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
           
            placeholder="johndoe@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
          />
          <a href="/" className="forgot-password">Forgot password?</a>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className="register-link">
          <div>Don't have an account?</div>
          <span>&nbsp;Register here</span>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
