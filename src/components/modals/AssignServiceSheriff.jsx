import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/assignDeputySheriff.css";

import { useState } from "react";
import SelectDropdown from "../dashboard/SelectField";
import PropTypes from "prop-types";
const serviceSheriffOptions = [
  { label: "Deputy Sheriff John Smith", value: "john_smith" },
  { label: "Deputy Sheriff Jane Doe", value: "jane_doe" },
  { label: "Deputy Sheriff Mike Johnson", value: "mike_johnson" },
];

const caseStatus = [
  { label: "pending ", value: "pending" },
  { label: "assigned", value: "assigned" },
  { label: "unassigned", value: "unassigned" },
];

const AssignServiceSheriff = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceSheriff, setSelectedServiceSheriff] = useState("");
  const [selectedCaseStatus, setSelectedCaseStatus] = useState("");

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="open_modal_btn open_modal_assign_deputy_modal_btn"
        onClick={toggleModal}
      >
        {title}
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="assign_deputy_modal_container container_assign_service_sheriff_background"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="assign_deputy_modal_title">
              Assign To Service Sheriff
            </h3>

            <form className="assign_deputy_modal_form">
              <div className="case_type_wrapper">
                <label htmlFor="suitNumber">Suit Number</label>
                <input
                  type="text"
                  id="suitNumber"
                  name="suitNumber"
                  placeholder={"ID/ADR/1473/2020"}
                />
              </div>
              <SelectDropdown
                label="Case Status"
                options={caseStatus}
                value={selectedCaseStatus}
                onChange={setSelectedCaseStatus}
                placeholder="Select"
              />
              <SelectDropdown
                label="Service Sheriff"
                options={serviceSheriffOptions}
                value={selectedServiceSheriff}
                onChange={setSelectedServiceSheriff}
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
AssignServiceSheriff.propsTypes = {
  title: PropTypes.string.isRequired,
};
export default AssignServiceSheriff;
