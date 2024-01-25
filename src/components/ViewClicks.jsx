import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvalidKey from "./InvalidKey";
import styles from "../css/ViewClicks.module.css";

const ViewClicks = () => {
  const { key } = useParams();
  const [validKey, setValidKey] = useState(true);
  const [clicksCount, setClicksCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/clicks/${key}`, {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 404) {
        setValidKey(false);
      } else {
        const json = await res.json();
        setClicksCount(json.clicks);
      }
    };
    fetchData();
  });
  return (
    <>
      {validKey ? (
        <div className={styles.main}>
          <a
            className={styles.block}
            href={`${window.location.origin}/${key}`}
            target="_blank"
            rel="noopener noreferrer"
          >{`${window.location.host}/${key}`}</a>
          <p>
            &nbsp;has been visited <span>{clicksCount}</span> times
          </p>
        </div>
      ) : (
        <InvalidKey />
      )}
    </>
  );
};
export default ViewClicks;
