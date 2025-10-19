import React, { useState } from "react";
import "../../styles/dashboard/judges/scheduleNewCaseForm.css";

function CaseAcceptanceModal({ isOpen, onClose, suitId }) {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    console.log("Case accepted with comment:", comment);
    onClose();
  };

  const handleCancel = () => {
    setComment("");
    onClose();
  };

  return (
    <div className="schedule_new_case_modal_overlay">
      <div className="schedule_new_case_form_container">
        <div className="schedule_new_case_form_wrapper">
          <p className="schedule_form_title">Case Acceptance</p>

          <div className="case_type_wrapper">
            <label htmlFor="suitId">Suit ID</label>
            <input
              type="text"
              id="suitId"
              name="suitId"
              value={suitId || "ID/ADR/1473/2020"}
              readOnly
            />
          </div>

          <div className="case_type_wrapper">
            <label htmlFor="defaultFlow">Default Flow</label>
            <input
              type="text"
              id="defaultFlow"
              name="defaultFlow"
              value="ADR Administrator Assign Case Manager 1"
              readOnly
            />
          </div>

          <div className="comment_wrapper">
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Add Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="schedule_new_case_form_action_btn">
            <button className="cancel_bnt" onClick={handleCancel}>
              Cancel
            </button>
            <button className="schedule_new_case_btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseAcceptanceModal;
