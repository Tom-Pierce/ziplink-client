import { useContext, useRef, useState } from "react";
import { UserContext } from "../App";
import styles from "../css/NavBarProfile.module.css";
import ProfileDropdown from "./ProfileDropdown";
import DefaultPfp from "../assets/default-pfp.png";

const NavBarProfile = () => {
  const { user } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profilePictureRef = useRef(null);

  return (
    <div className={styles.profile}>
      <img
        className={styles.profilePicture}
        src={user.pfp ? user.pfp : DefaultPfp}
        alt="user profile picture"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        ref={profilePictureRef}
        onError={(e) => {
          e.target.src = DefaultPfp;
        }}
        referrerPolicy="no-referrer"
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
