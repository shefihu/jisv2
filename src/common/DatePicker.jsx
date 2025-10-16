import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/datePicker.css";
import PropTypes from "prop-types";

const DatePicker = ({
  selectedDate,
  onDateChange,
  placeholder = "Select Date",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Format date for display
  const formatDate = (date) => {
    if (!date) return placeholder;
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-");
  };

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleDateClick = (date) => {
    onDateChange(date);
    setIsOpen(false);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleMonthYearChange = (month, year) => {
    setCurrentMonth(new Date(year, month));
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  const isSelectedDate = (date) => {
    if (!selectedDate || !date) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

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

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="date-picker-container" ref={datePickerRef}>
      <button
        type="button"
        className="date-picker-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {formatDate(selectedDate)}
      </button>

      {isOpen && (
        <div className="date-picker-dropdown">
          <div className="calendar-header">
            <button
              type="button"
              className="calendar-nav-button"
              onClick={() => navigateMonth(-1)}
            >
              <ChevronLeft size={16} />
            </button>
            <button type="button" className="calendar-month-year-button">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </button>
            <button
              type="button"
              className="calendar-nav-button"
              onClick={() => navigateMonth(1)}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="month-year-picker">
            <div className="month-year-selectors">
              <select
                value={currentMonth.getMonth()}
                onChange={(e) =>
                  handleMonthYearChange(
                    parseInt(e.target.value),
                    currentMonth.getFullYear()
                  )
                }
                className="month-selector"
              >
                {monthNames.map((month, index) => (
                  <option key={month} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={currentMonth.getFullYear()}
                onChange={(e) =>
                  handleMonthYearChange(
                    currentMonth.getMonth(),
                    parseInt(e.target.value)
                  )
                }
                className="year-selector"
              >
                {generateYearOptions().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="calendar-grid">
            {dayNames.map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}

            {getDaysInMonth(currentMonth).map((date, index) => (
              <div
                key={index}
                className={`calendar-day ${
                  date ? "calendar-day-clickable" : "calendar-day-empty"
                } ${isSelectedDate(date) ? "calendar-day-selected" : ""} ${
                  isToday(date) ? "calendar-day-today" : ""
                }`}
                onClick={() => date && handleDateClick(date)}
              >
                {date ? date.getDate() : ""}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default DatePicker;
