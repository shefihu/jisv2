import React, { useState } from "react";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../common/table/TableHeader";
import TableContent from "../../../../common/table/TableContent";
import TablePagination from "../../../../common/table/TablePagination";
import Tab from "../../../../common/Tab";
import SearchBar from "../../../../common/SearchBar";
import Sort from "../../../../common/Sort";
import DatePicker from "../../../../common/DatePicker";
import "../../../../styles/dashboard/acrCases/acrCases.css";
import { MsExcel, MsWord, PdfIcon } from "../../../../assets/Svg";

// Mock data for PSA cases in Fiat page
const mockFiatCaseData = Array.from({ length: 12 }, (_, i) => ({
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
}));

const Fiat = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const tabs = ["Pending", "Approved"];
  const sortOptions = ["Normal", "Fast Track", "Urgency"];

  const totalEntries = mockFiatCaseData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = mockFiatCaseData.slice(startIndex, endIndex);

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

    // Render action buttons
    if (column.key === "action") {
      return (
        <button
          className="action-button"
          onClick={() => console.log("View clicked for", item.suitNumber)}
        >
          View
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

        <div className="download_sort_wrapper">
          <Sort
            sort={sort}
            setSort={setSort}
            open={isSortOpen}
            setOpen={setIsSortOpen}
            options={sortOptions}
          />
        </div>
      </div>
      <div className="download_wrapper">
        <a href="">
          <MsExcel />
        </a>
        <a href="">
          <MsWord />
        </a>
        <a download={""} href="">
          <PdfIcon />
        </a>
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

export default Fiat;
