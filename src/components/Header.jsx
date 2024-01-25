import styles from "../css/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <a href="/">
          <h1 className={styles.title}>ZipLink</h1>
        </a>
      </div>
    </>
  );
};

export default Header;
