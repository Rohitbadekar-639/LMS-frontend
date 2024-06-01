import React from 'react';

const Calendar = () => {
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = today.getMonth(); // 0-indexed month value
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
        currentRow.push(
          <td key={`date-${i}`} className={date === 0 ? 'calendar-cell today' : 'calendar-cell'}>
            {cellDate.getDate() + 1} {/* Use cellDate.getDate() for day number */}
          </td>
        );
        if (currentRow.length === 7) {
          calendarRows.push(<tr>{currentRow}</tr>);
          currentRow = [];
        }
      }
    }
  
    // Add remaining empty cells to complete the last row
    if (currentRow.length > 0) {
      for (let i = currentRow.length; i < 7; i++) {
        currentRow.push(<td key={`empty-${i}`} className="calendar-cell empty"></td>);
      }
      calendarRows.push(<tr>{currentRow}</tr>);
    }
  
    return calendarRows;
  };  

  return (
    <div className="calendar">
      <h2>Calendar</h2>
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
