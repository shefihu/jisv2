import React from "react";
import "../../styles/dashboard/judges/scheduleNewCaseForm.css";
import { BuildingIcon, VideoIcon } from "../../assets/Svg";
function ScheduleNewCaseForm() {
  return (
    <form className="schedule_new_case_form_wrapper">
      <p className="schedule_form_title">Schedule New Case</p>
      <div className="case_type_wrapper">
        <label htmlFor="caseType">Case Type</label>
        <input type="text" id="caseType" name="caseType" placeholder="Civil" />
      </div>
      <div className="case_number_title_wrapper">
        <div className="case_type_wrapper">
          <label htmlFor="caseNumber">Case Number</label>
          <input
            type="text"
            id="caseNumber"
            name="caseNumber"
            placeholder="ID/234DM/2025"
          />
        </div>
        <div className="case_type_wrapper">
          <label htmlFor="caseTitle">Case Title</label>
          <input
            type="text"
            id="caseTitle"
            name="caseTitle"
            placeholder="State of Lagos V. Salman Lukman"
          />
        </div>
      </div>

      <div className="time_date_wrapper">
        <div>
          <input type="date" id="date" name="date" />
        </div>
        <div>
          <input type="time" id="startDate" name="startDate" />
        </div>
        <div>
          <input type="time" id="endDate" name="endDate" />
        </div>
      </div>

      <div className="court_location_wrapper">
        <div className="court_location_option">
          <label className="court_location_label">
            <div className="court_location_content">
              <BuildingIcon />
              <div className="court_location_text">
                <p className="court_location_title">Physical Courtroom</p>
                <span className="court_location_subtitle">
                  In-person Hearing
                </span>
              </div>
            </div>
            <input type="radio" name="courtLocation" value="physical" />
          </label>
        </div>
        <div className="court_location_option">
          <label className="court_location_label">
            <div className="court_location_content">
              <VideoIcon />
              <div className="court_location_text">
                <p className="court_location_title">Virtual Hearing</p>
                <span className="court_location_subtitle">
                  Online Video Conference
                </span>
              </div>
            </div>
            <input type="radio" name="courtLocation" value="virtual" />
          </label>
        </div>
      </div>

      <div className="case_number_title_wrapper">
        <div className="case_type_wrapper">
          <label htmlFor="courtRoom">Court Room</label>
          <input
            type="text"
            id="courtRoom"
            name="courtRoom"
            placeholder="Courtroom 6"
          />
        </div>
        <div className="case_type_wrapper">
          <label htmlFor="caseTitle">Building</label>
          <input
            type="text"
            id="Building"
            name="Building"
            placeholder="Main Courthouse "
          />
        </div>
      </div>

      <div className="comment_wrapper">
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Add Comment"
        ></textarea>
      </div>

      <div className="schedule_new_case_form_action_btn">
        <button className="cancel_bnt">Cancel</button>
        <button className="schedule_new_case_btn">Schedule New Case</button>
      </div>
    </form>
  );
}

export default ScheduleNewCaseForm;
