import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/assignDeputySheriff.css";

import { useState } from "react";
import SelectDropdown from "../dashboard/SelectField";
const roleOptions = [
  { label: "Chief Judge", value: "chief_judge" },
  { label: "High Court Judge", value: "high_court_judge" },
  { label: "Magistrate", value: "magistrate" },
];

const judgeOptions = [
  { label: "Hon. Justice A.A Phillips (Mrs.)", value: "phillips" },
  { label: "Hon. Justice B.C Johnson", value: "johnson" },
  { label: "Hon. Justice D.E Williams", value: "williams" },
];

const divisionOptions = [
  { label: "Commercial Division", value: "commercial" },
  { label: "Family Division", value: "family" },
  { label: "Criminal Division", value: "criminal" },
  { label: "Civil Division", value: "civil" },
];

const AssignAdrJudge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedJudge, setSelectedJudge] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button className="open_modal_btn " onClick={toggleModal}>
        Assign
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="assign_deputy_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="assign_deputy_modal_title">Assign ADR Judge</h3>

            <form className="assign_deputy_modal_form">
              <SelectDropdown
                label="Division"
                options={divisionOptions}
                value={selectedDivision}
                onChange={setSelectedDivision}
                placeholder="Select"
              />{" "}
              <SelectDropdown
                label="Role"
                options={roleOptions}
                value={selectedRole}
                onChange={setSelectedRole}
                placeholder="Select"
              />
              <SelectDropdown
                label="Judge"
                options={judgeOptions}
                value={selectedJudge}
                onChange={setSelectedJudge}
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

export default AssignAdrJudge;
