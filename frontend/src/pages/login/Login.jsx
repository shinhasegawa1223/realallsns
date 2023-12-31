import React from "react";

import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">sample</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">Login</p>
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">forgot password</span>
            <button className="loginRegisterButton">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
