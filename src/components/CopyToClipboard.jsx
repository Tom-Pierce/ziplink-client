import PropTypes from "prop-types";
import styles from "../css/CopyToClipboard.module.css";
import { useState } from "react";
import CopyToClipboardSVG from "../assets/copyToClipboard.svg";
import CopiedToClipboardSVG from "../assets/copiedToClipboard.svg";

const CopyToClipboard = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      className={styles.copyToClipboard}
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
      }}
    >
      {copied ? (
        <img src={CopiedToClipboardSVG} alt="copied to clipboard" />
      ) : (
        <img src={CopyToClipboardSVG} alt="copy to clipboard" />
      )}
    </button>
  );
};

CopyToClipboard.propTypes = {
  textToCopy: PropTypes.string,
};

export default CopyToClipboard;
