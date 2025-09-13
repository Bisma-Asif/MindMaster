import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./Home.css";
import hero from "../components/hero.json";
import upcomingEvents from "../data/upcomingevents.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Modal alert

export default function Home({ userData }) {
  const [events, setEvents] = useState(upcomingEvents);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Welcome modal
  useEffect(() => {
    if (userData?.userName) {
      let role = "Student";

      if (userData?.userStatus) {
        const status = userData.userStatus.toLowerCase();
        if (status === "faculty") role = "Faculty";
        else if (status === "guest") role = "Guest";
        else if (status === "student") role = "Student";
      }

      Swal.fire({
        title: `Welcome back, ${userData.userName}! 🎉`,
        text: `You are logged in as ${role}`,
        icon: "success",
        confirmButtonText: "Let's Go 🚀",
      });
    } else {
      Swal.fire({
        title: "Welcome to Campus Connect 🎉",
        text: "Discover upcoming events and stay connected with campus life!",
        icon: "info",
        confirmButtonText: "Explore Events",
      });
    }
  }, [userData]);

  // ✅ Hero Slider
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % hero.slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // ✅ Countdown simulation
  useEffect(() => {
    function updateCountdowns() {
      setEvents((prev) =>
        prev.map((ev) => {
          const newCountdown = ev.countdown.map((num) => {
            let n = num;
            if (n > 0 && Math.random() > 0.7) {
              n = n - 1;
            }
            return n;
          });
          return { ...ev, countdown: newCountdown };
        })
      );
    }
    const id = setInterval(updateCountdowns, 30000);
    return () => clearInterval(id);
  }, []);

  // ✅ Card animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".event-card, .feature-card");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.6s ease";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1 className="welcome-message">
              {userData?.userName
                ? `Welcome back, ${userData.userName}! 🎉`
                : hero.welcomeMessage}
            </h1>
            <p className="welcome-subtitle">
              {userData?.userStatus
                ? `You are logged in as ${userData.userStatus}`
                : hero.welcomeSubtitle}
            </p>

            {/* Banner Slider */}
            <div className="banner-slider">
              {hero.slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="slide-content">
                    <h3>{slide.title}</h3>
                    <p>{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section id="events" className="section">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {events.map((ev) => (
              <div className="event-card" key={ev.id}>
                <div className="event-image">
                  <img src={ev.img} alt={ev.title} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">{ev.title}</h3>
                  <p className="event-date">{ev.date}</p>
                  <div className="countdown">
                    <div className="countdown-item">
                      <span className="countdown-number">{ev.countdown[0]}</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">{ev.countdown[1]}</span>
                      <span className="countdown-label">Min</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">{ev.countdown[2]}</span>
                      <span className="countdown-label">Sec</span>
                    </div>
                  </div>
                  <p className="event-description">{ev.description}</p>
                  <Link to="/event-details" className="learn-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="section">
          <h2 className="section-title">Why Choose CampusConnect?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3 className="feature-title">Easy Event Discovery</h3>
              <p className="feature-description">
                Never miss an important campus event with our comprehensive
                event calendar and notification system.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Quick Registration</h3>
              <p className="feature-description">
                Register for events with just a few clicks through our
                streamlined registration process.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Mobile Friendly</h3>
              <p className="feature-description">
                Access all features on any device with our responsive design
                that works perfectly on mobile and desktop.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3 className="feature-title">Real-time Updates</h3>
              <p className="feature-description">
                Stay informed with instant notifications about event changes,
                deadlines, and new announcements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
