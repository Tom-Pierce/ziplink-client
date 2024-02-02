import styles from "../css/ZipLinkDisplay.module.css";
import PropTypes from "prop-types";
import DeleteZipLinkBtn from "./DeleteZipLinkBtn";
import chevronLeft from "../assets/chevronLeft.svg";
import chevronRight from "../assets/chevronRight.svg";
import { useEffect, useState } from "react";
import fetchUserZipLinks from "../utils/fetchUserZipLinks";

const ZipLinkDisplay = ({ title, limit, isHomePage, reRender }) => {
  const [zipLinks, setZipLinks] = useState([]);
  const [zipLinkCount, setZipLinkCount] = useState();
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const { zipLinks, count } = await fetchUserZipLinks(page, limit);
    if (zipLinks !== undefined && count) {
      setZipLinkCount(count);
      setZipLinks(zipLinks);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, reRender]);

  const removeZipLink = (key) => {
    const updatedZiplinks = zipLinks.filter((ziplink) => ziplink.key !== key);
    setZipLinks(updatedZiplinks);
  };

  return (
    <div className={styles.zipLinkDisplayBox}>
      {zipLinks ? (
        <>
          <h1>{title}</h1>
          {zipLinks.length === 0 ? (
            <p>You have not created any ZipLinks yet...</p>
          ) : (
            <>
              <div className={styles.zipLinkInfoBar}>
                <span>ZipLink</span>
                <span>Redirect</span>
                <span>Clicks</span>
              </div>
              {zipLinks.map((zipLink) => {
                return (
                  <div key={zipLink.key} className={styles.zipLinkInfoBar}>
                    <a
                      className={styles.link}
                      key={zipLink.key}
                      href={`${window.location.origin}/${zipLink.key}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >{`${window.location.host}/${zipLink.key}`}</a>{" "}
                    <a
                      className={styles.link}
                      key={`${zipLink.key}_redirect`}
                      href={zipLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {zipLink.url.split("//")[1]}
                    </a>
                    <span>{zipLink.visits.toLocaleString()}</span>
                    <DeleteZipLinkBtn
                      removeZipLink={removeZipLink}
                      urlKey={zipLink.key}
                      fetchData={fetchData}
                    />
                  </div>
                );
              })}

              {isHomePage ? null : (
                <>
                  {/* controls for moving through pages of ziplinks, only render if count is sent */}
                  {zipLinkCount !== undefined ? (
                    <div className={styles.zipLinkPageControls}>
                      <button
                        onClick={() => {
                          if (page > 1) setPage(page - 1);
                        }}
                      >
                        <img src={chevronLeft} alt="arrow left" />
                      </button>
                      {zipLinks.length + (page - 1) * 10}/{zipLinkCount}
                      <button
                        onClick={() => {
                          if (page < Math.ceil(zipLinkCount / 10)) {
                            setPage(page + 1);
                          }
                        }}
                      >
                        <img src={chevronRight} alt="arrow right" />
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

ZipLinkDisplay.propTypes = {
  title: PropTypes.string,
  limit: PropTypes.number,
  isHomePage: PropTypes.bool,
  reRender: PropTypes.bool,
};

export default ZipLinkDisplay;
