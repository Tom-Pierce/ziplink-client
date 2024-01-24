import { useState } from "react";
import styles from "../css/Home.module.css";

const Home = () => {
  const [urlKey, setUrlKey] = useState(undefined);

  const clickHandler = async () => {
    const url = document.getElementById("longUrlInput").value;
    const res = await fetch("http://localhost:3000/api/url", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ url: url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const key = await res.json();
    setUrlKey(key.key);
  };

  return (
    <>
      <div className={styles.main}>
        <form id="urlForm" className={styles.urlForm}>
          <h3>Paste the URL to be shortened below</h3>
          <div className={styles.controls}>
            <input
              type="text"
              id="longUrlInput"
              name="url"
              className={styles.textInput}
              placeholder="Enter URL here"
            />
            <button className={styles.btn} type="button" onClick={clickHandler}>
              Zip Link
            </button>
          </div>
          {urlKey ? (
            <p>
              {"Zipped Link: "}
              <a
                href={`http://localhost:5173/${urlKey}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`localhost:5173/${urlKey}`}</a>
            </p>
          ) : (
            <p></p>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;
