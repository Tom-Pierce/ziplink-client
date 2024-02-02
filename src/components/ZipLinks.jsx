import { useEffect, useState } from "react";
import ZipLinkDisplay from "./ZipLinkDisplay";
import fetchUserZipLinks from "../utils/fetchUserZipLinks";

const ZipLinks = () => {
  const [userZipLinks, setUserZipLinks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const zipLinks = await fetchUserZipLinks(1, 10);
      if (zipLinks) {
        setUserZipLinks(zipLinks);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        {userZipLinks ? (
          <ZipLinkDisplay
            zipLinks={userZipLinks}
            setZipLinks={setUserZipLinks}
            title={"View all of your ZipLinks"}
          />
        ) : null}
      </div>
    </>
  );
};

export default ZipLinks;
