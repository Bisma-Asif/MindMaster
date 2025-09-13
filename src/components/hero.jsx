import React from "react";
import homeData from "../data/homeData.json";

const HomeSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="welcome-message">{homeData.welcomeMessage}</h1>
        <p className="welcome-subtitle">{homeData.welcomeSubtitle}</p>

        <div className="banner-slider">
          {homeData.slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === 0 ? "active" : ""}`}
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
  );
};

export default HomeSection;
