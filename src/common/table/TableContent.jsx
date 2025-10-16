import React from "react";
import PropTypes from "prop-types";
import "../../styles/table/tableContent.css";

const TableContent = ({ data, columns, renderCell }) => {
  // Default cell renderer
  const defaultRenderCell = (item, column) => {
    const value = item[column.key];
    if (!value) return "-";
    return value;
  };

  return (
    <div className="table-content">
      {data.map((item, rowIndex) => (
        <div key={item.id || rowIndex} className="table-row">
          <div
            className="table-row-grid"
            style={{
              gridTemplateColumns: columns
                .map((col) => col.width || "1fr")
                .join(" "),
            }}
          >
            {columns.map((column, colIndex) => (
              <div
                key={column.key}
                className={`table-cell ${
                  column.isAction ? "table-cell-action" : ""
                } ${
                  rowIndex === data.length - 1 ? "table-cell-last-row" : ""
                } ${
                  colIndex === columns.length - 1 ? "table-cell-last-col" : ""
                }`}
                style={{
                  justifyContent:
                    column.align === "left"
                      ? "flex-start"
                      : column.align === "right"
                      ? "flex-end"
                      : "center",
                }}
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
  );
};

TableContent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      width: PropTypes.string,
      align: PropTypes.oneOf(["left", "center", "right"]),
      isAction: PropTypes.bool,
    })
  ).isRequired,
  renderCell: PropTypes.func,
};

export default TableContent;
