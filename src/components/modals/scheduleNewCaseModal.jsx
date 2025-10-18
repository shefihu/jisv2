import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/updateCaseStatus.css";

import { CircleX, CheckCircle } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
import SelectDropdown from "../dashboard/SelectField";
import ScheduleNewCaseForm from "../form/ScheduleNewCaseForm";

const ScheduleNewCaseModal = ({ caseId = "", onSave, title }) => {
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
      if (onSave) {
        onSave(caseId, selectedStatus);
      }
      // Auto close after success
      setTimeout(() => {
        toggleModal();
      }, 2000);
    }
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        {title}
      </button>

      {isOpen && (
        <div className="schedule_new_case_modal_overlay" onClick={toggleModal}>
          <div className="" onClick={(e) => e.stopPropagation()}>
            <div className="schedule_new_case_form_container">
              <ScheduleNewCaseForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ScheduleNewCaseModal.propTypes = {
  caseId: PropTypes.string,
  onReject: PropTypes.func,
  onSave: PropTypes.func,
};

export default ScheduleNewCaseModal;
