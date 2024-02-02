import { useEffect, useState } from "react";
import ZipLinkDisplay from "./ZipLinkDisplay";
import fetchUserZipLinks from "../utils/fetchUserZipLinks";

const ZipLinks = () => {
  const [userZipLinks, setUserZipLinks] = useState();
  const [page, setPage] = useState(1);
  const [zipLinkCount, setZipLinkCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { zipLinks, count } = await fetchUserZipLinks(page, 10);
      if (zipLinks && count) {
        setZipLinkCount(count);
        setUserZipLinks(zipLinks);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="main">
        {userZipLinks ? (
          <ZipLinkDisplay
            zipLinks={userZipLinks}
            setZipLinks={setUserZipLinks}
            title={"View all of your ZipLinks"}
            count={zipLinkCount}
            setPage={setPage}
            page={page}
          />
        ) : null}
      </div>
    </>
  );
};

export default ZipLinks;
