import React, { useState } from "react";
import TableTitleHeader from "../common/table/TableTitleHeader";
import TableHeader from "../common/table/TableHeader";
import TableContent from "../common/table/TableContent";
import { Clock } from "lucide-react";
import { DangerIcon, TickCircleIcon } from "../assets/Svg";
import SecondaryTableContent from "../common/table/SecondaryTableContent";
import TablePagination from "../common/table/TablePagination";
import CaseOverview from "../components/dashboard/home/CaseOverview";
import MetricsCardContainer from "../components/dashboard/home/MetricsCardContainer";
import {
  caseCardData,
  caseCardStatusOptions,
  metricsData,
} from "../data/dashboard";
import TableContainer from "../common/table/TableContainer";

const mockData = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Case ${i + 1}`,
  status: i % 2 === 0 ? "Approved" : "Pending",
}));

const TestPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(8);

  const totalEntries = mockData.length;

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = mockData.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (num) => {
    setEntriesPerPage(num);
    setCurrentPage(1);
  };

  const getBackgroundColor = (filingType) => {
    switch (filingType.toLowerCase()) {
      case "criminal":
        return "#C30DDF";
      case "civil":
        return "#5CA9FB";
      default:
        return "#ffffff";
    }
  };

  const getSlaIcon = (slaStatus) => {
    switch (slaStatus.toLowerCase()) {
      case "overdue":
        return <Clock size={16} />;
      case "at-risk":
        return <DangerIcon />;
      case "on-track":
        return <TickCircleIcon />;
      default:
        return null;
    }
  };

  // Define columns
  const columns = [
    {
      key: "suitNumber",
      header: "Suit Number",
      width: "1.5fr",
      align: "center",
    },
    { key: "caseTitle", header: "Case Title", width: "2.5fr", align: "center" },
    { key: "filingType", header: "Filing Type", width: "1fr", align: "center" },
    {
      key: "classification",
      header: "Classification",
      width: "1.5fr",
      align: "center",
    },
    { key: "dateFiled", header: "Date Filed", width: "1fr", align: "center" },
    {
      key: "statusLevel",
      header: "Status Level",
      width: "1.2fr",
      align: "center",
    },
    { key: "sla", header: "SLA", width: "1.2fr", align: "center" },
    {
      key: "details",
      header: "Details",
      width: "0.8fr",
      align: "center",
      isAction: true,
    },
    {
      key: "action",
      header: "Action",
      width: "0.8fr",
      align: "center",
      isAction: true,
    },
  ];

  // Sample data
  const data = [
    {
      id: 1,
      suitNumber: "ID/3885GCM/2025",
      caseTitle: "State of Lagos VS Salman Lukman",
      filingType: "Criminal",
      classification: "Filing of Information",
      dateFiled: "22 Jun, 2025",
      statusLevel: "PSA Accepted",
      slaStatus: "on-track",
      slaDays: "3 days left",
    },
    {
      id: 2,
      suitNumber: "ID/3885GCM/2025",
      caseTitle: "State of Lagos VS Salman Lukman",
      filingType: "Civil",
      classification: "Family & Probate",
      dateFiled: "22 Jun, 2025",
      statusLevel: "PSA Accepted",
      slaStatus: "at-risk",
      slaDays: "24 hours left",
    },
    {
      id: 3,
      suitNumber: "ID/3885GCM/2025",
      caseTitle: "State of Lagos VS Salman Lukman",
      filingType: "Criminal",
      classification: "Filing of Information",
      dateFiled: "22 Jun, 2025",
      statusLevel: "PSA Accepted",
      slaStatus: "overdue",
      slaDays: null,
    },
  ];

  // Custom cell renderer for special columns
  const renderCell = (item, column) => {
    // Render suit number with background color based on filing type
    if (column.key === "suitNumber") {
      return (
        <div
          style={{
            backgroundColor: getBackgroundColor(item.filingType),
            color: "white",
            fontWeight: "500",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.suitNumber}
        </div>
      );
    }

    // Render SLA badges
    if (column.key === "sla") {
      const statusLabels = {
        "on-track": "On Track",
        "at-risk": "At Risk",
        overdue: "Overdue",
      };

      return (
        <div className={`sla-badge sla-${item.slaStatus}`}>
          <div>{getSlaIcon(item.slaStatus)}</div>
          <div className="sla-content">
            <span className="sla-status">
              {statusLabels[item.slaStatus]}
              {item.slaDays && "-" + item.slaDays}
            </span>
          </div>
        </div>
      );
    }

    // Render action buttons
    if (column.key === "details" || column.key === "action") {
      const buttonText = column.key === "details" ? "View" : "Clear";
      return (
        <button
          className="action-button"
          onClick={() => console.log(`${buttonText} clicked for ${item.id}`)}
        >
          {buttonText}
        </button>
      );
    }

    // Default rendering
    return item[column.key] || "-";
  };
  const secondaryTableColumns = [
    {
      key: "claimOffences",
      header: "Claim/Offences",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "justify",
    },
    {
      key: "claimValue",
      header: "Claim Value",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
    {
      key: "claimType",
      header: "Claim Type",
      width: "1fr",
      headerAlign: "center", // Header centered
      cellAlign: "center",
    },
  ];

  // Sample data matching the image
  const SecondaryTableData = [
    {
      id: 1,
      claimOffences:
        "A DECLARATION that the post no-debit placed by the Respondent on the Applicant's Account Number: 0053522833 with Account Name: OSITE WORLD INTERNATIONAL LIMITED without a valid Order of Court and without due process of law from the 30th day of September, 2019 to the month of January, 2020 was improper, wrongful, unconstitutional, illegal, null and void and constituted a gross violation of the Applicant's Fundamental Rights to own and possess property, as enshrined under Sections 43 and 44(1) of the Constitution of the Federal Republic of Nigeria, as amended, Article 17(1) of the United Nations Declaration of Human Rights and Article 14 of the African Charter on Human and Peoples Rights.",
      claimValue: "N2,000,000",
      claimType: "Monetary",
    },
    {
      id: 2,
      claimOffences:
        "A DECLARATION that the post no-debit placed by the Respondent on the Applicant's Account Number: 0053522833 with Account Name: OSITE WORLD INTERNATIONAL LIMITED without a valid Order of Court and without due process of law from the 30th day of September, 2019 to the month of January, 2020 was improper, wrongful, unconstitutional, illegal, null and void and constituted a gross violation of the Applicant's Fundamental Rights to own and possess property, as enshrined under Sections 43 and 44(1) of the Constitution of the Federal Republic of Nigeria, as amended, Article 17(1) of the United Nations Declaration of Human Rights and Article 14 of the African Charter on Human and Peoples Rights.",
      claimValue: "N2,000,000",
      claimType: "Monetary",
    },
  ];
  return (
    <div>
      <TableContainer>
        <TableTitleHeader title="New Cases" />
        <TableHeader columns={columns} />
        <TableContent data={data} columns={columns} renderCell={renderCell} />
      </TableContainer>
      <br />
      <div>
        <TableTitleHeader title="Claim Details" />
        <SecondaryTableContent
          data={SecondaryTableData}
          columns={secondaryTableColumns}
        />
      </div>
      <MetricsCardContainer metrics={metricsData} />
      <CaseOverview
        title="Case Overview"
        data={caseCardData}
        cutout="60%"
        hoverOffset={15}
        toggleOptions={caseCardStatusOptions}
        defaultSelected={"approved"}
      />
      <div className="case-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Case Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <TablePagination
          currentPage={currentPage}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPageChange={handlePageChange}
          onEntriesChange={handleEntriesChange}
        />
      </div>
    </div>
  );
};

export default TestPage;
