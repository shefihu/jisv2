import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";

function DocumentTab() {
  const documentTableData = [
    {
      id: 1,
      documentName: "Writ of Summon",
    },
    {
      id: 2,
      documentName: "Statement of Claim",
    },
    {
      id: 3,
      documentName: "List of Document to rely on",
    },
    {
      id: 4,
      documentName: "Pre-action Protocol Form",
    },
    {
      id: 5,
      documentName: "List of Witnesses to be called upon",
    },
  ];
  const documentTableColumns = [
    {
      key: "documentName",
      header: "Document Name",
      width: "2fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "action",
      header: "Action",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
  ];

  const renderCell = (item, column) => {
    if (column.key === "action") {
      return (
        <a href="#" className="preview-link">
          Preview
        </a>
      );
    }
    return item[column.key];
  };
  return (
    <div className="table_section">
      <TableTitleHeader title="Document Uploaded" isRoundedBorder={true} />
      <div className="secondary_table_wrapper">
        <div className="secondary_table_content">
          <SecondaryTableContent
            data={documentTableData}
            columns={documentTableColumns}
            renderCell={renderCell}
          />
        </div>
      </div>
    </div>
  );
}

export default DocumentTab;
