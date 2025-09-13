import React, { useState } from "react";
import Layout from "../components/Layout";
import "./Contact.css";


import facultyData from "../data/faculty.json";
import studentsData from "../data/students.json";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!/^[A-Za-z ]{3,30}$/.test(formData.name))
      temp.name = "Name must be 3-30 letters only";

    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
      temp.email = "Enter a valid email";

    if (!/^\+?\d{10,15}$/.test(formData.phone))
      temp.phone = "Enter valid phone (10-15 digits)";

    if (formData.message.trim().length < 10)
      temp.message = "Message must be at least 10 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Layout>
      <div className="contact-container">
        <div className="header">
          <h1>Event Coordinators</h1>
          <p>Meet the people who make our events successful</p>
        </div>

        {/* --- Top Grid (Cards) --- */}
        <div className="cards-grid">
          {[...facultyData, ...studentsData].map((c) => (
            <div className="coordinator-card" key={c.email}>
              <div className="card-header">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.name}
                    className="coordinator-img"
                  />
                )}
                <div className="coordinator-name">{c.name}</div>
                <div className="coordinator-designation">{c.designation}</div>
                <div className="coordinator-department">{c.department}</div>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href={`tel:${c.phone}`} className="contact-link">
                    {c.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href={`mailto:${c.email}`} className="contact-link">
                    {c.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Grid (Form + Map) --- */}
        <div className="bottom-grid">
          {/* Contact Form */}
          <div className="form-card">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} noValidate>
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <div className="error">{errors.name}</div>}

              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <div className="error">{errors.email}</div>}

              <label>Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && <div className="error">{errors.phone}</div>}

              <label>Message</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              {errors.message && <div className="error">{errors.message}</div>}

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Leaflet Map */}
          <div className="map-card">
            <h2>Our Location</h2>
            <div className="map-box">
              <MapContainer
                center={[24.8607, 67.0011]}
                zoom={13}
                scrollWheelZoom={false}
                className="map-embed"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.8607, 67.0011]}>
                  <Popup>Our University</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
