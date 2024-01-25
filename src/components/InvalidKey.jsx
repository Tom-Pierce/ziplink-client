import styles from "../css/InvalidKey.module.css";

const InvalidKey = () => {
  return (
    <>
      <div className={styles.main}>
        <h3>This ZipLink is invalid or has expired</h3>
      </div>
    </>
  );
};

export default InvalidKey;
