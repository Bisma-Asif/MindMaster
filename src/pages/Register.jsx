import React, { useState } from "react";
import "./Register.css";
import events from "../data/events.json";
import Layout from "../components/Layout";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    contact: "",
    event: "",
    countryCode: "+92"
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    const temp = {};

    // Strong regex
    if (!/^[A-Za-z]{2,30}$/.test(formData.firstName))
      temp.firstName = "First name: 2-30 letters only";
    if (!/^[A-Za-z]{2,30}$/.test(formData.lastName))
      temp.lastName = "Last name: 2-30 letters only";
    if (!/^[A-Za-z0-9]{2,20}$/.test(formData.rollNo))
      temp.rollNo = "Roll number: 2-20 letters/digits";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      temp.email = "Enter valid email";
    if (!/^\d{7,15}$/.test(formData.contact))
      temp.contact = "Contact: 7-15 digits";
    if (!formData.event) temp.event = "Select an event";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Save data to localStorage
      const stored = JSON.parse(localStorage.getItem("registrations")) || [];
      localStorage.setItem(
        "registrations",
        JSON.stringify([...stored, formData])
      );

      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        rollNo: "",
        email: "",
        contact: "",
        event: "",
        countryCode: "+92"
      });
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit} className="register-form" noValidate>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="John"
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Doe"
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Roll Number</label>
              <input
                type="text"
                value={formData.rollNo}
                onChange={(e) =>
                  setFormData({ ...formData, rollNo: e.target.value })
                }
                placeholder="CS123"
              />
              {errors.rollNo && <span className="error">{errors.rollNo}</span>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@mail.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Contact</label>
              <div className="contact-wrapper">
                <select
                  value={formData.countryCode}
                  onChange={(e) =>
                    setFormData({ ...formData, countryCode: e.target.value })
                  }
                >
                  <option value="+92">+92</option>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  placeholder="3001234567"
                />
              </div>
              {errors.contact && <span className="error">{errors.contact}</span>}
            </div>

            <div className="input-group">
              <label>Select Event</label>
              <select
                value={formData.event}
                onChange={(e) =>
                  setFormData({ ...formData, event: e.target.value })
                }
              >
                <option value="">-- Select Event --</option>
                {events.map((ev) => (
                  <option key={ev.id} value={ev.name}>
                    {ev.name}
                  </option>
                ))}
              </select>
              {errors.event && <span className="error">{errors.event}</span>}
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content">
            <h3>Registration Successful!</h3>
            <p>You have been registered for the event.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Register;
