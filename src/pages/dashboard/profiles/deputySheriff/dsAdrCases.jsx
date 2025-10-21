import { useState } from "react";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../common/table/TableHeader";
import TableContent from "../../../../common/table/TableContent";
import TablePagination from "../../../../common/table/TablePagination";
import SearchBar from "../../../../common/SearchBar";
import Sort from "../../../../common/Sort";
import DatePicker from "../../../../common/DatePicker";
import { MsExcel, MsWord, PdfIcon } from "../../../../assets/Svg";
import "../../../../styles/dashboard/judges/scheduleCms.css";
import "../../../../styles/dashboard/judges/caseAssignment.css";
import Tab from "../../../../common/Tab";
import AssignServiceSheriff from "../../../../components/modals/AssignServiceSheriff";
import DocumentToFIleModal from "../../../../components/modals/DocumentToFileModal";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../../routes/routePaths";
const getBackgroundColor = (index) => {
  const colors = ["#FF0000", "#5CA9FB", "#FEAA34", "#FFD964", "#C30DDF"];
  return colors[index % colors.length];
};

// Mock dataset
const cases = Array.from({ length: 12 }, (_, i) => ({
  suitNumber: `ID/388${5 + i}GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  filingType: "Motion",
  documentToFile: "Choose",
  sheriffName: "Salman Lukman",
  backgroundColor: getBackgroundColor(i),
}));

const DsAdrCases = () => {
  const [activeTab, setActiveTab] = useState("pending cases");

  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const entriesPerPage = 10;

  const totalEntries = cases.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = cases.slice(startIndex, endIndex);

  // Define columns for DS Cases table

  const tabs = ["Pending cases", "Assigned cases"];

  // Define columns per tab
  const getColumns = () => {
    switch (activeTab.toLowerCase()) {
      case "pending cases".toLowerCase():
        return [
          {
            key: "suitNumber",
            header: "Suit Number",
            width: "2fr",
            align: "center",
          },
          {
            key: "caseTitle",
            header: "Case Title",
            width: "6fr",
            align: "center",
          },
          {
            key: "filingType",
            header: "Filing Type",
            width: "1.6fr",
            align: "center",
          },
          {
            key: "documentToFile",
            header: "Document to File",
            width: "2.3fr",
            isAction: true,
          },
          {
            key: "details",
            header: "Details",
            width: "1fr",
            align: "center",
            isAction: true,
          },

          {
            key: "action",
            header: "Action",
            width: "1.6fr",
            align: "center",
            isAction: true,
          },
        ];

      case "assigned cases".toLowerCase():
        return [
          {
            key: "suitNumber",
            header: "Suit Number",
            width: "2fr",
            align: "center",
          },
          {
            key: "caseTitle",
            header: "Case Title",
            width: "6fr",
            align: "center",
          },
          {
            key: "filingType",
            header: "Filing Type",
            width: "1.6fr",
            align: "center",
          },
          {
            key: "sheriffName",
            header: "Sheriff Name",
            width: "2fr",
            align: "center",
          },
          {
            key: "details",
            header: "Details",
            width: "1.4fr",
            align: "center",
            isAction: true,
          },

          {
            key: "action",
            header: "Action",
            width: "1.6fr",
            align: "center",
            isAction: true,
          },
        ];
      default:
        return [];
    }
  };

  const columns = getColumns();

  const renderCell = (item, column) => {
    if (column.key === "suitNumber") {
      return (
        <div
          className="suit-number-cell"
          style={{
            backgroundColor: item.backgroundColor,
            color: "#282828",
          }}
        >
          {item.suitNumber}
        </div>
      );
    }

    if (column.key === "documentToFile") {
      return <DocumentToFIleModal />;
    }

    if (column.key === "details") {
      return (
        <button
          onClick={() =>
            navigate(
              RoutePaths.DS_CASE.replace(
                ":suitId",
                item.suitNumber.replaceAll("/", "-")
              )
            )
          }
          className="action-button"
          style={{
            fontWeight: "400",
          }}
        >
          View
        </button>
      );
    }

    if (
      column.key === "action" &&
      activeTab.toLowerCase() === "pending cases".toLowerCase()
    ) {
      return <AssignServiceSheriff title={"Assign"} />;
    }

    if (
      column.key === "action" &&
      activeTab.toLowerCase() === "assigned cases".toLowerCase()
    ) {
      return <AssignServiceSheriff title={"Re-assign"} />;
    }

    return item[column.key] || "-";
  };

  return (
    <div className="arc-case-container">
      {/* Filters and Header */}
      <div className="arc-case-header">
        <div className="arc-case-search-section">
          <div className="search-wrapper">
            <SearchBar placeholder="Search with Suit number" />
          </div>
          <div className="search-date-wrapper">
            <DatePicker
              placeholder="From"
              onDateChange={() => handleStartDateChange(startDate)}
              selectedDate={startDate}
            />
            <DatePicker
              placeholder="To"
              onDateChange={() => handleEndDateChange(endDate)}
              selectedDate={endDate}
            />
          </div>
        </div>

        <div className="download_sort_wrapper">
          <Sort options={["Ascending", "Descending"]} />
        </div>
      </div>

      {/* Download Icons */}
      <div className="download_wrapper">
        <button type="button" onClick={() => console.log("Export to Excel")}>
          <MsExcel />
        </button>
        <button type="button" onClick={() => console.log("Export to Word")}>
          <MsWord />
        </button>
        <button type="button" onClick={() => console.log("Export to PDF")}>
          <PdfIcon />
        </button>
      </div>
      <div className="tabs_and_actions_wrapper">
        {/* Tabs */}
        <div className="tab-wrapper">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </div>
      </div>
      {/* Table */}
      <TableTitleHeader title="DS - ADR Cases" />
      <div className="arc-case-table-wrapper">
        <div className="arc-case-table-content">
          <TableHeader columns={columns} />
          <TableContent
            data={visibleData}
            columns={columns}
            renderCell={renderCell}
          />
        </div>
      </div>

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalEntries={totalEntries}
        entriesPerPage={entriesPerPage}
        onPageChange={setCurrentPage}
        showEntries={[10, 12]}
      />
    </div>
  );
};

export default DsAdrCases;
