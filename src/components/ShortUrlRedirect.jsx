import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvalidKey from "./InvalidKey";
import Loader from "./Loader";

const ShortUrlRedirect = () => {
  const [url, setUrl] = useState(null);
  const { key } = useParams();
  const [validKey, setValidKey] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [key]);

  useEffect(() => {
    if (url) window.location.replace(url);
  }, [url]);
  return <>{validKey === false ? <InvalidKey /> : <Loader />}</>;
};

export default ShortUrlRedirect;
