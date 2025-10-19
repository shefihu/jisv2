import { useState } from "react";
import SelectDropdown from "../../../../../components/dashboard/SelectField";
import "../../../../../styles/dashboard/judges/njcReport.css";

const reportTypeOptions = [
  { label: "Monthly Report", value: "monthly" },
  { label: "Quarterly Report", value: "quarterly" },
  { label: "Annual Report", value: "annual" },
];

const eventTypeOptions = [
  { label: "Court Session", value: "court_session" },
  { label: "Case Hearing", value: "case_hearing" },
  { label: "Judgment", value: "judgment" },
];

const divisionOptions = [
  { label: "Ikeja Judicial Division", value: "ikeja" },
  { label: "Lagos Island Division", value: "lagos_island" },
  { label: "Epe Division", value: "epe" },
];

const quarterOptions = [
  { label: "Q1 (Jan-Mar)", value: "q1" },
  { label: "Q2 (Apr-Jun)", value: "q2" },
  { label: "Q3 (Jul-Sep)", value: "q3" },
  { label: "Q4 (Oct-Dec)", value: "q4" },
];

const NjcReport = () => {
  const [reportType, setReportType] = useState("");
  const [eventType, setEventType] = useState("");
  const [division, setDivision] = useState("");
  const [quarter, setQuarter] = useState("");

  return (
    <div className="njc_report_container">
      <div className="njc_report_content">
        <h2 className="njc_report_title">Generate NJC Report</h2>

        <form action="">
          <div className="njc_report_form_fields_container">
            <SelectDropdown
              label="Report Type"
              options={reportTypeOptions}
              value={reportType}
              onChange={setReportType}
              placeholder="Select"
            />

            <SelectDropdown
              label="Event Type"
              options={eventTypeOptions}
              value={eventType}
              onChange={setEventType}
              placeholder="Select"
            />

            <SelectDropdown
              label="Division"
              options={divisionOptions}
              value={division}
              onChange={setDivision}
              placeholder="Select"
            />

            <SelectDropdown
              label="Quarter"
              options={quarterOptions}
              value={quarter}
              onChange={setQuarter}
              placeholder="Select"
            />
          </div>

          <button className="njc_report_btn">Generate Report</button>
        </form>
      </div>
    </div>
  );
};

export default NjcReport;
