import PropTypes from "prop-types";
import MetricCard from "./MetricCard";
import "../../../styles/dashboard/home/metricsCardContainer.css";

const MetricsCardContainer = ({ metrics }) => {
  return (
    <div className="metrics_card_container">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          icon={metric.icon}
          title={metric.title}
          value={metric.value}
          type={metric.type}
        />
      ))}
    </div>
  );
};

MetricsCardContainer.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      type: PropTypes.string,
    })
  ).isRequired,
};

export default MetricsCardContainer;
