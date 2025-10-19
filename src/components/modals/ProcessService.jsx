import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/updateNoteCaseStatus.css";
import "../../styles/dashboard/modal/processService.css";

import { CircleX } from "lucide-react";
import { useState } from "react";
import SelectDropdown from "../dashboard/SelectField";
import { Link } from "react-router-dom";

const sheriffOptions = [
  { label: "Sheriff John Doe", value: "john_doe" },
  { label: "Sheriff Jane Smith", value: "jane_smith" },
  { label: "Sheriff Mike Johnson", value: "mike_johnson" },
];

const tableData = [
  {
    sn: 1,
    name: "Salman Lukman Olajunka",
    hearingNotice: "Hearing Notice",
  },
  {
    sn: 2,
    name: "Commissioner of Police",
    hearingNotice: "Hearing Notice",
  },
];

const ProcessService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSheriff, setSelectedSheriff] = useState("");

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
    setSelectedSheriff("");
  };

  return (
    <>
      <button className="open_modal_btn" onClick={toggleModal}>
        Process
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="acr_modal_container process_service_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Update Case Status</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content process_service_modal_content">
                <SelectDropdown
                  label="Assign Sheriff"
                  options={sheriffOptions}
                  value={selectedSheriff}
                  onChange={setSelectedSheriff}
                  placeholder="Select Sheriff"
                />

                <div className="process_service_table">
                  <table>
                    <thead>
                      <tr style={{ borderColor: "#5CA9FB" }}>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Hearing Notice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item) => (
                        <tr key={item.sn} style={{ borderColor: "#000" }}>
                          <td>{item.sn}</td>
                          <td>{item.name}</td>
                          <td>
                            <Link to="" className="process_service_notice_cell">
                              {item.hearingNotice}
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="process_service_modal_footer">
                  <button className="btn btn_outline" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button className="btn btn_solid" onClick={toggleModal}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProcessService;
