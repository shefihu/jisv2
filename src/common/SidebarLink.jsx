import { Link, useLocation } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";

const SidebarLink = ({ to, icon, name, toggleSidebar }) => {
  const location = useLocation();
  const isActive = (() => {
    // For dashboard root, only match when pathname is exactly "/dashboard"
    if (to === RoutePaths.DASHBOARD) {
      return location.pathname === RoutePaths.DASHBOARD;
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
        className={`sidebar_link ${isActive ? "active" : ""}`}
      >
        <span
          className={`
           sidebar_link_icon  ${isActive ? "active" : ""} 
            `}
        >
          {icon}
        </span>
        <p className="text-sm font-medium">{name}</p>
      </Link>
    </li>
  );
};

export default SidebarLink;
