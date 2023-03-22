import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signin.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [accessToken, setAccessToken] = useState(
  //   sessionStorage.getItem("accessToken")
  // );

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/join";
    navigate(path);
  };

  // Submits data before moving to next step!
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username: email,
        password: password,
      }).toString(),
    };

    fetch("https://se-diva-docs.herokuapp.com/login", requestOptions)
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          //let path = "/welcome";
          //const access_token = response.body.access_token;
          // navigate(path);
        } else {
          console.log("Error: " + response.status);
          alert("There was an error!  Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Error: " + error.response.status);
        alert("There was an error!  Please try again later.");
      });
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
