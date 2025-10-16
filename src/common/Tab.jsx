import "../styles/tab.css";
import PropTypes from "prop-types";

function Tab({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tab_wrapper">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${
            activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
          }`}
          onClick={() => setActiveTab && setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func,
};

export default Tab;
