import { useState } from "react";
import urlValidator from "../utils/urlValidator";
import styles from "../css/CustomUrl.module.css";

const CustomUrl = () => {
  const [urlKey, setUrlKey] = useState(undefined);
  const [validUrl, setValidUrl] = useState(true);
  const [validCustomKey, setValidCustomKey] = useState(true);
  const [customKeyAvailable, setCustomKeyAvailable] = useState(true);

  const clickHandler = async () => {
    setUrlKey(undefined);
    setValidCustomKey(true);
    setValidUrl(true);
    setCustomKeyAvailable(true);

    event.preventDefault();
    const customKey = document.getElementById("customKeyInput").value;
    const url = urlValidator(document.getElementById("longUrlInput").value);
    if (!url) return setValidUrl(false);
    if (!customKey) return setValidCustomKey(false);
    const res = await fetch(`${import.meta.env.VITE_API_URL}api/url`, {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ url: url, customKey: customKey }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 409) {
      setCustomKeyAvailable(false);
    } else {
      const jsonRes = await res.json();
      setValidUrl(true);
      setValidCustomKey(true);
      setCustomKeyAvailable(true);
      setUrlKey(jsonRes.key);
    }
  };

  return (
    <>
      <div className="main">
        <div className={styles.customUrlBox}>
          <form id="urlForm" className={styles.urlForm}>
            <h1>Paste the URL to be zipped below</h1>
            <div className={styles.controls}>
              <input
                type="text"
                id="longUrlInput"
                name="url"
                className={styles.urlInput}
                placeholder="Enter URL here"
              />

              <div className={styles.controlsWrapper}>
                <input
                  type="text"
                  id="customKeyInput"
                  name="customKey"
                  className={styles.customKeyInput}
                  placeholder="Enter custom URL here"
                  required
                />

                <button
                  className={styles.btn}
                  type="submit"
                  onClick={clickHandler}
                >
                  Zip Link
                </button>
              </div>
            </div>
          </form>
          {validUrl ? null : (
            <p className={styles.errorMessage}>
              Please provide a valid URL to zip
            </p>
          )}
          {validCustomKey ? null : (
            <p className={styles.errorMessage}>
              Please provide a valid custom URL to use
            </p>
          )}
          {customKeyAvailable ? null : (
            <p className={styles.errorMessage}>Custom URL already in use</p>
          )}
          {urlKey ? (
            <p className={styles.zippedLink}>
              {"Zipped Link: "}
              <a
                href={`${window.location.origin}/${urlKey}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`${window.location.host}/${urlKey}`}</a>
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default CustomUrl;

// TODO checks for valid keys nad urls need to be fixed so taht they pop at the right times
