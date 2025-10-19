import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/assignDeputySheriff.css";

import { useState } from "react";
import SelectDropdown from "../dashboard/SelectField";
const deputySheriffOptions = [
  { label: "Deputy Sheriff John Smith", value: "john_smith" },
  { label: "Deputy Sheriff Jane Doe", value: "jane_doe" },
  { label: "Deputy Sheriff Mike Johnson", value: "mike_johnson" },
];

const AssignDeputySheriff = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeputy, setSelectedDeputy] = useState("");

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="open_modal_btn open_modal_assign_deputy_modal_btn"
        onClick={toggleModal}
      >
        Assign
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="assign_deputy_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <form className="assign_deputy_modal_form">
              <SelectDropdown
                label="Deputy Sheriff"
                options={deputySheriffOptions}
                value={selectedDeputy}
                onChange={setSelectedDeputy}
                placeholder="Select"
              />
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
              <div className="assign_deputy_modal_footer">
                <button
                  type="button"
                  className="assign_deputy_modal_btn_outline"
                  onClick={toggleModal}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="assign_deputy_modal_btn_solid"
                  onClick={toggleModal}
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignDeputySheriff;
