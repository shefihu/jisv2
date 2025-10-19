import { useState } from "react";
import TableTitleHeader from "../../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../../common/table/TableHeader";
import TableContent from "../../../../../common/table/TableContent";
import TablePagination from "../../../../../common/table/TablePagination";
import SearchBar from "../../../../../common/SearchBar";
import Sort from "../../../../../common/Sort";
import DatePicker from "../../../../../common/DatePicker";
import "../../../../../styles/dashboard/acrCases/acrCases.css";
import { MsExcel, MsWord, PdfIcon } from "../../../../../assets/Svg";
import { useNavigate } from "react-router-dom";

const getBackgroundColor = (index) => {
  const position = index % 9;

  switch (position) {
    case 0:
      return "#FF0000";
    case 1:
      return "#FFFF00";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "#5CA9FB";
    case 7:
      return "#C30DDF";
    case 8:
      return "#ffffff";
    default:
      return "#ffffff";
  }
};

// Mock data for My Cases page
const myCasesData = Array.from({ length: 24 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  comment: "State of Lagos VS Salman Lukman",
  username: "Dadam",
  userType: "Judge",
  scheduledDate: "12 Sept, 2025",
  backgroundColor: getBackgroundColor(i),
}));

const CancelledScheduledReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const sortOptions = ["Ascending", "Descending"];

  const totalEntries = myCasesData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = myCasesData.slice(startIndex, endIndex);

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
      width: "1.2fr",
      align: "center",
    },
    { key: "comment", header: "Comment", width: "6fr", align: "center" },
    // { key: "filingType", header: "Filing Type", width: "1fr", align: "center" },

    {
      key: "username",
      header: "User Name",
      width: "1fr",
      align: "center",
    },
    {
      key: "userType",
      header: "User Type",
      width: "1fr",
      align: "center",
    },
    {
      key: "scheduledDate",
      header: "Scheduled Date",
      width: "1.3fr",
      align: "center",
    },
  ];

  // Custom cell renderer for special columns
  const renderCell = (item, column) => {
    // Render suit number with background color based on filing type
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
      <TableTitleHeader title="Cancelled Scheduled" />

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

export default CancelledScheduledReport;
