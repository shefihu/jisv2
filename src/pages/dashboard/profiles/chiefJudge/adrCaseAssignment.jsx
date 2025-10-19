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
import AssignAdrJudge from "../../../../components/modals/AssignAdrJudge";

const getBackgroundColor = (index) => {
  const colors = ["#FF0000", "#5CA9FB", "#FEAA34", "#FFD964", "#C30DDF"];
  return colors[index % colors.length];
};

// Mock data (matches screenshot)
const adrCasesData = Array.from({ length: 12 }, (_, i) => ({
  suitNumber: `ID/388${5 + i}GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2025",
  caseAge: "2000",
  backgroundColor: getBackgroundColor(i),
}));

const AdrCaseAssignment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const totalEntries = adrCasesData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = adrCasesData.slice(startIndex, endIndex);

  const columns = [
    {
      key: "suitNumber",
      header: "Suit Number",
      width: "2fr",
      align: "center",
    },
    { key: "caseTitle", header: "Case Title", width: "5fr", align: "center" },
    { key: "dateFiled", header: "Date Filed", width: "1.5fr", align: "center" },
    { key: "caseAge", header: "Case Age", width: "1.2fr", align: "center" },
    {
      key: "details",
      header: "Details",
      width: "1fr",
      align: "center",
      isAction: true,
    },
    {
      key: "assign",
      header: "Assign",
      width: "1fr",
      align: "center",
      isAction: true,
    },
  ];

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
    if (column.key === "assign") {
      return <AssignAdrJudge />;
    }

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
              placeholder="Start Date"
            />
            <DatePicker
              selectedDate={endDate}
              onDateChange={setEndDate}
              placeholder="End Date"
            />
          </div>
        </div>

        <div className="download_sort_wrapper">
          <Sort
            sort={sort}
            setSort={setSort}
            open={isSortOpen}
            setOpen={setIsSortOpen}
            options={["Ascending", "Descending"]}
          />
        </div>
      </div>

      {/* Download buttons */}
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

      {/* Table title */}
      <TableTitleHeader title="ADR Cases Assignment" />

      {/* Table */}
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
        onEntriesChange={setEntriesPerPage}
        showEntries={[10, 12]}
      />
    </div>
  );
};

export default AdrCaseAssignment;
