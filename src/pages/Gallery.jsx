import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import eventsData from '../data/events.json'
import "./Gallery.css"

function Gallery() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxEvent, setLightboxEvent] = useState(null)

 
  useEffect(() => {
    setEvents(eventsData)
    setFilteredEvents(eventsData)
  }, [])

  
  useEffect(() => {
    let filtered = events.filter(e => {
      const matchYear = selectedYear === "all" || e.year === selectedYear
      const matchCat = selectedCategory === "all" || e.category === selectedCategory
      return matchYear && matchCat
    })
    setFilteredEvents(filtered)
  }, [selectedYear, selectedCategory, events])

  return (
    <Layout>
      <div className="container">

        {/* Header */}
        <div className="header">
          <h1>Event Gallery</h1>
          <p>Explore memorable moments from our university events</p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-controls">
          <div className="control-section">
            <label>Filter by Year</label>
            <div className="filter-tabs">
              {["all","2024-25","2023-24","2022-23"].map(y => (
                <button
                  key={y}
                  className={`filter-tab ${selectedYear===y ? "active":""}`}
                  onClick={() => setSelectedYear(y)}
                >
                  {y==="all"?"All Years":y}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <label>Filter by Category</label>
            <div className="filter-tabs">
              {["all","technical","cultural","sports","academic"].map(c => (
                <button
                  key={c}
                  className={`filter-tab ${selectedCategory===c ? "active":""}`}
                  onClick={() => setSelectedCategory(c)}
                >
                  {c==="all"?"All Categories":c.charAt(0).toUpperCase()+c.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number">{events.length}</div>
            <div className="stat-label">Total Images</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{filteredEvents.length}</div>
            <div className="stat-label">Showing</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{new Set(events.map(e=>e.title)).size}</div>
            <div className="stat-label">Events Covered</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredEvents.length === 0 && (
            <div className="no-images">No events found</div>
          )}

          {filteredEvents.map(event => (
            <div 
              key={event.id} 
              className="image-card fade-in"
              onClick={() => setLightboxEvent(event)}
            >
              <div className="image-container">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="image-overlay">
                  <div className="overlay-text">{event.title}</div>
                </div>
              </div>

              <div className="card-content">
                <div className="event-title">{event.title}</div>
                <div className="event-meta">
                  <div className="event-date">{event.date}</div>
                  <div className={`event-category category-${event.category}`}>
                    {event.category}
                  </div>
                </div>
                <div className="event-description">{event.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxEvent && (
          <div className="lightbox active" onClick={() => setLightboxEvent(null)}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="close-lightbox" onClick={() => setLightboxEvent(null)}>×</button>
              <img src={lightboxEvent.image} alt={lightboxEvent.title} className="lightbox-image" />
              <div className="lightbox-info">
                <div className="lightbox-title">{lightboxEvent.title}</div>
                <div className="lightbox-meta">
                  <span>{lightboxEvent.date}</span>
                  <span className={`event-category category-${lightboxEvent.category}`}>
                    {lightboxEvent.category}
                  </span>
                </div>
                <div>{lightboxEvent.description}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  )
}

export default Gallery
