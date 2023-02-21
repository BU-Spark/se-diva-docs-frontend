import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/join";
    navigate(path);
  };
  return (
    <div className="container">
      <h1 className="title">Login</h1>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email: </label>

          <input
            type="email"
            placeholder="Email"
            className="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">password: </label>

          <input
            type="password"
            placeholder="Password"
            className="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        <button onClick={routeChange}>
          Don't already have an account Register here.
        </button>
      </div>
    </div>
  );
};

export default SignIn;
