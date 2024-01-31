import styles from "../css/Footer.module.css";
import githubLogo from "../assets/github-mark.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li>
            <Link to="/">ZipLink</Link>
          </li>
          <li>
            <Link to="/custom">Custom ZipLink</Link>
          </li>
          <li>
            <Link to="/unzip">Unzip Link</Link>
          </li>
          <li>
            <Link to="/clicks">ZipLink Click Counter</Link>
          </li>
          <li>
            <Link
              className={styles.githubLogo}
              to="https://github.com/Tom-Pierce/ziplink-client"
            >
              <img className={styles.logo} src={githubLogo} alt="Github Logo" />{" "}
              Tom Pierce
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
