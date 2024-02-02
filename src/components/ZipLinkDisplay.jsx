import styles from "../css/ZipLinkDisplay.module.css";
import PropTypes from "prop-types";
import DeleteZipLinkBtn from "./DeleteZipLinkBtn";
import chevronLeft from "../assets/chevronLeft.svg";
import chevronRight from "../assets/chevronRight.svg";

const ZipLinkDisplay = ({
  zipLinks,
  setZipLinks,
  title,
  count,
  page,
  setPage,
}) => {
  const removeZipLink = (key) => {
    const updatedZiplinks = zipLinks.filter((ziplink) => ziplink.key !== key);
    console.log({ updatedZiplinks });
    setZipLinks(updatedZiplinks);
  };

  return (
    <div className={styles.zipLinkDisplayBox}>
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
                />
              </div>
            );
          })}

          {/* controls for moving through pages of ziplinks, only render if count is sent */}
          {count !== undefined ? (
            <div className={styles.zipLinkPageControls}>
              {console.log({ page, count })}
              <button
                onClick={() => {
                  if (page > 1) setPage(page - 1);
                }}
              >
                <img src={chevronLeft} alt="arrow left" />
              </button>
              {zipLinks.length + (page - 1) * 10}/{count}
              <button
                onClick={() => {
                  if (page < Math.ceil(count / 10)) setPage(page + 1);
                }}
              >
                <img src={chevronRight} alt="arrow right" />
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

ZipLinkDisplay.propTypes = {
  zipLinks: PropTypes.arrayOf(PropTypes.object),
  setZipLinks: PropTypes.func,
  title: PropTypes.string,
  count: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default ZipLinkDisplay;
