import { useState } from "react";
import styles from "../css/Home.module.css";
import urlValidator from "../utils/urlValidator";

const Home = () => {
  const [urlKey, setUrlKey] = useState(undefined);
  const [validUrl, setValidUrl] = useState(true);
  console.log(import.meta.env.VITE_API_URL);
  const clickHandler = async () => {
    event.preventDefault();
    const url = urlValidator(document.getElementById("longUrlInput").value);
    if (url) {
      const res = await fetch(`${import.meta.env.VITE_API_URL}api/url`, {
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
          <h2>Paste the URL to be zipped below</h2>
          <div className={styles.controls}>
            <input
              type="text"
              id="longUrlInput"
              name="url"
              className={styles.textInput}
              placeholder="Enter URL here"
            />
            <button className={styles.btn} type="submit" onClick={clickHandler}>
              Zip Link
            </button>
          </div>
        </form>
        {validUrl ? <p></p> : <p>Please provide a valid URL to zip</p>}
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
        <div className={styles.customUrlWrapper}>
          <h2>Want a custom zipped URL?</h2>
          <a className={styles.btnLink} href="/custom">
            Custom URL
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
