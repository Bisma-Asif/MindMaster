import React, { useState, useMemo } from "react";
import eventsData from "../data/events.json";
import "./EventCalender.css";
import Layout from "../components/Layout";


const categoryColors = {
  academic: "#1abc9c",
  cultural: "#e67e22",
  sports: "#3498db",
  departmental: "#9b59b6",
};

function EventCalendar() {
  
  const availableYears = [...new Set(eventsData.map(ev => new Date(ev.date).getFullYear()))];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState(availableYears[0]);

  const filteredEvents = useMemo(() => {
    return eventsData.filter(ev => {
      const year = new Date(ev.date).getFullYear();
      return (selectedCategory === "all" || ev.category === selectedCategory) && year === selectedYear;
    });
  }, [selectedCategory, selectedYear]);

 
  const eventsByDate = {};
  filteredEvents.forEach(ev => {
    eventsByDate[ev.date] = eventsByDate[ev.date] ? [...eventsByDate[ev.date], ev] : [ev];
  });

  const currentYear = selectedYear;
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const generateDays = (monthIndex) => {
    const firstDay = new Date(currentYear, monthIndex, 1);
    const lastDay = new Date(currentYear, monthIndex + 1, 0);
    const days = [];

   
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      const dateStr = `${currentYear}-${String(monthIndex+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      const dayEvents = eventsByDate[dateStr] || [];

      days.push(
        <div key={d} className={`day ${dayEvents.length ? "event-day" : ""}`}>
          <span>{d}</span>
          {dayEvents.length > 0 && (
            <>
              <div className="tooltip">
                {dayEvents.map(ev => (
                  <div className="event-tooltip" key={ev.id}>
                    <img src={ev.image} alt={ev.name} />
                    <div className="event-info">
                      <h4>{ev.name}</h4>
                      <p><strong>Time:</strong> {ev.time}</p>
                      <p><strong>Venue:</strong> {ev.venue}</p>
                      <p>{ev.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <span className="event-dot" style={{ backgroundColor: categoryColors[dayEvents[0].category] }}></span>
            </>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <Layout>
      <div className="calendar-wrapper">
        <div className="filters">
          <div>
            <label>Year:</label>
            <select value={selectedYear} onChange={e => setSelectedYear(Number(e.target.value))}>
              {availableYears.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Category:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              <option value="all">All</option>
              {Object.keys(categoryColors).map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="calendar-container">
          {months.map((m, i) => {
           
            const monthEvents = filteredEvents.filter(ev => new Date(ev.date).getMonth() === i);

            return (
              <div className="month-card" key={m}>
                <h3>{m} {currentYear}</h3>
                <div className="weekdays">
                  <div>Sun</div><div>Mon</div><div>Tue</div>
                  <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>
                <div className="days-grid">{generateDays(i)}</div>

                {monthEvents.length > 0 && (
                  <div className="month-events">
                    {monthEvents.map(ev => (
                      <div className="month-event" key={ev.id} style={{ borderLeftColor: categoryColors[ev.category] }}>
                        <span className="bullet" style={{ backgroundColor: categoryColors[ev.category] }}></span>
                        {ev.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default EventCalendar;
