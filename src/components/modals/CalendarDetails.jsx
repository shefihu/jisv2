import React from "react";

const CalendarDetails = ({ selectedDate, events, onClose }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-content">
          <h2 className="dialog-date">{formatDate(selectedDate)}</h2>

          <div className="dialog-events">
            {events.map((event, index) => (
              <div key={index} className="dialog-event-item">
                <div className="event-icon">
                  {event.color === "green" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="15"
                        rx="2"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                      <path
                        d="M3 10h18M8 3v4M16 3v4"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="4"
                        width="14"
                        height="17"
                        rx="2"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <path
                        d="M9 9h6M9 13h6M9 17h4"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="event-details">
                  <div className="event-title-time">
                    <h3 className="event-title-dialog">{event.title}</h3>
                    <p className="event-time">9:00 AM - 10:30 AM</p>
                    <p className="event-location">
                      {event.color === "green"
                        ? "Virtual Meeting (Online)"
                        : "Physical Court (Onsite)"}
                    </p>
                    <p
                      className={`event-type ${
                        event.color === "green" ? "type-green" : "type-red"
                      }`}
                    >
                      {event.color === "green"
                        ? "Settlement Conference"
                        : "Arraignment Hearing"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="schedule-button">Schedule New Case</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarDetails;
