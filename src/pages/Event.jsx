import React from 'react'
import Layout from '../components/Layout'
import "./Event.css"

function Event() {
    return (
        <Layout>
            <div>
                <br /><br /><br />
                <div className="container">
                    <div className="header">
                        <h1>University Events</h1>
                        <p>Discover upcoming academic, cultural, and sports events</p>
                    </div>
                    <div className="stats" id="stats">
                        <div className="stat-item">
                            <div className="stat-number" id="total-events">0</div>
                            <div className="stat-label">Total Events</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" id="upcoming-events">0</div>
                            <div className="stat-label">Upcoming</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" id="filtered-events">0</div>
                            <div className="stat-label">Showing</div>
                        </div>
                    </div>
                    <div className="controls">
                        <div className="control-group">
                            <label htmlFor="category-filter">Filter by Category</label>
                            <select id="category-filter">
                                <option value="all">All Categories</option>
                                <option value="academic">Academic Events</option>
                                <option value="cultural">Cultural Events</option>
                                <option value="sports">Sports Events</option>
                                <option value="departmental">Departmental Events</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label htmlFor="sort-by">Sort by</label>
                            <select id="sort-by">
                                <option value="date-upcoming">Date (Upcoming First)</option>
                                <option value="date-recent">Date (Most Recent First)</option>
                                <option value="name-asc">Event Name (A-Z)</option>
                                <option value="name-desc">Event Name (Z-A)</option>
                                <option value="category">Category</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label htmlFor="time-filter">Time Filter</label>
                            <select id="time-filter">
                                <option value="all">All Events</option>
                                <option value="upcoming">Upcoming Only</option>
                                <option value="past">Past Events Only</option>
                            </select>
                        </div>
                    </div>
                    <div className="events-grid" id="events-container">
                        {/* Events will be loaded here */}
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Event