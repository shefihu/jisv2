import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/inventoryDetails.css";

import { CircleX } from "lucide-react";
import { useState } from "react";

const getBackgroundColor = (index) => {
  switch (index) {
    case 0:
      return "#FF0000";
    case 1:
      return "#5CA9FB";
    case 2:
      return "#FEAA34";
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return "#FFD964";
    case 8:
      return "#C30DDF";

    default:
      return "#ffffff";
  }
};

const data = Array.from({ length: 10 }, (_, i) => ({
  color: "#E74C3C", // Red
  suitNumber: "ID/3885GCM/2025",
  caseTitle: "State of Lagos VS Salman Lukman",
  partyName: "Kehinde Falowo",
  inventoryName: "Car",
  room: "Inventory room-01",
  shelveNumber: "Shelve-01",
  court: "Hon. Justice A.A Phillips (Mrs.) Chief Judge",

  backgroundColor: getBackgroundColor(i),
}));

const InventoryDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="open_modal_btn open_modal_inventory_table_modal_btn"
        onClick={toggleModal}
      >
        View
      </button>

      {isOpen && (
        <div className="acr_modal_overlay" onClick={toggleModal}>
          <div
            className="acr_modal_container inventory_table_modal_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="acr_modal_header">
              <p className="acr_modal_title">Inventory details</p>
              <button className="acr_modal_close" onClick={toggleModal}>
                <CircleX size={24} color="#fff" />
              </button>
            </div>

            <div className="acr_modal_body acr_modal_body_bg">
              <div className="acr_modal_content ">
                <div className="inventory_table">
                  <table>
                    <thead>
                      <tr>
                        <th>Suit Number</th>
                        <th>Case Title</th>
                        <th>Party name</th>
                        <th>Inventory name</th>
                        <th>Room</th>
                        <th>Shelve Number</th>
                        <th>Court</th>
                        <th>Received</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index}>
                          <td style={{ backgroundColor: row.backgroundColor }}>
                            <span className="suit_text">{row.suitNumber}</span>
                          </td>
                          <td>{row.caseTitle}</td>
                          <td className="inventory_table_party_name">
                            {row.partyName}
                          </td>
                          <td>{row.inventoryName}</td>
                          <td>{row.room}</td>
                          <td>{row.shelveNumber}</td>
                          <td>{row.court}</td>
                          <td>
                            <input type="checkbox" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InventoryDetails;
