import styles from "../css/Login.module.css";
import googleLogo from "../assets/google_logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();

  const googleClickHandler = () => {
    window.open(`${import.meta.env.VITE_API_URL}api/auth/google`, "_self");
  };

  const demoClickHandler = async (e) => {
    e.preventDefault();
    setErrorMsg();
    const email = "demo@example.com";
    const password = "ThisIsADemoAccount123";

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}api/auth/local/login`,
      {
        method: "post",
        mode: "cors",
        body: JSON.stringify({ email, password }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200)
      window.location.href = `${window.location.protocol}//${window.location.host}/`;
    if (res.status === 401) {
      const { message } = await res.json();
      setErrorMsg(message);
    }
  };

  const localClickHandler = async (e) => {
    e.preventDefault();
    setErrorMsg();
    const form = document.getElementById("signUpForm");
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}api/auth/local/login`,
      {
        method: "post",
        mode: "cors",
        body: JSON.stringify({ email, password }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200)
      window.location.href = `${window.location.protocol}//${window.location.host}/`;
    if (res.status === 401) {
      const { message } = await res.json();
      setErrorMsg(message);
    }
  };
  return (
    <>
      <div className="main">
        <div className={`${styles.loginBox} infoBox`}>
          <h1>Log in</h1>
          <form id="signUpForm">
            <div className={styles.controls}>
              <input
                type="email"
                id="emailInput"
                name="email"
                className={`${styles.textInput} textInput`}
                placeholder="Email"
              />
              <input
                type="password"
                id="passwordInput"
                name="password"
                className={`${styles.textInput} textInput`}
                placeholder="Password"
              />
              <div>
                {errorMsg ? (
                  <p className={styles.errorMessage}>{errorMsg}</p>
                ) : null}
                <button
                  className={`${styles.btn} btn`}
                  type="submit"
                  onClick={localClickHandler}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
          <p>or</p>
          <div className={styles.alternateLogins}>
            <button
              className={styles.authWithProviderBtn}
              onClick={googleClickHandler}
            >
              <img src={googleLogo} alt="google logo" /> Log in with Google
            </button>
            <button
              className={styles.authWithProviderBtn}
              onClick={demoClickHandler}
            >
              Log in with demo account
            </button>
          </div>

          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
