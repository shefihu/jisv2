import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";

function PartiesTab() {
  const partiesTableData = [
    {
      id: 1,
      name: "Bello Bashir",
      partyType: "Claimant",
      legalCounsel: "Awwal Bello ESQ",
      phone: "08065262763",
      email: "Johnjoe@gmail.com",
    },
    {
      id: 2,
      name: "Salman Lukman",
      partyType: "Defendant",
      legalCounsel: "",
      phone: "08065262763",
      email: "Johnjoe@gmail.com",
    },
  ];

  const partiesTableColumns = [
    {
      key: "name",
      header: "Name",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "partyType",
      header: "Party Type",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "legalCounsel",
      header: "Legal Counsel",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "phone",
      header: "Phone",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "email",
      header: "Email",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
  ];

  const renderCell = (item, column) => {
    const value = item[column.key];
    if (!value || value === "") return "-";
    return value;
  };

  return (
    <div className="table_section">
      <TableTitleHeader title="Parties" isRoundedBorder={true} />
      <div className="secondary_table_wrapper">
        <div className="secondary_table_content">
          <SecondaryTableContent
            data={partiesTableData}
            columns={partiesTableColumns}
            renderCell={renderCell}
          />
        </div>
      </div>
    </div>
  );
}

export default PartiesTab;