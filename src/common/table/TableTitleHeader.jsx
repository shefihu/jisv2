import "../../styles/table/tableTitleHeader.css";

function TableTitleHeader({ title }) {
  return (
    <div className="table-title-wrapper">
      <p className="table-title-text">{title}</p>
    </div>
  );
}

export default TableTitleHeader;
