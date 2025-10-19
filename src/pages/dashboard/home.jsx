import { CURRENT_USER_ROLE, USER_ROLES } from "../../config/roleConfig";
import "../../styles/dashboard/home/index.css";
import ChiefJudgeDashboard from "./profiles/chiefJudge/chiefJudgeDashboard";
import JudgeDashboard from "./profiles/judges/judgesDashboard";

// Clerk Dashboard Component
const ClerkDashboard = () => (
  <div className="dashboard-container">
    <h1>Clerk Dashboard</h1>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>New Filings Today</h3>
        <p>15</p>
      </div>
      <div className="stat-card">
        <h3>Pending Documents</h3>
        <p>32</p>
      </div>
      <div className="stat-card">
        <h3>Court Sessions</h3>
        <p>5</p>
      </div>
    </div>
  </div>
);

// Registrar Dashboard Component
const RegistrarDashboard = () => (
  <div className="dashboard-container">
    <h1>Registrar Dashboard</h1>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total Cases</h3>
        <p>156</p>
      </div>
      <div className="stat-card">
        <h3>Pending Approvals</h3>
        <p>23</p>
      </div>
      <div className="stat-card">
        <h3>Court Schedules</h3>
        <p>18</p>
      </div>
    </div>
  </div>
);

// Lawyer Dashboard Component
const LawyerDashboard = () => (
  <div className="dashboard-container">
    <h1>Lawyer Dashboard</h1>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>My Cases</h3>
        <p>12</p>
      </div>
      <div className="stat-card">
        <h3>Upcoming Hearings</h3>
        <p>5</p>
      </div>
      <div className="stat-card">
        <h3>Documents to File</h3>
        <p>7</p>
      </div>
    </div>
  </div>
);

// Admin Dashboard Component
const AdminDashboard = () => (
  <div className="dashboard-container">
    <h1>Admin Dashboard</h1>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total Users</h3>
        <p>342</p>
      </div>
      <div className="stat-card">
        <h3>System Logs</h3>
        <p>1,245</p>
      </div>
      <div className="stat-card">
        <h3>Active Sessions</h3>
        <p>87</p>
      </div>
    </div>
  </div>
);

// Public Dashboard Component
const PublicDashboard = () => (
  <div className="dashboard-container">
    <h1>Public Dashboard</h1>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Public Cases</h3>
        <p>89</p>
      </div>
      <div className="stat-card">
        <h3>Court Calendar</h3>
        <p>View Schedule</p>
      </div>
      <div className="stat-card">
        <h3>Case Search</h3>
        <p>Available</p>
      </div>
    </div>
  </div>
);

const Home = () => {
  const renderDashboardContent = () => {
    switch (CURRENT_USER_ROLE) {
      case USER_ROLES.JUDGE:
        return <JudgeDashboard />;
      case USER_ROLES.ACR:
        return <ClerkDashboard />;
      case USER_ROLES.CHIEF_JUDGE:
        return <ChiefJudgeDashboard />;
      case USER_ROLES.REGISTRAR:
        return <RegistrarDashboard />;
      case USER_ROLES.LAWYER:
        return <LawyerDashboard />;
      case USER_ROLES.ADMIN:
        return <AdminDashboard />;
      case USER_ROLES.PUBLIC:
        return <PublicDashboard />;
      default:
        return <PublicDashboard />;
    }
  };

  return renderDashboardContent();
};

export default Home;
