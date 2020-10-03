import React, { useState } from "react";
import "../styles/authorization.css";
import Header from "./Header";
function Authorization() {
  const [formState, setformState] = useState("login");

  function RenderForm() {
    if (formState === "login") {
      return (
        <div>
        <div className="auth-form">
          <div className="auth-form-row">
            <label htmlFor="username" className="form-label">
              UserName:
            </label>
            <input
              className="form-input input-tag"
              id="username"
              type="text"
              placeholder="enter username"
            />
          </div>
          <div className="auth-form-row">
            <label htmlFor="password">Password:</label>
            <input
              className="form-input input-tag"
              id="password"
              type="password"
              placeholder="enter password"
            />
          </div>
        </div>
        <div className="auth-form-button" >
        <button   style={{
            backgroundColor: "red" 
          }}>
            Login</button>
            <br/>
        </div>
        </div>
      );
    } else {
      return (
        <div>
        <div className="auth-form">
          <div className="auth-form-row">
            <label htmlFor="Email_register" className="form-label">
              Email:
            </label>
            <input
              className="form-input input-tag"
              id="Email_register"
              type="text"
              placeholder="enter Email"
            />
          </div>
          <div className="auth-form-row">
            <label htmlFor="username_register" className="form-label">
              UserName:
            </label>
            <input
              className="form-input input-tag"
              id="username_register"
              type="text"
              placeholder="enter username"
            />
          </div>
          <div className="auth-form-row">
            <label htmlFor="password_register">Password:</label>
            <input
              className="form-input input-tag"
              id="password_register"
              type="password"
              placeholder="enter password"
            />
          </div>
         
        </div>
        <div className="auth-form-button" >
        <button   style={{
            backgroundColor: "red" 
          }}>
            Register</button>
            <br/>
        </div>
        </div>
      );
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-header">
        <Header />
      </div>
      <div className="auth-body">
        <div className="auth-body-titles">
          <button
            onClick={() => {
              setformState("login");
            }}
            style={{
              backgroundColor: formState === "login" ? "red" : "transparent",
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setformState("register");
            }}
            style={{
              backgroundColor: formState !== "login" ? "red" : "transparent",
            }}
          >
            Signup
          </button>
        </div>
        <RenderForm />
        <div style={{backgroundColor:"black",height:"100%"}}>
         
          </div>
      </div>
    </div>
  );
}

export default Authorization;
