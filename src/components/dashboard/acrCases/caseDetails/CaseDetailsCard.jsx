import "../../../../styles/dashboard/acrCases/caseDetailsCard.css";

function CaseDetailsCard() {
  const caseData = {
    caseTitle: "SALMAN LUKMAN OLAYINKA VS OLATEKUN SAMUEL OLADEYINDE",
    suitNumber: "ID/3885GCM/2025",
    division: "IKEJA JUDICIAL DIVISION",
    caseClassification: "GENERAL CIVIL",
    caseType: "CIVIL",
    dateFiled: "28 SEPTEMBER, 2025",
    causeOfAction: "DEFAMATION",
    processMode: "FAST-TRACKING",
    caseStatus: "ACR VERIFIED",
    fillCount: "1007 Fill",
    documentCount: "309",
  };

  return (
    <div className="case-details-card">
      <div className="case-details-grid">
        <div className="case-detail-row">
          <div className="case-detail-item">
            <div className="case-detail-label">Case Title</div>
            <div className="case-detail-value">{caseData.caseTitle}</div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Suit Number</div>
            <div className="case-detail-value">{caseData.suitNumber}</div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Division</div>
            <div className="case-detail-value">{caseData.division}</div>
          </div>
        </div>

        <div className="case-detail-row">
          <div className="case-detail-item">
            <div className="case-detail-label">Case Classification</div>
            <div className="case-detail-value">
              {caseData.caseClassification}
            </div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Case Type</div>
            <div className="case-detail-value">{caseData.caseType}</div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Date Filed</div>
            <div className="case-detail-value">{caseData.dateFiled}</div>
          </div>
        </div>

        <div className="case-detail-row">
          <div className="case-detail-item">
            <div className="case-detail-label">Cause of Action</div>
            <div className="case-detail-value">{caseData.causeOfAction}</div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Process Mode</div>
            <div className="case-detail-value">{caseData.processMode}</div>
          </div>
          <div className="case-detail-item">
            <div className="case-detail-label">Case Status</div>
            <div className="case-detail-value">{caseData.caseStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetailsCard;
