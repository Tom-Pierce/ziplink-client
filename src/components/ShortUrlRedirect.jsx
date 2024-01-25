import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ShortUrlRedirect.module.css";
import InvalidKey from "./InvalidKey";

const ShortUrlRedirect = () => {
  const { key } = useParams();
  const [url, setUrl] = useState(null);
  const [validKey, setValidKey] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/${key}`, {
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
        setUrl(tempUrl.url);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (url) window.location.replace(url);
  }, [url]);
  return (
    <>
      {url ? (
        validKey ? (
          <p></p>
        ) : (
          <div className={styles.wrapper}>
            {" "}
            <div className={styles.loader}></div>
          </div>
        )
      ) : (
        <InvalidKey />
      )}
    </>
  );
};

export default ShortUrlRedirect;
