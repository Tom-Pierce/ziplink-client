import styles from "../css/ZipLinkDisplay.module.css";
import PropTypes from "prop-types";
import DeleteZipLinkBtn from "./DeleteZipLinkBtn";

const ZipLinkDisplay = ({ zipLinks, setZipLinks, title }) => {
  const removeZipLink = (key) => {
    const updatedZiplinks = zipLinks.filter((ziplink) => ziplink.key !== key);
    console.log({ updatedZiplinks });
    setZipLinks(updatedZiplinks);
  };

  return (
    <div className={styles.zipLinkDisplayBox}>
      <h1>{title}</h1>
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
    </div>
  );
};

ZipLinkDisplay.propTypes = {
  zipLinks: PropTypes.arrayOf(PropTypes.object),
  setZipLinks: PropTypes.func,
  title: PropTypes.string,
};

export default ZipLinkDisplay;
