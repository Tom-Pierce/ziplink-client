import { Link } from "react-router-dom";
import styles from "../css/ProfileDropdown.module.css";
import logout from "../utils/logout";
import { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";

const ProfileDropdown = forwardRef(function ProfileDropdown(
  { active, setDropdownOpen, profilePictureRef },
  ref
) {
  useEffect(() => {
    const clickHandler = (e) => {
      if (
        !ref.current.contains(e.target) &&
        !profilePictureRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.dropdown} ${active ? null : styles.inactive}`}
    >
      <ul>
        <li className={styles.dropdownOption}>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </li>
        <li className={styles.dropdownOption}>
          <Link to="/custom">Custom ZipLink</Link>
        </li>
      </ul>
    </div>
  );
});

ProfileDropdown.propTypes = {
  active: PropTypes.bool.isRequired,
  setDropdownOpen: PropTypes.func.isRequired,
  profilePictureRef: PropTypes.object.isRequired,
};

export default ProfileDropdown;
