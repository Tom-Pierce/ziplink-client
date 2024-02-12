import { useContext } from "react";
import { UserContext } from "../App";
import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import NavBarProfile from "./NavBarProfile";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className={styles.header}>
        <Link className={styles.title} to="/">
          ZipLink
        </Link>
        {user ? (
          <div className={styles.authBar}>
            <NavBarProfile />
          </div>
        ) : (
          <div className={styles.authBar}>
            <Link to="/login">Login</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
