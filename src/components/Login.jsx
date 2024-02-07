import styles from "../css/Login.module.css";
import googleLogo from "../assets/google_logo.png";
import { useState } from "react";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();

  const googleClickHandler = () => {
    window.open("http://localhost:3000/api/auth/google", "_self");
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
        <div className={styles.signUpBox}>
          <h1>Log in</h1>
          <form id="signUpForm">
            <div className={styles.controls}>
              {/* currently can only login with google oauth2.0... email/password inputs created for the future */}
              <input
                type="email"
                id="emailInput"
                name="email"
                className={styles.textInput}
                placeholder="Email"
              />
              <input
                type="password"
                id="passwordInput"
                name="password"
                className={styles.textInput}
                placeholder="Password"
              />
              <div>
                {errorMsg ? (
                  <p className={styles.errorMessage}>{errorMsg}</p>
                ) : null}
                <button
                  className={styles.btn}
                  type="submit"
                  onClick={localClickHandler}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
          <p>or</p>
          <button
            className={styles.authWithProviderBtn}
            onClick={googleClickHandler}
          >
            <img src={googleLogo} alt="google logo" /> Log in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
