import React from "react";
import PropTypes from "prop-types";
import "../../styles/table/secondaryTableContent.css";

function SecondaryTableContent({ data, columns, renderCell }) {
  // Default cell renderer
  const defaultRenderCell = (item, column) => {
    const value = item[column.key];
    if (!value) return "-";
    return value;
  };

  return (
    <div className="secondary-table-wrapper">
      {/* Table Header */}
      <div className="secondary-table-header">
        <div
          className="secondary-table-header-grid"
          style={{
            gridTemplateColumns: columns
              .map((col) => col.width || "1fr")
              .join(" "),
          }}
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className={`secondary-table-header-cell ${
                column.headerAlign ? `align-${column.headerAlign}` : ""
              }`}
            >
              {column.header}
            </div>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className="secondary-table-content">
        {data.map((item, rowIndex) => (
          <div key={item.id || rowIndex} className="secondary-table-row">
            <div
              className="secondary-table-row-grid"
              style={{
                gridTemplateColumns: columns
                  .map((col) => col.width || "1fr")
                  .join(" "),
              }}
            >
              {columns.map((column) => (
                <div
                  key={column.key}
                  className={`secondary-table-cell ${
                    column.cellAlign ? `cell-align-${column.cellAlign}` : ""
                  }`}
                >
                  {renderCell
                    ? renderCell(item, column)
                    : defaultRenderCell(item, column)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

SecondaryTableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      width: PropTypes.string,
      headerAlign: PropTypes.oneOf(["left", "center", "right"]),
      cellAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
    })
  ).isRequired,
  renderCell: PropTypes.func,
};

export default SecondaryTableContent;
