import React, { useState } from "react";
import Layout from "../components/Layout";
import "./EventDetails.css";
import eventsData from "../data/events.json";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function EventDetails() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  let filtered = [...eventsData];

  if (activeTab !== "all") filtered = filtered.filter((e) => e.category === activeTab);
  if (selectedCategory !== "all") filtered = filtered.filter((e) => e.category === selectedCategory);
  if (searchQuery.trim() !== "")
    filtered = filtered.filter((e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  if (selectedDate !== "") filtered = filtered.filter((e) => e.date === selectedDate);
  if (sortOrder === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortOrder === "za") filtered.sort((a, b) => b.name.localeCompare(a.name));

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      <div className="container">
        <div className="header">
          <h1>Event Explorer</h1>
          <p>Browse and filter all campus events</p>
        </div>

        <div className="favorites-tabs">
          {["all", "academic", "cultural", "sports", "departmental"].map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="action-buttons">
          <input
            type="text"
            placeholder="🔍 Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="academic">Academic</option>
            <option value="cultural">Cultural</option>
            <option value="sports">Sports</option>
            <option value="departmental">Departmental</option>
          </select>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <button className="action-btn" onClick={() => setSortOrder("az")}>Sort A–Z</button>
          <button className="action-btn" onClick={() => setSortOrder("za")}>Sort Z–A</button>
        </div>

        <div className="favorites-grid">
          {filtered.map((event) => (
            <div key={event.id} className="event-card">
              <div className="bookmark-icon" onClick={() => toggleBookmark(event.id)}>
                {bookmarkedIds.includes(event.id) ? <FaBookmark /> : <FaRegBookmark />}
              </div>
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-header">
                <h3 className="event-name">{event.name}</h3>
              </div>
              <p className="event-meta">{event.date} | {event.time} | {event.venue}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>No matching events</h3>
            <p>Try changing your filters or search term.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default EventDetails;
