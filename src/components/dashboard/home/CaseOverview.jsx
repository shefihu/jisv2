import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";
import "../../../styles/dashboard/home/caseOverview.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const CaseOverview = ({
  title = "Case Overview",
  data,
  cutout = "60%",
  hoverOffset = 10,
  containerId = "legend-container",
  defaultSelected,
  onToggleChange,
  toggleOptions,
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 0,
        cutout,
        hoverOffset,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      htmlLegend: { containerID: containerId },
    },
    maintainAspectRatio: false,
  };

  const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart, _, options) {
      const ul = getOrCreateLegendList(chart, options.containerID);

      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      data.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "legend_item";

        const colorBox = document.createElement("span");
        colorBox.className = "legend_color";
        colorBox.style.backgroundColor = item.color;

        const label = document.createElement("span");
        label.className = "legend_label";
        label.textContent = item.label;

        li.addEventListener("click", () => {
          chart.setActiveElements([{ datasetIndex: 0, index: index }]);
          chart.update();
        });

        li.appendChild(colorBox);
        li.appendChild(label);
        ul.appendChild(li);
      });
    },
  };

  const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer?.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.className = "custom_legend";
      legendContainer.appendChild(listContainer);
    }

    return listContainer;
  };

  const handleSelect = (value) => {
    setSelected(value);
    if (onToggleChange) onToggleChange(value);
  };

  return (
    <div className="case_overview">
      <h3 className="case_title">{title}</h3>
      <div className="chart_section">
        <div className="chart_container">
          <Doughnut
            data={chartData}
            options={options}
            plugins={[htmlLegendPlugin]}
          />
        </div>

        <div>
          {/* toggle buttons */}
          <div className="status_toggle">
            {toggleOptions.map((option) => (
              <div
                key={option.value}
                className={`status_option ${
                  selected === option.value ? "active" : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                <div className="radio_dot"></div>
                <p className="text_label">{option.label}</p>
              </div>
            ))}
          </div>

          {/* legends */}
          <div id={containerId}></div>
        </div>
      </div>
    </div>
  );
};

CaseOverview.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  cutout: PropTypes.string,
  hoverOffset: PropTypes.number,
  containerId: PropTypes.string,
  toggleOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  defaultSelected: PropTypes.string,
  onToggleChange: PropTypes.func,
};

export default CaseOverview;
