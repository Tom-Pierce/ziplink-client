import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShortUrlRedirect = () => {
  const { key } = useParams();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/${key}`, {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const tempUrl = await res.json();
      setUrl(tempUrl.url);
      if (url) window.location.replace(url);
    };
    fetchData();
  });
  return <>{url ? <p></p> : <p>Redirecting...</p>}</>;
};

export default ShortUrlRedirect;
