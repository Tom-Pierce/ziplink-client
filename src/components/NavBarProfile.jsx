import { useContext, useRef, useState } from "react";
import { UserContext } from "../App";
import styles from "../css/NavBarProfile.module.css";
import ProfileDropdown from "./ProfileDropdown";

const NavBarProfile = () => {
  const { user } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profilePictureRef = useRef(null);

  return (
    <div className={styles.profile}>
      <img
        className={styles.profilePicture}
        src={user.pfp}
        alt="user profile picture"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        ref={profilePictureRef}
      />
      <ProfileDropdown
        active={dropdownOpen ? true : false}
        setDropdownOpen={setDropdownOpen}
        profilePictureRef={profilePictureRef}
        ref={dropdownRef}
      />
    </div>
  );
};

export default NavBarProfile;
