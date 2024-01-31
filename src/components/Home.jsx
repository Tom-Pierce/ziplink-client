import { useContext, useState } from "react";
import styles from "../css/Home.module.css";
import urlValidator from "../utils/urlValidator";
import { UserContext } from "../App";

const Home = () => {
  const { user } = useContext(UserContext);
  const [urlKey, setUrlKey] = useState(undefined);
  const [validUrl, setValidUrl] = useState(true);

  // create zipLink function
  const zipLinkClickHandler = async () => {
    event.preventDefault();
    const url = urlValidator(document.getElementById("longUrlInput").value);
    try {
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
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  return (
    <>
      <div className="main">
        <div className={styles.urlZipperBox}>
          <form id="urlForm" className={styles.urlForm}>
            {user ? <p>{user.username}</p> : null}
            <h1>Paste the URL to be zipped below</h1>
            <div className={styles.controls}>
              <input
                type="text"
                id="longUrlInput"
                name="url"
                className={styles.urlInput}
                placeholder="Enter URL here"
              />
              <button
                className={styles.btn}
                type="submit"
                onClick={zipLinkClickHandler}
              >
                Zip Link
              </button>
            </div>
          </form>
          {validUrl ? null : (
            <p className={styles.errorMessage}>
              Please provide a valid URL to zip
            </p>
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
          <p>
            ZipLink is a free tool to shorten URLs and generate short links that
            are easy to share online
          </p>
        </div>
        <div className={styles.infoBox}>
          <h2>Want more features? Create a free account!</h2>
          <p>Create custom ZipLinks, view analytics and manage your ZipLinks</p>
          <a className={styles.btnLink} href="/signup">
            Create Account
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
