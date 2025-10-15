import "../../../styles/dashboard/home/metricCard.css";
import PropTypes from "prop-types";

const MetricCard = ({ icon: Icon, title, value, type = "normal" }) => {
  const valueClass = type === "urgent" ? "metric_value urgent" : "metric_value";

  return (
    <div className="metric_container ">
      <div className="icon_container">{Icon}</div>
      <p className="metric_title">{title}</p>
      <p className={valueClass}>{value}</p>
    </div>
  );
};

MetricCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(["normal", "urgent"]),
};

export default MetricCard;
