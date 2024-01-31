import styles from "../css/SignUp.module.css";
import googleLogo from "../assets/google_logo.png";

const googleClickHandler = () => {
  window.open("http://localhost:3000/api/auth/google", "_self");
};

const SignUp = () => {
  return (
    <>
      <div className="main">
        <div className={styles.signUpBox}>
          <h1>Sign up now!</h1>
          <div className={styles.controls}>
            {/* currently can only sign up/in with google oauth2.0... email/password inputs created for the future */}
            <div className={styles.inputsWrapper}>
              <input
                type="email"
                id="emailInput"
                name="email"
                className={styles.textInput}
                placeholder="Email"
              />
              <input
                type="text"
                id="usernameInput"
                name="username"
                className={styles.textInput}
                placeholder="Username"
              />
            </div>
            <div className={styles.inputsWrapper}>
              <input
                type="password"
                id="passwordInput"
                name="password"
                className={styles.textInput}
                placeholder="Password"
              />
              <input
                type="password"
                id="confirmPasswordInput"
                name="confirmPassword"
                className={styles.textInput}
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <button className={styles.btn} type="submit">
                Sign up
              </button>
            </div>
          </div>
          <p>or</p>
          <button
            className={styles.authWithProviderBtn}
            onClick={googleClickHandler}
          >
            <img src={googleLogo} alt="google logo" /> Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
