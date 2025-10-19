import { useState } from "react";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../common/table/TableHeader";
import TableContent from "../../../../common/table/TableContent";
import TablePagination from "../../../../common/table/TablePagination";
import SearchBar from "../../../../common/SearchBar";
import Sort from "../../../../common/Sort";
import DatePicker from "../../../../common/DatePicker";
import Tab from "../../../../common/Tab";
import { MsExcel, MsWord, PdfIcon } from "../../../../assets/Svg";
import "../../../../styles/dashboard/judges/scheduleCms.css";
import "../../../../styles/dashboard/judges/caseAssignment.css";
import AssignJudge from "../../../../components/modals/AssignJudge";

const getBackgroundColor = (index) => {
  const colors = ["#FF0000", "#5CA9FB", "#FEAA34", "#FFD964", "#C30DDF"];
  return colors[index % colors.length];
};

// Mock dataset
const cases = Array.from({ length: 12 }, (_, i) => ({
  suitNumber: `ID/388${5 + i}GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2025",
  dateAssigned: "12 Sept, 2025",
  caseAge: "1003",
  judge: "Kafisel Dawodu",
  scheduleStatus: "Rescheduled",
  backgroundColor: getBackgroundColor(i),
}));

const CaseAssignment = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const totalEntries = cases.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = cases.slice(startIndex, endIndex);

  const tabs = ["Pending", "Assigned Trial", "Assigned CMC"];

  // Define columns per tab
  const getColumns = () => {
    switch (activeTab.toLowerCase()) {
      case "pending":
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
            key: "dateAssigned",
            header: "Date Assigned",
            width: "1.6fr",
            align: "center",
          },
          { key: "caseAge", header: "Case Age", width: "1fr", align: "center" },
          {
            key: "details",
            header: "Details",
            width: "1fr",
            align: "center",
            isAction: true,
          },
          {
            key: "assignCmc",
            header: "Assign for CMC",
            width: "1.6fr",
            align: "center",
            isAction: true,
          },
          {
            key: "assignTrial",
            header: "Assign for Trial",
            width: "1.6fr",
            align: "center",
            isAction: true,
          },
        ];

      case "assigned trial":
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
            key: "dateFiled",
            header: "Date Filed",
            width: "1.2fr",
            align: "center",
          },
          { key: "judge", header: "Judge", width: "1.5fr", align: "center" },
          {
            key: "caseAge",
            header: "Case Age",
            width: "1.2fr",
            align: "center",
          },
          {
            key: "details",
            header: "Details",
            width: "1.2fr",
            align: "center",
            isAction: true,
          },
          {
            key: "reassign",
            header: "Re-Assign Judge",
            width: "1.8fr",
            align: "center",
            isAction: true,
          },
        ];

      case "assigned cmc":
        return [
          {
            key: "suitNumber",
            header: "Suit Number",
            width: "2.5fr",
            align: "center",
          },
          {
            key: "caseTitle",
            header: "Case Title",
            width: "6fr",
            align: "center",
          },
          {
            key: "dateFiled",
            header: "Date Filed",
            width: "1.8fr",
            align: "center",
          },
          { key: "judge", header: "Judge", width: "2.5fr", align: "center" },
          {
            key: "caseAge",
            header: "Case Age",
            width: "1.8fr",
            align: "center",
          },
          {
            key: "scheduleStatus",
            header: "Schedule Status",
            width: "2.8fr",
            align: "center",
          },
          {
            key: "details",
            header: "Details",
            width: "1.2fr",
            align: "center",
            isAction: true,
          },
          {
            key: "assignTrial",
            header: "Assign for Trial",
            width: "2.8fr",
            align: "center",
            isAction: true,
          },
          {
            key: "reassign",
            header: "Re-Assign",
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

  const renderCell = (item, column, index) => {
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

    if (column.key === "details") {
      return <button className="action-button">View</button>;
    }
    if (column.key === "reassign") {
      return <AssignJudge />;
    }
    if (["assignCmc", "assignTrial"].includes(column.key)) {
      return <input type="checkbox" className="styled_checkbox" />;
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
            <DatePicker placeholder="From" />
            <DatePicker placeholder="To" />
          </div>
        </div>

        <div className="download_sort_wrapper">
          <Sort options={["Ascending", "Descending"]} />
        </div>
      </div>

      {/* Download Icons */}
      <div className="download_wrapper">
        <a href="#">
          <MsExcel />
        </a>
        <a href="#">
          <MsWord />
        </a>
        <a href="#">
          <PdfIcon />
        </a>
      </div>

      <div className="tabs_and_actions_wrapper">
        {/* Tabs */}
        <div className="tab-wrapper">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </div>

        <div className="btn_selection_wrapper">
          <div className="btn_solid">Bulk Assign</div>
          <div className="btn_outline">Cancel selection</div>
        </div>
      </div>

      {/* Table */}
      <TableTitleHeader title="Case assignment" />
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

export default CaseAssignment;
