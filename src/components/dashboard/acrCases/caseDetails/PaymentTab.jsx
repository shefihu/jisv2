import SecondaryTableContent from "../../../../common/table/SecondaryTableContent";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";

function PaymentTab() {
  const paymentTableData = [
    {
      id: 1,
      feeType: "Case Filing Fee",
      amount: "N5,000",
      date: "28 September, 2025",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      feeType: "Case Filing Fee",
      amount: "N5,000",
      date: "28 September, 2025",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      feeType: "Case Filing Fee",
      amount: "N5,000",
      date: "28 September, 2025",
      paymentStatus: "Paid",
    },
  ];

  const paymentTableColumns = [
    {
      key: "feeType",
      header: "Fee Type",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "amount",
      header: "Amount",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "date",
      header: "Date",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "paymentStatus",
      header: "Payment Status",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
    {
      key: "receipt",
      header: "Receipt",
      width: "1fr",
      headerAlign: "center",
      cellAlign: "center",
    },
  ];

  const renderCell = (item, column) => {
    if (column.key === "receipt") {
      return (
        <a href="#" className="preview-link">
          Preview/Download
        </a>
      );
    }
    return item[column.key];
  };

  return (
    <div className="table_section">
      <TableTitleHeader title="Payment" isRoundedBorder={true} />
      <div className="secondary_table_wrapper">
        <div className="secondary_table_content">
          <SecondaryTableContent
            data={paymentTableData}
            columns={paymentTableColumns}
            renderCell={renderCell}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentTab;