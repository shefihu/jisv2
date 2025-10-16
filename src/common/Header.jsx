import "../styles/header.css";
import PropTypes from "prop-types";
import profilePic from "../assets/images/avatar.webp";
import { BellIcon } from "../assets/Svg";

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <header className="header">
      <button
        className="hamburger_btn"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className="user_info">
        <p className="user_name">Mr Awwal M. Bello</p>
        <p className="user_role">Legal Counsel</p>
      </div>

      <div className="header_right">
        <div className="notification_icon">
          <BellIcon />
        </div>
        <div className="user_avatar">
          <img src={profilePic} alt="User avatar" />
          <span className="status_dot" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
