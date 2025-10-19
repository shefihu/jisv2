import { Link, useLocation } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";
import "../styles/sidebar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SidebarLink = ({
  to,
  icon,
  name,
  toggleSidebar,
  isSubItem = false,
  dropdownOptions = [],
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const location = useLocation();
  const isActive = (() => {
    // For dashboard root, only match when pathname is exactly "/dashboard"
    if (to === RoutePaths.DASHBOARD) {
      return location.pathname === RoutePaths.DASHBOARD;
    }

    if (dropdownOptions.length > 0) {
      return dropdownOptions.some((option) =>
        location.pathname.startsWith(option.path)
      );
    }

    return location.pathname.startsWith(to);
  })();

  const toggleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <li>
      {dropdownOptions.length === 0 ? (
        <Link
          to={to}
          onClick={toggleSidebar}
          className={`sidebar_link ${isActive ? "active" : ""}`}
        >
          {icon && (
            <span
              className={`
             sidebar_link_icon  ${isActive ? "active" : ""} 
              `}
            >
              {icon}
            </span>
          )}
          <p className={isSubItem ? "sub_item_text" : ""}>{name}</p>
        </Link>
      ) : (
        <div
          onClick={toggleDropDown}
          className={`sidebar_link sub_menu_item ${isActive ? "active" : ""} `}
        >
          <div className="sidebar_link_content">
            {icon && (
              <span
                className={`
             sidebar_link_icon  ${isActive ? "active" : ""} 
              `}
              >
                {icon}
              </span>
            )}
            <p className={isSubItem ? "sub_item_text" : ""}>{name}</p>
          </div>

          <ChevronDown size={20} color="#737373" />
        </div>
      )}

      {dropdownOptions.length > 0 && openDropdown && (
        <ul className="dropdown_menu">
          {dropdownOptions.map((option, index) => (
            <li key={index}>
              <Link
                to={option.path}
                onClick={toggleSidebar}
                className={`dropdown_option ${
                  location.pathname.startsWith(option.path) ? "active" : ""
                }`}
              >
                <p className="sub_item_text">{option.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isSubItem: PropTypes.bool,
  dropdownOptions: PropTypes.array,
};

export default SidebarLink;
