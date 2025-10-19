import "../styles/sidebar.css";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";
import { sidebarRoutesByRole } from "./SidebarItems";
import { HelpIcon, LogoutIcon } from "../assets/Svg";
import SidebarLink from "./SidebarLink";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { CURRENT_USER_ROLE } from "../config/roleConfig";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (routeName) => {
    setOpenDropdown(openDropdown === routeName ? null : routeName);
  };

  const handleLogout = () => {
    navigate(RoutePaths.ROOT);
  };

  // Get routes based on the manually set role
  const routes =
    sidebarRoutesByRole[CURRENT_USER_ROLE] || sidebarRoutesByRole.public;

  return (
    <>
      {isOpen && (
        <div
          className="sidebar_overlay"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <div className="sidebar_header">
            <div className="sidebar_logo">
              <img
                src={logo}
                alt="lagos state judiciary logo"
                className="logo_img"
              />
            </div>

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
          </div>

          <nav className="sidebar_menu">
            <ul>
              {routes.map((route, index) => {
                return (
                  <SidebarLink
                    key={`${route.name}-${index}`}
                    icon={route.icon}
                    name={route.name}
                    to={route.path}
                    toggleSidebar={toggleSidebar}
                    dropdownOptions={route.dropdownOptions || []}
                  />
                );
              })}
            </ul>
          </nav>
        </div>

        <div>
          <SidebarLink
            icon={<HelpIcon />}
            name={"Help"}
            to={RoutePaths.HELP}
            toggleSidebar={toggleSidebar}
          />

          <button className="logout_btn" onClick={handleLogout}>
            <LogoutIcon />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
