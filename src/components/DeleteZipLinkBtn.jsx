import PropTypes from "prop-types";
import DeleteSVG from "../assets/delete.svg";
import styles from "../css/DeleteZipLinkBtn.module.css";

const DeleteZipLinkBtn = ({
  urlKey,
  removeZipLink,
  fetchData,
  page,
  setPage,
  zipLinkCount,
}) => {
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
        // mvoes the page back if all the ziplinks on current page are deleted
        if ((page - 1) * 10 === zipLinkCount - 1) {
          setPage(page - 1);
        }
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
  page: PropTypes.number,
  setPage: PropTypes.func,
  zipLinkCount: PropTypes.number,
};

export default DeleteZipLinkBtn;
