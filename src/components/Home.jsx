import { useContext, useState } from "react";
import styles from "../css/Home.module.css";
import urlValidator from "../utils/urlValidator";
import ZipLinkDisplay from "./ZipLinkDisplay";
import CopyToClipboard from "./CopyToClipboard";
import { UserContext } from "../App";

const Home = () => {
  const [urlKey, setUrlKey] = useState(undefined);
  const [validUrl, setValidUrl] = useState(true);
  const [reRender, setReRender] = useState(false);
  const { user } = useContext(UserContext);

  // create zipLink function
  const zipLinkClickHandler = async () => {
    event.preventDefault();
    const url = urlValidator(document.getElementById("longUrlInput").value);
    try {
      if (url) {
        setUrlKey(undefined);
        const res = await fetch(`${import.meta.env.VITE_API_URL}api/url`, {
          method: "post",
          mode: "cors",
          body: JSON.stringify({ url: url }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setValidUrl(true);
        setUrlKey(json.key);
        setReRender(!reRender);
      } else {
        setUrlKey(undefined);
        setValidUrl(false);
      }
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
    }
  };

  return (
    <>
      <div className="main">
        <div className={`${styles.urlZipperBox} infoBox`}>
          <form id="urlForm" className={styles.urlForm}>
            <h1>Paste the URL to be zipped below</h1>
            <div className={styles.controls}>
              <input
                type="text"
                id="longUrlInput"
                name="url"
                className={`${styles.urlInput} textInput`}
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
            <div className={styles.zippedLink}>
              <span>
                {"Zipped Link: "}
                <a
                  href={`${window.location.origin}/${urlKey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >{`${window.location.host}/${urlKey}`}</a>
              </span>
              <CopyToClipboard
                textToCopy={`${window.location.host}/${urlKey}`}
              />
            </div>
          ) : null}
          <p>
            ZipLink is a free tool to shorten URLs and generate short links that
            are easy to share online
          </p>
        </div>
        {user ? (
          <ZipLinkDisplay
            title={"Your most popular ZipLinks"}
            limit={3}
            isHomePage={true}
            reRender={reRender}
          />
        ) : (
          <div className={`${styles.infoBox} infoBox`}>
            <h2>Want more features? Create a free account!</h2>
            <p>
              Create custom ZipLinks, view analytics and manage your ZipLinks
            </p>
            <a className={styles.btnLink} href="/signup">
              Create Account
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
