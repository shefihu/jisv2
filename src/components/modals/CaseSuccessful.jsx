import "../../styles/dashboard/modal/index.css";
import "../../styles/dashboard/modal/caseSuccessful.css";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/routePaths";
import { TickIcon } from "../../assets/Svg";
import PropTypes from "prop-types";

const CaseSuccessful = ({ isAccepted, toggleModal, isOpen }) => {
  const navigate = useNavigate();

  const handleGoToHome = () => navigate(RoutePaths.DASHBOARD);

  return (
    isOpen && (
      <div className="acr_modal_overlay" onClick={toggleModal}>
        <div
          className="acr_modal_container case_successful_container "
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="case_successful_icon">
              <TickIcon />
            </div>
            <p className="case_successful_title">
              Case Successfully {isAccepted ? "Accepted" : "Rejected"}
            </p>
          </div>

          <p className="case_successful_sub_title">
            This case has been successfully{" "}
            {isAccepted ? "accepted" : "rejected"}
          </p>

          <button className="case_successful_btn" onClick={handleGoToHome}>
            Back Home
          </button>
        </div>
      </div>
    )
  );
};

CaseSuccessful.propTypes = {
  isAccepted: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default CaseSuccessful;
