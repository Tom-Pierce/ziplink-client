import styles from "../css/ZipLinkDisplay.module.css";
import PropTypes from "prop-types";

const ZipLinkDisplay = ({ zipLinks, title }) => {
  return (
    <div className={styles.zipLinkDisplayBox}>
      <h2>{title}</h2>
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
            </a>{" "}
            <span>{zipLink.visits}</span>
          </div>
        );
      })}
    </div>
  );
};

ZipLinkDisplay.propTypes = {
  zipLinks: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default ZipLinkDisplay;
