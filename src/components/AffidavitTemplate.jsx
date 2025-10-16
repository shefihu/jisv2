import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/affidavitTemplate.css";
import { X } from "lucide-react";

export const AffidavitTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [templates, setTemplates] = useState({
    identity: [],
    legal: [],
    general: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchTemplates = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://apistaging2.lagosjudiciary.gov.ng/api/setup/templates/affidavit"
      );
      const { data } = response;

      if (data.code === 0 && data.templates) {
        // Categorize templates based on their titles
        const categorizedTemplates = categorizeTemplates(data.templates);
        setTemplates(categorizedTemplates);
      }
    } catch (error) {
      console.error("Error fetching templates:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchTemplates();
    }
  }, [isOpen, fetchTemplates]);

  const categorizeTemplates = (templateList) => {
    // Create a map for easy lookup
    const templateMap = {};
    templateList.forEach((template) => {
      templateMap[template.title.trim().toUpperCase()] = template;
    });

    // Identity & Personal - specific order as per design
    const identityOrder = [
      "CHANGE OF NAME",
      "DECLARATION OF AGE",
      "PROOF OF DEATH",
      "AFFIDAVIT OF SPINSTERHOOD",
      "CORRECTION OF NAME ON BIRTH CERTIFICATE",
    ];

    // Legal & Corporate - specific order as per design
    const legalOrder = [
      "CONTRACTOR REGISTRATION",
      "AFFIDAVIT OF SPONSORSHIP",
      "AFFIDAVIT FOR COMPLIANCE",
      "AFFIDAVIT OF BIDDING",
      "LOSS OF DRIVER LICENSE",
      "AFFIDAVIT OF FACTS",
      "LOSS OF INTERNATIONAL PASSPORT",
      "DAMAGED PASSPORT",
      "LOSS OF SIM CARD", // This might not exist in API, placeholder
      "DECLARATION OF MARRIAGE",
      "CONFIRMATION OF BACHELORSHIP",
      "LOSS OF DRIVEL LICENSE", // Duplicate of driver license
      "DECLARATION OF AGE", // Also appears here
      "AFFIDAVIT OF MEANS",
      "CHANGE OF OWNERSHIP(VEHICLE)",
    ];

    // General & Misc - specific order as per design
    const generalOrder = [
      "GENERAL AFFIDAVIT",
      "FORM A",
      "GOOD CONDUCT (WORK)",
      "GOOD CONDUCT (SCHOOL)",
      "GENERAL AFFIDAVIT 1", // Listed as "General Affidavit (2 Pas)"
    ];

    // Helper function to create formatted template
    const formatTemplate = (template, icon) => ({
      id: template.id,
      title: template.title.trim(),
      icon: icon,
      note: template.note,
    });

    // Build arrays based on the specific order
    const identity = [];
    const legal = [];
    const general = [];

    // Process Identity & Personal
    identityOrder.forEach((title) => {
      const template = templateMap[title];
      if (template) {
        identity.push(formatTemplate(template, "👤"));
      }
    });

    // Process Legal & Corporate
    legalOrder.forEach((title) => {
      const template = templateMap[title];
      if (template) {
        legal.push(formatTemplate(template, "📄"));
      }
    });

    // Process General & Misc
    generalOrder.forEach((title) => {
      const template = templateMap[title];
      if (template) {
        general.push(formatTemplate(template, "📋"));
      } else if (
        title === "GENERAL AFFIDAVIT 1" &&
        templateMap["GENERAL AFFIDAVIT 1"]
      ) {
        // Handle the "2 Pas" variant
        const template = templateMap["GENERAL AFFIDAVIT 1"];
        general.push({
          ...formatTemplate(template, "📋"),
          title: "GENERAL AFFIDAVIT (2 Pas)",
        });
      }
    });

    // Add any remaining templates that weren't in the specific orders
    templateList.forEach((template) => {
      const titleUpper = template.title.trim().toUpperCase();
      const isAlreadyAdded = [...identity, ...legal, ...general].some(
        (t) => t.id === template.id
      );

      if (!isAlreadyAdded) {
        // Determine category based on keywords
        if (
          titleUpper.includes("GENERAL") ||
          titleUpper.includes("FORM") ||
          titleUpper.includes("GOOD CONDUCT")
        ) {
          general.push(formatTemplate(template, "📋"));
        } else if (
          titleUpper.includes("NAME") ||
          titleUpper.includes("AGE") ||
          titleUpper.includes("DEATH") ||
          titleUpper.includes("BIRTH") ||
          titleUpper.includes("MARRIAGE") ||
          titleUpper.includes("BACHELOR") ||
          titleUpper.includes("SPINSTER") ||
          titleUpper.includes("SIGNATURE")
        ) {
          identity.push(formatTemplate(template, "👤"));
        } else {
          legal.push(formatTemplate(template, "📄"));
        }
      }
    });

    return { identity, legal, general };
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
                  <X />
                </button>
              </div>
            </div>

            <div className="modal-body">
              {loading ? (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  Loading templates...
                </div>
              ) : (
                <>
                  {templates.identity.length > 0 && (
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
                              <div className="template-icon">
                                {template.icon}
                              </div>
                              <h4 className="template-title">
                                {template.title}
                              </h4>
                            </div>
                            <button className="select-btn">
                              Select Template
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {templates.legal.length > 0 && (
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
                              <div className="template-icon">
                                {template.icon}
                              </div>
                              <h4 className="template-title">
                                {template.title}
                              </h4>
                            </div>
                            <button className="select-btn">
                              Select Template
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {templates.general.length > 0 && (
                    <div className="section">
                      <h3 className="section-title">General & Misc</h3>
                      <div className="templates-grid">
                        {templates.general.map((template) => (
                          <div
                            key={template.id}
                            className="template-card"
                            onClick={() => handleSelectTemplate(template)}
                          >
                            <div className="template-info">
                              <div className="template-icon">
                                {template.icon}
                              </div>
                              <h4 className="template-title">
                                {template.title}
                              </h4>
                            </div>
                            <button className="select-btn">
                              Select Template
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
