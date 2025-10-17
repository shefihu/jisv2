import "../../styles/dashboard/arcCases/arcCasePage.css";
import BackButton from "../../common/BackButton";
import Tab from "../../common/Tab";
import { useState } from "react";
import TableTitleHeader from "../../common/table/TableTitleHeader";
import SecondaryTableContent from "../../common/table/SecondaryTableContent";
import CaseDetailTab from "../../components/dashboard/home/caseDetails/CaseDetailTab";
import CaseClaimTab from "../../components/dashboard/home/caseDetails/CaseClaimTab";
import CommentTab from "../../components/dashboard/home/caseDetails/CommentTab";
import DocumentTab from "../../components/dashboard/home/caseDetails/DocumentTab";
import PartiesTab from "../../components/dashboard/home/caseDetails/PartiesTab";
import PaymentTab from "../../components/dashboard/home/caseDetails/PaymentTab";

function ArcCase() {
  const [activeTab, setActiveTab] = useState("case Details");
  const tabs = [
    "Case Details",
    "Case Claims",
    "Comment",
    "Documents",
    "Parties",
    "Payment",
  ];

  const renderTabs = () => {
    switch (activeTab.toLowerCase()) {
      case "Case Details".toLowerCase():
        return <CaseDetailTab />;
      case "Case claims".toLowerCase():
        return <CaseClaimTab />;
      case "Comment".toLowerCase():
        return <CommentTab />;
      case "Documents".toLowerCase():
        return <DocumentTab />;
      case "Parties".toLowerCase():
        return <PartiesTab />;
      case "Payment".toLowerCase():
        return <PaymentTab />;

      default:
        return null;
    }
  };

  return (
    <div className="container_wrapper">
      <div className="back_button_wrapper">
        <BackButton className="back_button" />
        <p className="suit_no_text">Suit No: ID/3885GCM/2025</p>
      </div>
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        className="tab_component"
      />
      {renderTabs()}
    </div>
  );
}

export default ArcCase;
