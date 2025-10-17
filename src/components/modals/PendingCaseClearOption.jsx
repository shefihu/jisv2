import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/pendingCaseClearOption.css";

import { CircleX } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import CaseSuccessful from "./CaseSuccessful";

const PendingCaseClearOption = ({ caseId, onReject, onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal((prev) => !prev);
  };

  const handleAccept = () => {
    onAccept?.();
    setIsAccepted(true);
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
            className="acr_modal_container pending_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Clear Option</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content">
                <p className="acr_modal_text pending_modal_text">
                  Accept or Reject this Case: <br /> {caseId}
                </p>

                <div className="acr_modal_footer acr_modal_footer_wrapper">
                  <button className="btn btn_outline" onClick={handleAccept}>
                    Accept
                  </button>

                  <button className="btn btn_outline" onClick={handleReject}>
                    Reject
                  </button>
                </div>
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

PendingCaseClearOption.propTypes = {
  caseId: PropTypes.string.isRequired,
  onReject: PropTypes.func,
  onAccept: PropTypes.func,
};

export default PendingCaseClearOption;
