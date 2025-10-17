import { useState } from "react";
import Tab from "../common/Tab";
import SearchBar from "../common/SearchBar";
import Sort from "../common/Sort";
import DatePicker from "../common/DatePicker";
import { MsExcel, MsWord, PdfIcon } from "../assets/Svg";
import "../styles/arcCase.css";
import PendingTab from "../components/dashboard/home/acrCases/PendingTab";
import RevisedCasesTab from "../components/dashboard/home/acrCases/RevisedCasesTab";
import ApprovedTab from "../components/dashboard/home/acrCases/ApprovedTab";

const ArcCases = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const tabs = ["Pending", "Revised Cases", "Approved"];
  const sortOptions = ["Normal", "Fast Track", "Urgency"];

  const renderContent = () => {
    switch (activeTab.toLowerCase()) {
      case "pending":
        return <PendingTab />;
      case "revised cases":
        return <RevisedCasesTab />;
      case "approved":
        return <ApprovedTab />;
      default:
        return null;
    }
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
      {/* <TableTitleHeader title="PSA Cases" />

      <div className="arc-case-table-wrapper">
        <div className="arc-case-table-content">
          <TableHeader columns={columns} />
          <TableContent
            data={visibleData}
            columns={columns}
            renderCell={renderCell}
          />
        </div>
      </div> */}

      {renderContent()}

      {/* Pagination */}
      {/* <TablePagination
        currentPage={currentPage}
        totalEntries={totalEntries}
        entriesPerPage={entriesPerPage}
        onPageChange={handlePageChange}
        onEntriesChange={handleEntriesChange}
      /> */}
    </div>
  );
};

export default ArcCases;
