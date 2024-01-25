import { useState } from "react";
import styles from "../css/Home.module.css";
import urlValidator from "../utils/urlValidator";

const Home = () => {
  const [urlKey, setUrlKey] = useState(undefined);
  const [validUrl, setValidUrl] = useState(true);

  const clickHandler = async () => {
    const url = urlValidator(document.getElementById("longUrlInput").value);
    if (url) {
      const res = await fetch("http://localhost:3000/api/url", {
        method: "post",
        mode: "cors",
        body: JSON.stringify({ url: url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const key = await res.json();
      setValidUrl(true);
      setUrlKey(key.key);
    } else {
      setUrlKey(undefined);
      setValidUrl(false);
    }
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
          {validUrl ? <p></p> : <p>Please provide a valid URL to shorten</p>}
          {urlKey ? (
            <p>
              {"Zipped Link: "}
              <a
                href={`${window.location.origin}/${urlKey}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`${window.location.host}/${urlKey}`}</a>
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
