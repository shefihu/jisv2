import "../../styles/table/tableHeader.css";

import PropTypes from "prop-types";

const TableHeader = ({ columns }) => {
  return (
    <div className="table-header-wrapper">
      <div
        className="table-header-grid"
        style={{
          gridTemplateColumns: columns
            .map((col) => col.width || "1fr")
            .join(" "),
        }}
      >
        {columns.map((column, index) => (
          <div
            key={column.key}
            className={`table-header-cell ${
              column.isAction ? "table-header-cell-action" : ""
            } ${index === columns.length - 1 ? "table-header-cell-last" : ""}`}
            style={{
              justifyContent:
                column.align === "left"
                  ? "flex-start"
                  : column.align === "right"
                  ? "flex-end"
                  : "center",
            }}
          >
            {column.header}
          </div>
        ))}
      </div>
    </div>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      width: PropTypes.string,
      align: PropTypes.oneOf(["left", "center", "right"]),
      isAction: PropTypes.bool,
    })
  ).isRequired,
};

export default TableHeader;
