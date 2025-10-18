import React, { useState } from "react";
import Calendar from "../../../../components/Calendar";
import CalendarDetails from "../../../../components/modals/CalendarDetails";

const JudgesCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  // Define events for October 2025
  // Format: "YYYY-M-D": [array of event objects]
  const judgeEvents = {
    "2025-10-2": [{ title: "Smith v. Johnson", color: "blue" }],
    "2025-10-4": [
      { title: "Criminal Case #2024-456", color: "red" },
      { title: "Mediation Session", color: "green" },
      { title: "+ 50 more case", isLink: true },
    ],
    "2025-10-6": [{ title: "Sentencing Hearing", color: "yellow" }],
    "2025-10-9": [
      {
        title:
          "State of Lagos V. Ladipo Shuib vSentencing Hearing Sentencing Hearing Sentencing Hearing",
        color: "purple",
      },
    ],
    "2025-10-11": [
      { title: "Davis v. Corp", color: "blue" },
      { title: "Jury Selection", color: "orange" },
    ],
    "2025-10-15": [{ title: "Trial Day 1", color: "red" }],
    "2025-10-16": [{ title: "Trial Day 2", color: "red" }],
    "2025-10-17": [{ title: "Trial Day 3", color: "red" }],
    "2025-10-18": [
      { title: "Settlement Conference", color: "green" },
      { title: "Case Review", color: "blue" },
      { title: "+ 3 more case", isLink: true },
    ],
    "2025-10-20": [{ title: "Plea Hearing", color: "yellow" }],
  };

  const handleDateClick = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateKey = `${year}-${month}-${day}`;

    if (judgeEvents[dateKey] && judgeEvents[dateKey].length > 0) {
      setSelectedDate(date);
      setShowDialog(true);
    }
  };

  const handleEventClick = (event) => {
    console.log("Event clicked:", event);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const dateKey = `${year}-${month}-${day}`;
    return judgeEvents[dateKey] || [];
  };

  return (
    <>
      <Calendar
        initialDate={new Date(2025, 9, 1)} // October 2025
        events={judgeEvents}
        onDateClick={handleDateClick}
        onEventClick={handleEventClick}
      />

      {showDialog && (
        <CalendarDetails
          selectedDate={selectedDate}
          events={getEventsForSelectedDate()}
          onClose={closeDialog}
        />
      )}
    </>
  );
};

export default JudgesCalendar;
