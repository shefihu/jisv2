import React, { useState } from "react";
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
import ScheduleNewCaseModal from "../../../../components/modals/scheduleNewCaseModal";
import InventoryDetails from "../../../../components/modals/InventoryDetails";
import AssignDeputySheriff from "../../../../components/modals/AssignDeputySheriff";

const getBackgroundColor = (index) => {
  const position = index % 10;

  switch (position) {
    case 0:
      return "#FF0000";
    case 1:
      return "#5CA9FB";
    case 2:
      return "#FEAA34";
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return "#FFD964";
    case 9:
      return "#C30DDF";
    default:
      return "#ffffff";
  }
};

// Mock data for different tabs
const unscheduledData = Array.from({ length: 24 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  backgroundColor: getBackgroundColor(i),
}));

const scheduledData = Array.from({ length: 24 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  backgroundColor: getBackgroundColor(i),
}));

const CjAuctionCases = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(12);
  const [activeTab, setActiveTab] = useState("Pending Cases");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const tabs = ["Pending Cases", "Reviewed Cases"];
  const sortOptions = ["Ascending", "Descending"];

  // Get current data based on active tab
  const getCurrentData = () => {
    switch (activeTab.toLowerCase()) {
      case "pending cases":
        return unscheduledData;
      case "reviewed cases":
        return scheduledData;
      default:
        return unscheduledData;
    }
  };

  const currentData = getCurrentData();
  const totalEntries = currentData.length;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const visibleData = currentData.slice(startIndex, endIndex);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleEntriesChange = (num) => {
    setEntriesPerPage(num);
    setCurrentPage(1);
  };

  // Get columns based on active tab
  const getColumns = () => {
    switch (activeTab.toLowerCase()) {
      case "pending cases":
        return [
          {
            key: "suitNumber",
            header: "Suit Number",
            width: "0.8fr",
            align: "center",
          },
          {
            key: "caseTitle",
            header: "Case Title",
            width: "2.5fr",
            align: "center",
          },
          {
            key: "viewInventoryItems",
            header: "View inventory items",
            width: "1fr",
            align: "center",
            isAction: true,
          },
          {
            key: "assignDeputySheriff",
            header: "Assign Deputy sheriff",
            width: "1fr",
            align: "center",
            isAction: true,
          },
        ];
      case "reviewed cases":
        return [
          {
            key: "suitNumber",
            header: "Suit Number",
            width: "1.2fr",
            align: "center",
          },
          {
            key: "caseTitle",
            header: "Case Title",
            width: "2.5fr",
            align: "center",
          },
          {
            key: "viewInventoryItems",
            header: "View inventory items",
            width: "1fr",
            align: "center",
            isAction: true,
          },
          {
            key: "assignDeputySheriff",
            header: "Assign Deputy sheriff",
            width: "1fr",
            align: "center",
            isAction: true,
          },
        ];
      default:
        return [];
    }
  };

  const columns = getColumns();

  // Custom cell renderer for special columns
  const renderCell = (item, column, rowIndex) => {
    // Render suit number with background color
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
    if (column.key === "viewInventoryItems") {
      return <InventoryDetails />;
    }
    if (column.key === "assignDeputySheriff") {
      return <AssignDeputySheriff />;
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
      <TableTitleHeader title="My Cases" />

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
        showEntries={[12]}
      />
    </div>
  );
};

export default CjAuctionCases;
