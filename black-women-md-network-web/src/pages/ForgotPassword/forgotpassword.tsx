import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./forgotpassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/join";
    navigate(path);
  };

  // Submits data before moving to next step!
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(email.length);
    const username = email;

    try {
      const response = await axios.post(
        "https://se-diva-docs.herokuapp.com/forgot_password",
        null,
        {
          params: { username },
        }
      );
      console.log(response.data.access_token);
      setMessage("A email with your new password has been sent.");
    } catch (err) {
      console.log("Error: ", err);
      setMessage("Incorrect email.  Please try again later!");
    }
  };

  return (
    <div className={styles["page"]}>
      <div className={styles["container"]}>
        <label className={styles["label-text"]} htmlFor="email">
          To have your password reset, enter your email address below. We will
          then send an email containing a new password.
        </label>
        <form className={styles["send-email"]} onSubmit={handleSubmit}>
          <input
            className={styles["email"]}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={styles["submit"]} type="submit">
            Send Email
          </button>
        </form>

        {message && <p className={styles["label-text"]}>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
