import "../../styles/dashboard/home/index.css";
import MetricsCardContainer from "../../../../components/dashboard/home/MetricsCardContainer";
import {
  caseCardData,
  caseCardStatusOptions,
  judgesMetricData,
} from "../../../../data/dashboard";
import CaseOverview from "../../../../components/dashboard/home/CaseOverview";
import TableTitleHeader from "../../../../common/table/TableTitleHeader";
import TableHeader from "../../../../common/table/TableHeader";
import TableContent from "../../../../common/table/TableContent";
import TableContainer from "../../../../common/table/TableContainer";
import { Clock } from "lucide-react";
import { DangerIcon, TickCircleIcon } from "../../../../assets/Svg";

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

// Define columns
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

// Sample data
const data = [
  {
    id: 1,
    suitNumber: "ID/3885GCM/2025",
    caseTitle: "State of Lagos VS Salman Lukman",
    filingType: "Criminal",
    classification: "Filing of Information",
    dateFiled: "22 Jun, 2025",
    statusLevel: "PSA Accepted",
    slaStatus: "on-track",
    slaDays: "3 days left",
  },
  {
    id: 2,
    suitNumber: "ID/3885GCM/2025",
    caseTitle: "State of Lagos VS Salman Lukman",
    filingType: "Civil",
    classification: "Family & Probate",
    dateFiled: "22 Jun, 2025",
    statusLevel: "PSA Accepted",
    slaStatus: "at-risk",
    slaDays: "24 hours left",
  },
  {
    id: 3,
    suitNumber: "ID/3885GCM/2025",
    caseTitle: "State of Lagos VS Salman Lukman",
    filingType: "Criminal",
    classification: "Filing of Information",
    dateFiled: "22 Jun, 2025",
    statusLevel: "PSA Accepted",
    slaStatus: "overdue",
    slaDays: null,
  },
];

// Custom cell renderer for special columns
const renderCell = (item, column) => {
  // Render suit number with background color based on filing type
  if (column.key === "suitNumber") {
    return (
      <div
        style={{
          backgroundColor: getBackgroundColor(item.filingType),
          color: "white",
          fontWeight: "500",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item.suitNumber}
      </div>
    );
  }

  // Render SLA badges
  if (column.key === "sla") {
    const statusLabels = {
      "on-track": "On Track",
      "at-risk": "At Risk",
      overdue: "Overdue",
    };

    return (
      <div className={`sla-badge sla-${item.slaStatus}`}>
        <div>{getSlaIcon(item.slaStatus)}</div>
        <div className="sla-content">
          <span className="sla-status">
            {statusLabels[item.slaStatus]}
            {item.slaDays && "-" + item.slaDays}
          </span>
        </div>
      </div>
    );
  }

  // Render action buttons
  if (column.key === "details" || column.key === "action") {
    const buttonText = column.key === "details" ? "View" : "Clear";
    return (
      <button
        className="action-button"
        onClick={() => console.log(`${buttonText} clicked for ${item.id}`)}
      >
        {buttonText}
      </button>
    );
  }

  // Default rendering
  return item[column.key] || "-";
};

const AcrDashboard = () => {
  return (
    <div className="dashboard_container">
      <MetricsCardContainer metrics={judgesMetricData} />

      <CaseOverview
        title="Case Overview"
        data={caseCardData}
        cutout="60%"
        hoverOffset={15}
        toggleOptions={caseCardStatusOptions}
        defaultSelected={"approved"}
      />

      <div>
        <TableTitleHeader title="New Cases" />
        <TableContainer>
          <TableHeader columns={columns} />
          <TableContent data={data} columns={columns} renderCell={renderCell} />
        </TableContainer>
      </div>
    </div>
  );
};

export default AcrDashboard;
