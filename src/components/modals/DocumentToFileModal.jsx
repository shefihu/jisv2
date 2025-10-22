import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/assignDeputySheriff.css";

import { useState } from "react";
import SelectDropdown from "../dashboard/SelectField";

const documentTypeOptions = [
  { label: "Writ of Summons", value: "writ_of_summons" },
  { label: "Court Order", value: "court_order" },
  { label: "Subpoena", value: "subpoena" },
];

const DocumentToFIleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("");

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="open_modal_btn open_modal_assign_deputy_modal_btn"
        onClick={toggleModal}
      >
        Choose
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="assign_deputy_modal_container container_assign_service_sheriff_background"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="assign_deputy_modal_title">Document to File</h3>

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
                label="Document Type"
                options={documentTypeOptions}
                value={selectedDocumentType}
                onChange={setSelectedDocumentType}
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
                  select
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentToFIleModal;
