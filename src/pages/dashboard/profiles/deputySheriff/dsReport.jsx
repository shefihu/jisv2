import "../../../../styles/dashboard/deputySheriff/dsReport.css";
import React, { useState } from "react";
import SelectDropdown from "../../../../components/dashboard/SelectField";

const reportTypeOptions = [
  { label: "Daily Report", value: "daily_report" },
  { label: "Weekly Report", value: "weekly_report" },
  { label: "Monthly Report", value: "monthly_report" },
];
const quarterOptions = [
  { label: "Q1", value: "q1" },
  { label: "Q2", value: "q2" },
  { label: "Q3", value: "q3" },
  { label: "Q4", value: "q4" },
];
function DsReport() {
  const [selectedReportType, setSelectedReportType] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");

  return (
    <div className="ds_report_container">
      <h1 className="ds_report_title ">Generate Assignment Report</h1>
      <form className="ds_report_form">
        <SelectDropdown
          label={"Report Type"}
          options={reportTypeOptions}
          value={selectedReportType}
          onChange={setSelectedReportType}
        />
        <SelectDropdown
          label={"Quarter"}
          options={quarterOptions}
          value={selectedQuarter}
          onChange={setSelectedQuarter}
        />

        <button
          type="submit"
          className="ds_report_generate_button btn btn_solid"
        >
          Generate Report
        </button>
      </form>
    </div>
  );
}

export default DsReport;
