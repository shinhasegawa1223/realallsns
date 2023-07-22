import React from "react";

import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">sample</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">New Create</p>
            <input type="text" className="loginInput" placeholder="User Name" />
            <input type="text" className="loginInput" placeholder="Email" />
            <input
              type="text"
              className="loginInput"
              placeholder="Email Confirmation"
            />
            <input type="text" className="loginInput" placeholder="Password" />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
