import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css';

const Calendar = () => {
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [month, setMonth] = useState(today.getMonth()); // State for current month
  const year = today.getFullYear();

  // Function to get the number of days in a month (considering leap years)
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to display the calendar grid
  const renderCalendarGrid = () => {
    const firstDay = (new Date(year, month)).getDay(); // Day of the week for the 1st

    let calendarRows = [];
    let currentRow = [];

    // Loop through days, filling the calendar grid
    for (let i = 0; i < getDaysInMonth(month, year) + firstDay; i++) {
      const date = i - firstDay;

      if (i < firstDay) {
        currentRow.push(<td key={`empty-${i}`} className="calendar-cell empty"></td>);
      } else {
        const cellDate = new Date(year, month, date); // Used for cell content
        const isSelected = cellDate.getDate() === today.getDate() && month === today.getMonth(); // Check for today's date

        currentRow.push(
          <td
            key={`date-${i}`}
            className={
              isSelected ? 'calendar-cell today selected' : 'calendar-cell'
            }
            onClick={() => { /* Handle date selection here  */ }} // Add onClick handler
          >
            {cellDate.getDate() + 1} {/* Use cellDate.getDate() for day number */}
          </td>
        );
        if (currentRow.length === 7) {
          calendarRows.push(<tr>{currentRow}</tr>);
          currentRow = [];
        }
      }
    }

    if (currentRow.length > 0) {
      for (let i = currentRow.length; i < 7; i++) {
        currentRow.push(<td key={`empty-${i}`} className="calendar-cell empty"></td>);
      }
      calendarRows.push(<tr>{currentRow}</tr>);
    }

    return calendarRows;
  };

  const handlePrevMonth = () => {
    setMonth((month - 1 + 12) % 12); 
  };

  const handleNextMonth = () => {
    setMonth((month + 1) % 12);
  };

  return (
    <div className={styles.calendar}>
      <button onClick={handlePrevMonth}>Previous Month</button>
      <button onClick={handleNextMonth}>Next Month</button>
      <h2>Calendar - {new Date(year, month).toLocaleString('default', { month: 'long' })}</h2>
      <table>
        <thead>
          <tr>{days.map((day) => <th key={day}>{day}</th>)}</tr>
        </thead>
        <tbody>{renderCalendarGrid()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
