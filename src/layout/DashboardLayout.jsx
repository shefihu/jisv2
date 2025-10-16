import { useState } from "react";
import "../styles/dashboardLayout.css";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="right">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
