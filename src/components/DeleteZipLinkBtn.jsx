import PropTypes from "prop-types";
import DeleteSVG from "../assets/delete.svg";
import styles from "../css/DeleteZipLinkBtn.module.css";

const DeleteZipLinkBtn = ({ urlKey, removeZipLink, fetchData }) => {
  const deleteHandler = async (key) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}api/${key}`, {
        method: "delete",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 204) {
        removeZipLink(key);
        fetchData();
      }
    } catch (error) {
      console.log("Server error: ", error);
    }
  };

  return (
    <button
      className={styles.deleteZipLinkBtn}
      onClick={() => {
        deleteHandler(urlKey);
      }}
    >
      <img src={DeleteSVG} alt="delete" />
    </button>
  );
};

DeleteZipLinkBtn.propTypes = {
  urlKey: PropTypes.string,
  removeZipLink: PropTypes.func,
  fetchData: PropTypes.func,
};

export default DeleteZipLinkBtn;
