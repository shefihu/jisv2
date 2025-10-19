import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/approvedCaseClearOption.css";
import "../../styles/dashboard/modal/updateNoteCaseStatus.css";

import { CircleX } from "lucide-react";
import { useState } from "react";

const UpdateNoteCaseStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        Edit/
        <br />
        Add
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="acr_modal_container approved_case_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Update Case Status</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content approved_case_modal_content">
                <form
                  className="update_note_case_form"
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

                  <div className="document_upload_section">
                    <p className="upload_label">
                      Case Note Front Load Document
                    </p>
                    <button type="button" className="upload_btn">
                      Upload Note
                    </button>
                  </div>

                  <div className="acr_modal_footer">
                    <button className="btn btn_outline" onClick={toggleModal}>
                      Cancel
                    </button>
                    <button className="btn btn_solid" onClick={toggleModal}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateNoteCaseStatus;
