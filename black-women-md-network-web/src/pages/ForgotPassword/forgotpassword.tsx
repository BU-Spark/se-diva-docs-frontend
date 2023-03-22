import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./forgotpassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/join";
    navigate(path);
  };

  // Submits data before moving to next step!
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);

    // // POST request using fetch inside useEffect React hook
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams({
    //     username: email,
    //     password: password,
    //   }).toString(),
    // };

    // fetch("https://se-diva-docs.herokuapp.com/login", requestOptions)
    //   .then((response) => {
    //     if (response.status == 200) {
    //       console.log(response);
    //       // redirect to homepage
    //     } else {
    //       console.log("Error: " + response.status);
    //       alert("There was an error!  Please try again later.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error: " + error.response.status);
    //     alert("There was an error!  Please try again later.");
    //   });
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

          <button className={styles["submit"]} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
