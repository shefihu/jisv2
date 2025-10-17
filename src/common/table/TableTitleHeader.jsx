import PropTypes from "prop-types";
import "../../styles/table/tableTitleHeader.css";

function TableTitleHeader({ title, isRoundedBorder }) {
  return (
    <div className={`table-title-wrapper ${isRoundedBorder ? "rounded" : ""}`}>
      <p className="table-title-text">{title}</p>
    </div>
  );
}
TableTitleHeader.propsType = {
  title: PropTypes.string.isRequired,
  isRoundedBorder: PropTypes.bool,
};
export default TableTitleHeader;
