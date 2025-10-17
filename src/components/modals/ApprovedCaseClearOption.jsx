import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/approvedCaseClearOption.css";

import { CircleX } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import CaseSuccessful from "./CaseSuccessful";

const ApprovedCaseClearOption = ({ onReject, onAccept, onSave }) => {
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

  const handleSave = () => {
    onSave?.();
    toggleModal();
  };

  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        Clear
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="acr_modal_container approved_case_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Clear Option</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content approved_case_modal_content">
                <div className="acr_modal_footer acr_modal_footer_wrapper">
                  <button className="btn btn_solid" onClick={handleAccept}>
                    Accept
                  </button>
                  <button className="btn btn_outline" onClick={handleReject}>
                    Reject
                  </button>
                </div>

                <form
                  className="approved_case_modal_form"
                  onSubmit={(e) => e.preventDefault()}
                >
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

                  <div className="acr_modal_footer">
                    <button className="btn btn_outline" onClick={toggleModal}>
                      Cancel
                    </button>
                    <button className="btn btn_solid" onClick={handleSave}>
                      Save
                    </button>
                  </div>
                </form>
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

ApprovedCaseClearOption.propTypes = {
  onReject: PropTypes.func,
  onAccept: PropTypes.func,
  onSave: PropTypes.func,
};

export default ApprovedCaseClearOption;
