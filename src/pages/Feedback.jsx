import React from 'react'
import Layout from '../components/Layout'
import "./Feedback.css"

function Feedback() {
    return (
        <Layout>
            <div>
                <div className="container">
                    <div className="form-wrapper fade-in">
                        <div className="header">
                            <h1>Event Feedback</h1>
                            <p>We value your opinion! Please share your experience and help us improve our events.</p>
                        </div>
                        <form id="feedbackForm">
                            <div className="form-grid">
                                {/* Name Field */}
                                <div className="form-group">
                                    <label htmlFor="fullName" className="required">Full Name</label>
                                    <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Enter your full name" required />
                                </div>
                                {/* Email Field */}
                                <div className="form-group">
                                    <label htmlFor="email" className="required">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="your.email@university.edu" required />
                                </div>
                                {/* User Type */}
                                <div className="form-group">
                                    <label htmlFor="userType" className="required">User Type</label>
                                    <select id="userType" name="userType" className="form-control" required>
                                        <option value>Select your role</option>
                                        <option value="student">Student</option>
                                        <option value="faculty">Faculty Member</option>
                                        <option value="staff">Staff Member</option>
                                        <option value="alumni">Alumni</option>
                                        <option value="guest">Guest/Visitor</option>
                                    </select>
                                </div>
                                {/* Event Attended */}
                                <div className="form-group">
                                    <label htmlFor="eventAttended" className="required">Event Attended</label>
                                    <select id="eventAttended" name="eventAttended" className="form-control" required>
                                        <option value>Select the event</option>
                                        <optgroup label="September 2025">
                                            <option value="tech-symposium-2025">Annual Tech Symposium (Sep 25)</option>
                                            <option value="basketball-championship">Basketball Championship (Sep 20)</option>
                                            <option value="cs-seminar">CS Department Seminar (Sep 18)</option>
                                            <option value="research-workshop">Research Methodology Workshop (Sep 15)</option>
                                            <option value="swimming-competition">Swimming Competition (Sep 12)</option>
                                        </optgroup>
                                        <optgroup label="August 2025">
                                            <option value="cultural-festival">Cultural Festival 2025 (Aug 28)</option>
                                            <option value="career-fair">Business Career Fair (Aug 22)</option>
                                            <option value="poetry-evening">Poetry Reading Evening (Aug 18)</option>
                                            <option value="coding-hackathon">Coding Hackathon (Aug 15)</option>
                                        </optgroup>
                                    </select>
                                </div>
                                {/* Rating Section */}
                                <div className="form-group rating-section">
                                    <label className="required">Overall Rating</label>
                                    <div className="star-rating" id="starRating">
                                        <span className="star" data-rating={1}>★</span>
                                        <span className="star" data-rating={2}>★</span>
                                        <span className="star" data-rating={3}>★</span>
                                        <span className="star" data-rating={4}>★</span>
                                        <span className="star" data-rating={5}>★</span>
                                    </div>
                                    <div className="rating-label" id="ratingLabel">Click stars to rate</div>
                                    <div className="rating-descriptions">
                                        <span>Poor</span>
                                        <span>Fair</span>
                                        <span>Good</span>
                                        <span>Very Good</span>
                                        <span>Excellent</span>
                                    </div>
                                    <input type="hidden" id="rating" name="rating" required />
                                </div>
                                {/* Comments */}
                                <div className="form-group full-width">
                                    <label htmlFor="comments">Additional Comments</label>
                                    <textarea id="comments" name="comments" className="form-control" placeholder="Please share your detailed feedback, suggestions, or any specific aspects you'd like to highlight..." rows={6} defaultValue={""} />
                                </div>
                            </div>
                            <div className="submit-section">
                                <button type="submit" className="submit-btn">
                                    Submit Feedback
                                </button>
                            </div>
                            <div className="success-message" id="successMessage">
                                <strong>✓ Thank you for your feedback!</strong><br />
                                Your response has been recorded and will help us improve future events.
                            </div>
                        </form>
                    </div>
                </div>
                <br /><br />
            </div>


        </Layout>
    )
}

export default Feedback