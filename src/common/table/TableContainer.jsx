import PropTypes from "prop-types";
import "../../styles/tableContainer.css";

const TableContainer = ({ children }) => {
  return (
    <div className="table_container">
      <div className="table_content">{children}</div>
    </div>
  );
};

TableContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableContainer;
