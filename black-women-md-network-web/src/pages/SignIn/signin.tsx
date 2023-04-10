import axios, { AxiosError } from "axios";
import React, { FormEvent, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const signIn = useSignIn();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/join";
    navigate(path);
  };

  const forgotPasswordRoute = () => {
    let path = "/forgotpassword";
    navigate(path);
  };

  // Submits data before moving to next step!
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const response = await axios.post(
        "https://se-diva-docs.herokuapp.com/login",
        new URLSearchParams({
          username,
          password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data.access_token);
      setMessage("Logged in successfully.");
      // Authentication
      signIn({
        token: response.data.access_token,
        tokenType: "bearer",
        expiresIn: 3600,
        authState: { username: username },
      });
    } catch (err) {
      // if (err && err instanceof AxiosError)
      //   setError(err.response?.data.message);
      // else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
      setMessage("Incorrect username or password.");
    }
    // try {
    //   const response = await axios.post('https://se-diva-docs.herokuapp.com/login', new URLSearchParams({
    //     email,
    //     password,
    //   }), {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   });
    //   console.log(response.data.access_token)
    //   localStorage.setItem('access_token', response.data.access_token);
    //   setMessage('Logged in successfully.');
    // } catch (error) {
    //   setMessage('Incorrect username or password.');
    // }
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
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
          <button className={styles["link-btn"]} onClick={forgotPasswordRoute}>
            Forgot password?
          </button>
          <button className={styles["submit"]} type="submit">
            Log In
          </button>
        </form>
        <button className={styles["link-btn"]} onClick={routeChange}>
          Not apart of the Black Women M.D. Network? Become a member here.
        </button>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SignIn;