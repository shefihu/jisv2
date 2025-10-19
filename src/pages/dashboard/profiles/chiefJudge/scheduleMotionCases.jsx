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

// Mock data for different tabs
const unscheduledData = Array.from({ length: 12 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2025",
  caseAge: 2000,
}));

const scheduledData = Array.from({ length: 12 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2025",
  caseAge: 2000,
}));

const completedData = Array.from({ length: 12 }, (_, i) => ({
  id: `ID/3885GCM/2025`,
  suitNumber: `ID/3885GCM/2025`,
  caseTitle: "State of Lagos VS Salman Lukman",
  dateFiled: "12 Sept, 2025",
  caseAge: 2000,
  hearingOutcome: "View",
}));

const ScheduleMotionCase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(12);
  const [activeTab, setActiveTab] = useState("Unscheduled");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const tabs = ["Unscheduled", "Scheduled", "Completed"];
  const sortOptions = ["Ascending", "Descending"];

  // Get current data based on active tab
  const getCurrentData = () => {
    switch (activeTab.toLowerCase()) {
      case "unscheduled":
        return unscheduledData;
      case "scheduled":
        return scheduledData;
      case "completed":
        return completedData;
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
      case "unscheduled":
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
            width: "3fr",
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
            key: "schedule",
            header: "Schedule",
            width: "1fr",
            align: "center",
            isAction: true,
          },
        ];
      case "scheduled":
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
            width: "3fr",
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
            key: "reschedule",
            header: "Reschedule",
            width: "1fr",
            align: "center",
            isAction: true,
          },
        ];
      case "completed":
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
            width: "3fr",
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
            key: "hearingOutcome",
            header: "Hearing outcome",
            width: "1.2fr",
            align: "center",
            isAction: true,
          },
        ];
      default:
        return [];
    }
  };

  const columns = getColumns();

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

    // Render action buttons based on column key and tab
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

    if (column.key === "schedule") {
      return <ScheduleNewCaseModal title={"Schedule"} />;
    }

    if (column.key === "reschedule") {
      return <ScheduleNewCaseModal title={"Reschedule"} />;
    }

    if (column.key === "hearingOutcome") {
      return (
        <button
          className="schedule-btn"
          onClick={() => console.log("View outcome for", item.suitNumber)}
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
      <TableTitleHeader title="Motion cases" />

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

export default ScheduleMotionCase;
