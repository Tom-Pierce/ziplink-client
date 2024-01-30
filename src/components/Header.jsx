import styles from "../css/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <h1 className={styles.title}>ZipLink</h1>
        </a>
      </header>
    </>
  );
};

export default Header;
