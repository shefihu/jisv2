import React, { useState } from "react";
import TableTitleHeader from "../common/table/TableTitleHeader";
import TableHeader from "../common/table/TableHeader";
import TableContent from "../common/table/TableContent";
import TablePagination from "../common/table/TablePagination";
import Tab from "../common/Tab";
import SearchBar from "../common/SearchBar";
import Sort from "../common/Sort";
import DatePicker from "../common/DatePicker";
import { Clock } from "lucide-react";
import { DangerIcon, TickCircleIcon } from "../assets/Svg";
import "../styles/arcCase.css";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/routePaths";

// Mock data for Arc cases
const mockArcCaseData = Array.from({ length: 12 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  filingType: i % 3 === 0 ? "Civil" : "Criminal",
  classification:
    i % 4 === 0
      ? "General Civil"
      : i % 4 === 1
      ? "Family & Probate"
      : "Filing of information",
  dateFiled: "22 Jun, 2025",
  statusLevel: "PSA Accepted",
  sla:
    i % 5 === 0
      ? "Overdue"
      : i % 5 === 1
      ? "At Risk - 24 hours left"
      : i % 5 === 2
      ? "On Track - 3 days left"
      : i % 5 === 3
      ? "Completed"
      : "Overdue",
  slaStatus:
    i % 5 === 0
      ? "overdue"
      : i % 5 === 1
      ? "at-risk"
      : i % 5 === 2
      ? "on-track"
      : i % 5 === 3
      ? "completed"
      : "overdue",
}));

const ArcCases = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [activeTab, setActiveTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const tabs = ["Pending", "Revised Cases", "Approved"];
  const sortOptions = ["Normal", "Fast Track", "Urgency"];

  const totalEntries = mockArcCaseData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = mockArcCaseData.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (num) => {
    setEntriesPerPage(num);
    setCurrentPage(1);
  };

  // Table columns configuration
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
    { key: "sla", header: "SLA", width: "1.5fr", align: "center" },
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

  // Custom cell renderer for special columns
  const renderCell = (item, column) => {
    // Render suit number with background color based on filing type
    if (column.key === "suitNumber") {
      return (
        <div
          className="suit-number-cell"
          style={{
            backgroundColor: getBackgroundColor(item.filingType),
          }}
        >
          {item.suitNumber}
        </div>
      );
    }

    // Render SLA badges
    if (column.key === "sla") {
      return (
        <div className={`sla-badge sla-${item.slaStatus}`}>
          <div>{getSlaIcon(item.slaStatus)}</div>
          <div className="sla-content">
            <span className="sla-status">{item.sla}</span>
          </div>
        </div>
      );
    }

    // Render action buttons
    if (column.key === "details") {
      const buttonText = column.key === "details" ? "View" : "Clear";
      return (
        <button
          className="action-button"
          onClick={() =>
            navigate(
              RoutePaths.ACR_CASE.replace(
                ":suitId",
                item.suitNumber.replaceAll("/", "_")
              )
            )
          }
        >
          {buttonText}
        </button>
      );
    }

    // Render action buttons
    if (column.key === "action") {
      const buttonText = column.key === "details" ? "View" : "Clear";
      return (
        <button
          className="action-button"
          onClick={() => console.log("action button working ")}
        >
          {buttonText}
        </button>
      );
    }

    // Default rendering
    return item[column.key] || "-";
  };

  return (
    <div className="arc-case-container">
      {/* Header */}
      <div className="arc-case-header">
        <div className="arc-case-search-section">
          <div className="search-wrapper">
            <SearchBar
              searchValue={search}
              setSearchValue={setSearch}
              placeholder="Search with Suit number"
            />
          </div>
          <div className="search-date-wrapper">
            <DatePicker
              selectedDate={startDate}
              onDateChange={setStartDate}
              placeholder="28-09-2925"
            />
            <DatePicker
              selectedDate={endDate}
              onDateChange={setEndDate}
              placeholder="28-09-2925"
            />
          </div>
        </div>

        <Sort
          sort={sort}
          setSort={setSort}
          open={isSortOpen}
          setOpen={setIsSortOpen}
          options={sortOptions}
        />
      </div>

      {/* Tabs */}
      <div className="tab-wrapper">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      </div>

      {/* Table */}
      <TableTitleHeader title="PSA Cases" />

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
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      />
    </div>
  );
};

export default ArcCases;
