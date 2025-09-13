import React from 'react'
import Layout from '../components/Layout'
import "./About.css"

function About() {
    return (
        <Layout>
            <div className="container">
                <div className="about-header">
                    <h1 style={{ color: '#e8f2ff' }}>CAMPUS CONNECT COLLEGE</h1>
                    <p>Excellence in Education, Innovation in Technology</p>
                    <p>Building tomorrow's leaders through comprehensive education and dynamic campus life</p>
                </div>
                <div className="main-content">
                    {/* College Information Section */}
                    <div className="section">
                        <h2><span className="icon">🏛️</span>About Our Institution</h2>
                        <div className="college-info">
                            <div className="info-card">
                                <h4>Institution Details</h4>
                                <p><strong>Name:</strong> CAMPUS CONNECT COOLEGE</p>
                                <p><strong>Location:</strong> DHA ^ Karachi,Pakistan</p>
                                <p><strong>Affiliation:</strong> Karachi University of Technology</p>
                                <p><strong>Established:</strong> 1995</p>
                                <p><strong>Campus Area:</strong> 150 Acres</p>
                            </div>
                            <div className="info-card">
                                <h4>Campus Highlights</h4>
                                <p>🏆 <span className="highlight">NAAC A++ Accredited</span></p>
                                <p>🔬 State-of-the-art Research Facilities</p>
                                <p>💡 Innovation &amp; Incubation Center</p>
                                <p>🌐 International Collaborations</p>
                                <p>👥 Industry Partnership Programs</p>
                                <p>📚 Digital Library with 50,000+ Resources</p>
                            </div>
                        </div>
                        <div className="info-card" style={{ marginTop: 20 }}>
                            <h4>Recognition &amp; Achievements</h4>
                            <p>• Ranked among <strong>Top 50 Engineering Colleges</strong> in the region</p>
                            <p>• <strong>ISO 9001:2015</strong> Certified for Quality Management</p>
                            <p>• Winner of <strong>Best Campus Innovation Award 2024</strong></p>
                            <p>• <strong>95% Placement Rate</strong> with top-tier companies</p>
                            <p>• Over <strong>200 Research Publications</strong> in the last 3 years</p>
                        </div>
                    </div>
                    {/* Annual Events Section */}
                    <div className="section">
                        <h2><span className="icon">🎉</span>Key Annual Events</h2>
                        <div className="events-grid">
                            <div className="event-category">
                                <h4><span className="icon">💻</span>Technical Events</h4>
                                <div className="event-item">
                                    <h5>TechnoFest <span className="event-month">March</span></h5>
                                    <p>Our flagship technical symposium featuring project exhibitions, paper presentations, and industry workshops. Attracts over 2000 participants from 50+ colleges.</p>
                                </div>
                                <div className="event-item">
                                    <h5>CodeCrunch Hackathon <span className="event-month">October</span></h5>
                                    <p>48-hour coding marathon focusing on innovative solutions for real-world problems. Prize pool of ₹2 lakhs.</p>
                                </div>
                                <div className="event-item">
                                    <h5>RoboWars Championship <span className="event-month">February</span></h5>
                                    <p>National-level robotics competition featuring combat robots, line followers, and autonomous vehicles.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Innovation Expo <span className="event-month">November</span></h5>
                                    <p>Showcasing student research projects and startup ideas with industry mentors and investors.</p>
                                </div>
                            </div>
                            <div className="event-category">
                                <h4><span className="icon">🎭</span>Cultural Events</h4>
                                <div className="event-item">
                                    <h5>Apex Annual Day <span className="event-month">January</span></h5>
                                    <p>Grand celebration featuring cultural performances, award ceremonies, and guest lectures by industry leaders.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Harmony Music Night <span className="event-month">September</span></h5>
                                    <p>Inter-collegiate music competition featuring classical, contemporary, and fusion performances.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Expressions Dance Festival <span className="event-month">April</span></h5>
                                    <p>Vibrant dance competition showcasing various forms from classical to hip-hop.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Literary Fest <span className="event-month">August</span></h5>
                                    <p>Celebrating literature through poetry, storytelling, debates, and creative writing competitions.</p>
                                </div>
                            </div>
                            <div className="event-category">
                                <h4><span className="icon">⚽</span>Sports &amp; Activities</h4>
                                <div className="event-item">
                                    <h5>Inter-College Sports Meet <span className="event-month">December</span></h5>
                                    <p>Week-long tournament featuring cricket, football, basketball, badminton, and athletics.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Blood Donation Drive <span className="event-month">June &amp; December</span></h5>
                                    <p>Bi-annual social initiative in partnership with local blood banks, collecting 500+ units annually.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Alumni Homecoming <span className="event-month">February</span></h5>
                                    <p>Annual reunion bringing together graduates for networking, mentorship, and knowledge sharing.</p>
                                </div>
                                <div className="event-item">
                                    <h5>Environmental Week <span className="event-month">June</span></h5>
                                    <p>Tree plantation drives, sustainability workshops, and eco-friendly initiatives.</p>
                                </div>
                            </div>
                        </div>
                        {/* Event Timeline */}
                        <div className="timeline">
                            <h3 style={{ color: 'rgb(6, 6, 6)' }}>Event Calendar Overview</h3>
                            <div className="timeline-item">
                                <div className="timeline-month">JAN</div>
                                <div className="timeline-events">
                                    <h5>New Year Celebrations &amp; Annual Day</h5>
                                    <p>Month kicks off with grand annual celebrations and achievement recognition ceremonies</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-month">FEB</div>
                                <div className="timeline-events">
                                    <h5>RoboWars &amp; Alumni Meet</h5>
                                    <p>Technical competitions and alumni networking events strengthen community bonds</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-month">MAR</div>
                                <div className="timeline-events">
                                    <h5>TechnoFest - Flagship Event</h5>
                                    <p>Our biggest technical symposium attracting participants from across the country</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-month">APR-AUG</div>
                                <div className="timeline-events">
                                    <h5>Cultural Season</h5>
                                    <p>Dance festivals, literary events, and various cultural competitions throughout summer</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-month">SEP-DEC</div>
                                <div className="timeline-events">
                                    <h5>Tech &amp; Sports Quarter</h5>
                                    <p>Hackathons, innovation expos, and major sports tournaments conclude the year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Organizing Bodies Section */}
                    <div className="section">
                        <h2><span className="icon">👥</span>Organizing Bodies &amp; Teams</h2>
                        <div className="organizing-bodies">
                            <div className="body-card">
                                <h4>Student Council</h4>
                                <p>Main governing body for student activities, welfare, and academic coordination. Elected annually by student body.</p>
                            </div>
                            <div className="body-card">
                                <h4>Technical Society</h4>
                                <p>Organizes all technical events, workshops, and competitions. Comprises department-wise technical clubs.</p>
                            </div>
                            <div className="body-card">
                                <h4>Cultural Committee</h4>
                                <p>Plans and executes all cultural programs, festivals, and artistic competitions throughout the year.</p>
                            </div>
                            <div className="body-card">
                                <h4>Sports Committee</h4>
                                <p>Manages sports facilities, organizes tournaments, and coordinates inter-collegiate competitions.</p>
                            </div>
                            <div className="body-card">
                                <h4>Event Management Team</h4>
                                <p>Professional event coordination for large-scale programs, logistics, and external collaborations.</p>
                            </div>
                            <div className="body-card">
                                <h4>Alumni Association</h4>
                                <p>Maintains connections with graduates, facilitates mentorship programs, and organizes reunion events.</p>
                            </div>
                        </div>
                        <div className="info-card" style={{ marginTop: 30 }}>
                            <h4>Event Organization Structure</h4>
                            <p>• <strong>Faculty Coordinators:</strong> Academic oversight and guidance for all events</p>
                            <p>• <strong>Student Volunteers:</strong> 500+ active volunteers across various committees</p>
                            <p>• <strong>Industry Partners:</strong> 20+ corporate sponsors and mentors for events</p>
                            <p>• <strong>External Collaborations:</strong> Partnerships with other colleges and universities</p>
                            <p>• <strong>Media &amp; Publicity:</strong> Dedicated team for marketing and documentation</p>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default About