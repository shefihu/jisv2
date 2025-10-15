import React, { useState } from "react";
import "../styles/affidavitTemplate.css";
import { CircleXIcon } from "lucide-react";

export const AffidavitTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = {
    identity: [
      { id: 1, title: "Change of Name", icon: "👤" },
      { id: 2, title: "Declaration of Age", icon: "📄" },
      { id: 3, title: "Proof of Death", icon: "👤" },
      { id: 4, title: "Affidavit of Spinsterhood", icon: "👤" },
      { id: 5, title: "Correction of Name on Birth Name", icon: "👤" },
    ],
    legal: [
      { id: 6, title: "Contractor Registration", icon: "👤" },
      { id: 7, title: "Affidavit of Sponsorship", icon: "📄" },
      { id: 8, title: "Affidavit of Compliance", icon: "👤" },
      { id: 9, title: "Affidavit of Bidding", icon: "👤" },
      { id: 10, title: "Loss of Driver License", icon: "👤" },
      { id: 11, title: "Affidavit of Fact", icon: "👤" },
      { id: 12, title: "Loss Of International Passport", icon: "📄" },
      { id: 13, title: "Affidavit of Damaged Passport", icon: "👤" },
      { id: 14, title: "Loss of Sim Card", icon: "👤" },
      { id: 15, title: "Declaration of Marriage", icon: "👤" },
      { id: 16, title: "Confirmation of Bachelorship", icon: "👤" },
      { id: 17, title: "Loss Of Drivel License", icon: "📄" },
      { id: 18, title: "Declaration of Age", icon: "👤" },
      { id: 19, title: "Affidavit of Means", icon: "👤" },
      { id: 20, title: "Change of Ownership (Vehicle)", icon: "👤" },
    ],
  };

  const handleSelectTemplate = (template) => {
    console.log("Selected template:", template);
    // Handle template selection
  };

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        Open Affidavit Templates
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="header-left">
                <h2>Affidavit Template</h2>
              </div>
              <div className="header-right">
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <CircleXIcon />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="section">
                <h3 className="section-title">Identity & Personal</h3>
                <div className="templates-grid">
                  {templates.identity.map((template) => (
                    <div
                      key={template.id}
                      className="template-card"
                      onClick={() => handleSelectTemplate(template)}
                    >
                      <div className="template-info">
                        <div className="template-icon">{template.icon}</div>
                        <h4 className="template-title">{template.title}</h4>
                      </div>
                      <button className="select-btn">Select Template</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section">
                <h3 className="section-title">Legal & Corporate</h3>
                <div className="templates-grid">
                  {templates.legal.map((template) => (
                    <div
                      key={template.id}
                      className="template-card"
                      onClick={() => handleSelectTemplate(template)}
                    >
                      <div className="template-info">
                        <div className="template-icon">{template.icon}</div>
                        <h4 className="template-title">{template.title}</h4>
                      </div>
                      <button className="select-btn">Select Template</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
