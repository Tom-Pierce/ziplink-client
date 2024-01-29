import { useState } from "react";
import styles from "../css/UnzipUrl.module.css";
import urlValidator from "../utils/urlValidator";

const UnzipUrl = () => {
  const [url, setUrl] = useState(null);
  const [validKey, setValidKey] = useState(true);

  const clickHandler = async () => {
    setUrl(null);
    setValidKey(true);
    event.preventDefault();
    const zipLink = urlValidator(document.getElementById("zipLinkInput").value);
    const key = zipLink.substring(zipLink.lastIndexOf("/") + 1);
    const res = await fetch(`${import.meta.env.VITE_API_URL}api/${key}`, {
      method: "get",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 404) {
      setValidKey(false);
    } else {
      const tempUrl = await res.json();
      setValidKey(true);
      setUrl(tempUrl.url);
    }
  };
  return (
    <>
      <div className={styles.main}>
        <form id="urlForm" className={styles.urlForm}>
          <h2>Paste the URL to be unzipped below</h2>
          <div>
            <input
              type="text"
              id="zipLinkInput"
              name="url"
              className={styles.urlInput}
              placeholder="Enter zipped URL here"
            />
            <button type="submit" className={styles.btn} onClick={clickHandler}>
              Unzip
            </button>
          </div>
        </form>
        {url ? (
          <p>
            This ZipLink redirects to <a href={url}>{url}</a>{" "}
          </p>
        ) : (
          <p></p>
        )}
        {validKey ? <p></p> : <p>Invalid or expired ZipLink</p>}
      </div>
    </>
  );
};

export default UnzipUrl;
