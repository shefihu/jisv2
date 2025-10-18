import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/updateCaseStatus.css";

import { CircleX, CheckCircle } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import SelectDropdown from "../dashboard/SelectField";

const UpdateCaseStatusModal = ({ caseId = "", onReject, onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
    if (!isOpen) {
      setSelectedStatus("");
      setIsSuccess(false);
    }
  };

  const statusOptions = [
    { label: "Select Status", value: "" },
    { label: "Part Heard", value: "part_heard" },
    { label: "Trial", value: "trial" },
    { label: "Judgment", value: "judgment" },
    { label: "Adjourned", value: "adjourned" },
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
  ];

  const handleSave = () => {
    if (selectedStatus) {
      setIsSuccess(true);
      if (onAccept) {
        onAccept(caseId, selectedStatus);
      }
      // Auto close after success
      setTimeout(() => {
        toggleModal();
      }, 2000);
    }
  };

  const handleCancel = () => {
    if (onReject) {
      onReject(caseId);
    }
    toggleModal();
  };

  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        Edit
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="acr_modal_container "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Update Case Status</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              {isSuccess ? (
                <div
                  className="update_modal_success"
                  style={{ textAlign: "center" }}
                >
                  <div style={{ marginBottom: "2rem" }}>
                    <CheckCircle
                      size={64}
                      color="#4CAF50"
                      style={{ margin: "0 auto 1rem" }}
                    />
                    <h3 style={{ color: "#4CAF50", marginBottom: "0.5rem" }}>
                      Success!
                    </h3>
                    <p>Case status updated successfully!</p>
                  </div>
                </div>
              ) : (
                <div className="update_case_modal_content">
                  <div>
                    <label className="acr_modal_label">Case Status</label>
                    <SelectDropdown
                      placeholder="Select Status"
                      label=""
                      onChange={setSelectedStatus}
                      options={statusOptions}
                      value={selectedStatus}
                    />
                  </div>

                  <div className="button_wrapper">
                    <button className="btn btn_outline" onClick={handleCancel}>
                      Cancel
                    </button>

                    <button
                      className="btn btn_solid"
                      onClick={handleSave}
                      disabled={!selectedStatus}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

UpdateCaseStatusModal.propTypes = {
  caseId: PropTypes.string,
  onReject: PropTypes.func,
  onAccept: PropTypes.func,
};

export default UpdateCaseStatusModal;
