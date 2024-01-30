import { useEffect, useState } from "react";
import styles from "../css/ViewClicks.module.css";
import urlValidator from "../utils/urlValidator";
import { useParams } from "react-router-dom";

const ViewClicks = () => {
  const [validKey, setValidKey] = useState(true);
  const [clicks, setClicks] = useState(null);
  const { paramKey } = useParams();

  useEffect(() => {
    if (paramKey !== undefined) fetchData(paramKey);
  }, []);

  const clickHandler = async () => {
    setValidKey(true);
    setClicks(null);
    event.preventDefault();
    const zipLink = urlValidator(document.getElementById("zipLinkInput").value);
    if (!zipLink) return setValidKey(false);
    const key = zipLink.substring(zipLink.lastIndexOf("/") + 1);
    fetchData(key);
  };

  const fetchData = async (key) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}api/clicks/${key}`,
      {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 404) setValidKey(false);
    const json = await res.json();
    setClicks(json.clicks);
  };

  return (
    <>
      <div className="main">
        <div className={styles.clickCounterBox}>
          <form id="urlForm" className={styles.urlForm}>
            <h1>Paste the ZipLink to track how many clicks it received</h1>
            <div className={styles.controls}>
              <input
                type="text"
                id="zipLinkInput"
                name="url"
                className={styles.urlInput}
                placeholder="Enter ZipLink here"
                defaultValue={
                  paramKey ? `${window.location.host}/${paramKey}` : ""
                }
              />
              <button
                className={styles.btn}
                type="submit"
                onClick={clickHandler}
              >
                Zip Link
              </button>
            </div>
          </form>
          {clicks !== null ? (
            <p>This ZipLink has been clicked {clicks} times</p>
          ) : null}
          {validKey ? null : (
            <p className={styles.errorMessage}>
              ZipLink is invalid or has expired
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewClicks;
