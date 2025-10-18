import { Link, useLocation } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";
import "../styles/sidebar.css";
import PropTypes from "prop-types";

const SidebarLink = ({ to, icon, name, toggleSidebar, isSubItem = false }) => {
  const location = useLocation();
  const isActive = (() => {
    // For dashboard root, only match when pathname is exactly "/dashboard"
    if (to === RoutePaths.DASHBOARD) {
      return location.pathname === RoutePaths.DASHBOARD;
    }

    if (to.includes("case-management")) {
      return location.pathname === RoutePaths.CASE_MANAGEMENT;
    }
    // For other routes, check if current path starts with the route path
    // This will make the sidebar item active for nested routes
    return location.pathname.startsWith(to);
  })();

  return (
    <li>
      <Link
        to={to}
        onClick={toggleSidebar}
        className={`sidebar_link ${isActive ? "active" : ""} ${
          isSubItem ? "sub_item" : ""
        }`}
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
    </li>
  );
};

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  name: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isSubItem: PropTypes.bool,
};

export default SidebarLink;
