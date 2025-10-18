import "../styles/sidebar.css";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.webp";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";
import { judgesSidebarRoutes, sidebarRoutes } from "./SidebarItems";
import { HelpIcon, LogoutIcon } from "../assets/Svg";
import SidebarLink from "./SidebarLink";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, profile }) => {
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (routeName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [routeName]: !prev[routeName],
    }));
  };
  //TODO: fix the sub route to fit the many route
  const getDropdownOptions = (routeName) => {
    switch (routeName) {
      case "Case management":
        return [
          { name: "Active Cases", path: RoutePaths.FIAT },
          { name: "Pending Cases", path: RoutePaths.FIAT },
          { name: "Completed Cases", path: RoutePaths.FIAT },
          { name: "Case Analytics", path: RoutePaths.FIAT },
        ];
      case "ADR Cases":
        return [
          { name: "Mediation", path: RoutePaths.FIAT },
          { name: "Arbitration", path: RoutePaths.FIAT },
          { name: "Conciliation", path: RoutePaths.FIAT },
          { name: "Settlement", path: RoutePaths.FIAT },
        ];
      case "NJC Report":
        return [
          { name: "Monthly Reports", path: RoutePaths.FIAT },
          { name: "Annual Reports", path: RoutePaths.FIAT },
          { name: "Performance Reports", path: RoutePaths.FIAT },
          { name: "Statistical Reports", path: RoutePaths.FIAT },
        ];
      default:
        return [
          { name: "Option 1", path: RoutePaths.FIAT },
          { name: "Option 2", path: RoutePaths.FIAT },
          { name: "Option 3", path: RoutePaths.FIAT },
        ];
    }
  };

  const handleLogout = () => {
    navigate(RoutePaths.ROOT);
  };

  const renderRoutePath = () => {
    switch (profile.toLowerCase()) {
      case "judges".toLowerCase():
        return (
          <ul>
            {judgesSidebarRoutes.slice(0, 6).map((route, index) => (
              <SidebarLink
                key={`${route.name}-${index}`}
                icon={route.icon}
                name={route.name}
                to={route.path}
                toggleSidebar={toggleSidebar}
              />
            ))}
            {judgesSidebarRoutes.slice(6).map((route, index) => {
              const isDropdownOpen = openDropdowns[route.name];
              const dropdownOptions = getDropdownOptions(route.name);

              return (
                <li
                  key={`${route.name}-${index}`}
                  className="sidebar_dropdown_wrapper"
                >
                  <div
                    onClick={() => toggleDropdown(route.name)}
                    className="sidebar_dropdown_content_wrapper"
                  >
                    <div>
                      <span className={`sidebar_link_icon`}>{route.icon}</span>
                      <p>{route.name}</p>
                    </div>
                    <ChevronDown
                      className={`sidebar_dropdown_wrapper_icon ${
                        isDropdownOpen ? "rotated" : ""
                      }`}
                      size={20}
                    />
                  </div>

                  <div
                    className={`sidebar_dropdown_content ${
                      isDropdownOpen ? "open" : ""
                    }`}
                  >
                    <ul>
                      {dropdownOptions.map((option, optIndex) => (
                        <li key={optIndex}>
                          <SidebarLink
                            name={option.name}
                            to={option.path}
                            toggleSidebar={toggleSidebar}
                            isSubItem={true}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        );

      default:
        return (
          <ul>
            {sidebarRoutes.map((route, index) => (
              <SidebarLink
                key={`${route.name}-${index}`}
                icon={route.icon}
                name={route.name}
                to={route.path}
                toggleSidebar={toggleSidebar}
              />
            ))}
          </ul>
        );
    }
  };

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

          <nav className="sidebar_menu">{renderRoutePath()}</nav>
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
  profile: PropTypes.string.isRequired,
};

export default Sidebar;
