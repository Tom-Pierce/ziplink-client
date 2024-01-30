import styles from "../css/Footer.module.css";
import githubLogo from "../assets/github-mark.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li>
            <a href="/">ZipLink</a>
          </li>
          <li>
            <a href="/custom">Custom ZipLink</a>
          </li>
          <li>
            <a href="/unzip">Unzip Link</a>
          </li>
          <li>
            <a href="/clicks">ZipLink Click Counter</a>
          </li>
          <li>
            <a
              className={styles.githubLogo}
              href="https://github.com/Tom-Pierce/ziplink-client"
            >
              <img className={styles.logo} src={githubLogo} alt="Github Logo" />{" "}
              Tom Pierce
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
