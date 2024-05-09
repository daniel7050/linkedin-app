import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://www.vectorico.com/wp-content/uploads/2018/02/Linkedin-full-logo.png"
        alt="LinkedIn Logo"
      />

      <form>
        <input placeholder="Full name (required if registering)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
