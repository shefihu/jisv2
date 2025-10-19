import React, { useState } from "react";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../common/table/TableHeader";
import TableContent from "../../../../common/table/TableContent";
import TablePagination from "../../../../common/table/TablePagination";
import SearchBar from "../../../../common/SearchBar";
import Sort from "../../../../common/Sort";
import DatePicker from "../../../../common/DatePicker";
import { MsExcel, MsWord, PdfIcon } from "../../../../assets/Svg";
import "../../../../styles/dashboard/judges/scheduleCms.css";
import CaseAcceptanceModal from "../../../../components/modals/CaseAcceptanceModal";

// Mock data for ADR cases
const adrCasesData = Array.from({ length: 12 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2024",
  caseAge: 3003,
}));

const JudgeAdrCases = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCaseAcceptance, setShowCaseAcceptance] = useState(false);
  const [selectedSuitId, setSelectedSuitId] = useState("");

  const sortOptions = ["Ascending", "Descending"];

  const totalEntries = adrCasesData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = adrCasesData.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (num) => {
    setEntriesPerPage(num);
    setCurrentPage(1);
  };

  const handleAcceptCase = (suitId) => {
    setSelectedSuitId(suitId);
    setShowCaseAcceptance(true);
  };

  // Fixed columns for ADR cases
  const columns = [
    {
      key: "suitNumber",
      header: "Suit Number",
      width: "1.2fr",
      align: "center",
    },
    {
      key: "caseTitle",
      header: "Case Title",
      width: "3.5fr",
      align: "center",
    },
    {
      key: "dateFiled",
      header: "Date filed",
      width: "1fr",
      align: "center",
    },
    { key: "caseAge", header: "Case age", width: "1fr", align: "center" },
    {
      key: "details",
      header: "Details",
      width: "0.8fr",
      align: "center",
      isAction: true,
    },
    {
      key: "accept",
      header: "Accept",
      width: "1fr",
      align: "center",
      isAction: true,
    },
  ];

  const getBackgroundColor = (index) => {
    const colors = [
      "#FF2E3B",
      "#5CA9FB",
      "#FEAA34",
      "#FEAA34",
      "#FFD964",
      "#FFD964",
      "#FFD964",
      "#C30DDF",
    ];
    return colors[index % colors.length] || "#5CA9FB";
  };

  // Custom cell renderer for special columns
  const renderCell = (item, column, rowIndex) => {
    // Render suit number with background color
    if (column.key === "suitNumber") {
      return (
        <div
          className="suit-number-cell"
          style={{
            backgroundColor: getBackgroundColor(rowIndex),
          }}
        >
          {item.suitNumber}
        </div>
      );
    }

    // Render action buttons
    if (column.key === "details") {
      return (
        <button
          className="schedule-btn"
          onClick={() => console.log("View clicked for", item.suitNumber)}
        >
          View
        </button>
      );
    }

    if (column.key === "accept") {
      return (
        <button
          className="schedule-btn"
          onClick={() => handleAcceptCase(item.suitNumber)}
        >
          Accept
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

      {/* Table */}
      <TableTitleHeader title="My ADR Cases" />

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
        showEntries={[9]}
      />

      {/* Case Acceptance Modal */}
      <CaseAcceptanceModal
        isOpen={showCaseAcceptance}
        onClose={() => setShowCaseAcceptance(false)}
        suitId={selectedSuitId}
      />
    </div>
  );
};

export default JudgeAdrCases;
