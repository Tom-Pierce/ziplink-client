import styles from "../css/Login.module.css";
import googleLogo from "../assets/google_logo.png";

const googleClickHandler = () => {
  window.open("http://localhost:3000/api/auth/google", "_self");
};

const Login = () => {
  return (
    <>
      <div className="main">
        <div className={styles.signUpBox}>
          <h1>Log in</h1>
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
              <button className={styles.btn} type="submit">
                Log in
              </button>
            </div>
          </div>
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
