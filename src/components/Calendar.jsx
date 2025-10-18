import React, { useState } from "react";
import "../styles/calendar.css";

const Calendar = ({
  initialDate = new Date(),
  events = {},
  onDateClick,
  onEventClick,
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [view, setView] = useState("month");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    const remainingCells = 7 - (days.length % 7);
    if (remainingCells < 7) {
      for (let i = 1; i <= remainingCells; i++) {
        days.push(`next-${i}`);
      }
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const getEventsForDay = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const dateKey = `${year}-${month + 1}-${day}`;
    return events[dateKey] || [];
  };

  const handleDayClick = (day) => {
    if (day && typeof day === "number" && onDateClick) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      onDateClick(new Date(year, month, day));
    }
  };

  const handleEventClick = (event, e) => {
    e.stopPropagation();
    if (onEventClick) {
      onEventClick(event);
    }
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="header-left">
          <button className="nav-button" onClick={goToPreviousMonth}>
            ‹
          </button>
          <h2 className="month-year">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button className="nav-button" onClick={goToNextMonth}>
            ›
          </button>
        </div>
        <div className="header-right">
          <button
            className={`view-button ${view === "week" ? "active" : ""}`}
            onClick={() => setView("week")}
          >
            Week
          </button>
          <button
            className={`view-button ${view === "month" ? "blue" : ""}`}
            onClick={() => setView("month")}
          >
            Month
          </button>
          <button className="today-button" onClick={goToToday}>
            Today
          </button>
        </div>
      </div>

      <div className="calendar">
        <div className="days-header">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-name">
              {day}
            </div>
          ))}
        </div>

        <div className="days-grid">
          {calendarDays.map((day, index) => {
            const isNextMonth =
              typeof day === "string" && day.startsWith("next-");
            const dayNumber = isNextMonth ? day.split("-")[1] : day;
            const dayEvents =
              day && typeof day === "number" ? getEventsForDay(day) : [];

            return (
              <div
                key={index}
                className={`day-cell ${
                  day === null || isNextMonth ? "empty" : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day !== null && (
                  <>
                    <div
                      className={`day-number ${isToday(day) ? "today" : ""}`}
                    >
                      {dayNumber}
                    </div>
                    {dayEvents.length > 0 && (
                      <div className="events-container">
                        {dayEvents.map((event, i) => (
                          <div
                            key={i}
                            className={`event ${event.color || ""} ${
                              event.isLink ? "link" : ""
                            }`}
                            onClick={(e) => handleEventClick(event, e)}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
