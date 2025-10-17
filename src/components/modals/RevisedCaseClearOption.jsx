import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/revisedCaseClearOption.css";

import { CircleX } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import SelectDropdown from "../dashboard/SelectField";
import CaseSuccessful from "./CaseSuccessful";

const processModeOptions = [
  { label: "Fast-Tracking", value: "fast_tracking" },
  { label: "Normal", value: "normal" },
];

const divisionOptions = [
  { label: "Ikeja Judicial Division", value: "ikeja_judicial" },
  { label: "Lagos Island Division", value: "lagos_island" },
  { label: "Epe Division", value: "epe" },
  { label: "Ikorodu Division", value: "ikorodu" },
];

const classificationOptions = [
  { label: "Fundamental Human Right", value: "fundamental_human_right" },
  { label: "Filing of Information", value: "filing_information" },
  { label: "General Civil", value: "general_civil" },
  { label: "Family & Probate", value: "family_probate" },
];

const subClassificationOptions = [
  { label: "Land Dispute", value: "land_dispute" },
  { label: "Contract Dispute", value: "contract_dispute" },
  { label: "Criminal Appeal", value: "criminal_appeal" },
  { label: "Child Custody", value: "child_custody" },
];

const claimTypeOptions = [
  { label: "Monetary Claim", value: "monetary" },
  { label: "Non-Monetary Claim", value: "non_monetary" },
];

const RevisedCaseClearOption = ({ onReject, onAccept, onGenerate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [processMode, setProcessMode] = useState("");
  const [division, setDivision] = useState("");
  const [classification, setClassification] = useState("");
  const [subClassification, setSubClassification] = useState("");
  const [claimType, setClaimType] = useState("");
  const [showSuitNumber, setShowSuitNumber] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleGenerateSuitNumber = () => {
    onGenerate?.();
    setShowSuitNumber(true);
  };

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
    setShowSuitNumber(false);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal((prev) => !prev);
  };

  const handleAccept = () => {
    onAccept?.();
    setIsAccepted(false);
    toggleModal();
    setShowSuccessModal(true);
  };

  const handleReject = () => {
    onReject?.();
    setIsAccepted(false);
    toggleModal();
    setShowSuccessModal(true);
  };
  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        Clear
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className={"acr_modal_container revised_case_modal_container"}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Clear Option</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content revised_case_modal_content">
                {!showSuitNumber && (
                  <div className="acr_modal_footer acr_modal_footer_wrapper">
                    <button className="btn btn_solid" onClick={handleAccept}>
                      Accept
                    </button>
                    <button className="btn btn_outline" onClick={handleReject}>
                      Reject
                    </button>
                  </div>
                )}

                <form
                  className="revised_case_modal_form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <SelectDropdown
                    label="Process Mode"
                    options={processModeOptions}
                    value={processMode}
                    onChange={setProcessMode}
                    placeholder="Fast-Tracking"
                  />

                  <SelectDropdown
                    label="Division"
                    options={divisionOptions}
                    value={division}
                    onChange={setDivision}
                    placeholder="Ikeja Judicial Division"
                  />

                  <SelectDropdown
                    label="Classification"
                    options={classificationOptions}
                    value={classification}
                    onChange={setClassification}
                    placeholder="Fundamental Human Right"
                  />

                  <SelectDropdown
                    label="Sub-Classification"
                    options={subClassificationOptions}
                    value={subClassification}
                    onChange={setSubClassification}
                    placeholder="Select sub-classification"
                  />

                  <SelectDropdown
                    label="Claim Type"
                    options={claimTypeOptions}
                    value={claimType}
                    onChange={setClaimType}
                    placeholder="Select claim type"
                  />

                  <div>
                    <label htmlFor="otherClaims" className="acr_modal_label">
                      Other Claims{" "}
                      <span className="optional_text">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="otherClaims"
                      id="otherClaims"
                      className="acr_modal_input"
                      placeholder="Enter other claims"
                    />
                  </div>
                  <div>
                    <label htmlFor="comments" className="acr_modal_label">
                      Comment
                    </label>
                    <textarea
                      type="text"
                      name="comments"
                      id="comments"
                      className="acr_modal_input"
                      placeholder="Add Comment"
                    />
                  </div>

                  <button
                    className="btn btn_solid"
                    onClick={handleGenerateSuitNumber}
                  >
                    Generate Suit Number
                  </button>
                </form>

                {showSuitNumber && (
                  <div>
                    <p className="acr_modal_text suit_id">
                      Suit No: ID/12345/2025
                    </p>

                    <div className="acr_modal_footer">
                      <button className="btn btn_outline" onClick={toggleModal}>
                        Cancel
                      </button>
                      <button className="btn btn_solid" onClick={onGenerate}>
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <CaseSuccessful
        isAccepted={isAccepted}
        toggleModal={toggleSuccessModal}
        isOpen={showSuccessModal}
      />
    </>
  );
};

RevisedCaseClearOption.propTypes = {
  onReject: PropTypes.func,
  onAccept: PropTypes.func,
  onGenerate: PropTypes.func,
};

export default RevisedCaseClearOption;
