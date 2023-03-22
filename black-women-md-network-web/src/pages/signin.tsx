import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

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
    <div className={styles["outer-container"]}>
      <div className={styles["auth-form-container"]}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
          <label className={styles["label-signin"]} htmlFor="email">
            Email:{" "}
          </label>

          <input
            className={styles["email"]}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles["label-signin"]} htmlFor="password">
            Password:{" "}
          </label>

          <input
            className={styles["password"]}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles["link-btn"]}>Forgot password?</button>
          <button className={styles["submit"]} type="submit">
            Log In
          </button>
        </form>
        <button className={styles["link-btn"]} onClick={routeChange}>
          Not apart of the Black Women M.D. Network? Become a member here.
        </button>
      </div>
    </div>
  );
};

export default SignIn;
