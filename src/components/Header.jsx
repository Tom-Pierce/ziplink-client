import { useContext } from "react";
import { UserContext } from "../App";
import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.title}>ZipLink</h1>
        </Link>
        {user ? (
          <div className={styles.authBar}>
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div className={styles.authBar}>
            <Link to="/login">Login</Link> <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
