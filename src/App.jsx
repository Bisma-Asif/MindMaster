import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Feedback from "./pages/Feedback";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import About from "./pages/About";
import Register from "./pages/Register";
import EventCalendar from "./pages/EventCalender";
import { useState, useEffect } from "react";
import UserSelector from "./components/UserModal";

function App() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [data, setData] = useState({ userName: "", userStatus: "" });

  // ✅ Load user data from localStorage
  useEffect(() => {
    let name = localStorage.getItem("userName");
    let status = localStorage.getItem("userStatus");
    setData({ userName: name, userStatus: status });
  }, []);

  return (
    <>
      <BrowserRouter>
        {!showHomepage && (
          <UserSelector onComplete={() => setShowHomepage(true)} />
        )}

        {showHomepage && (
          <Routes>
            <Route path="/" element={<Home userData={data} />} />
            <Route path="/about" element={<About />} />
            <Route path="/eventcalender" element={<EventCalendar />} />
            <Route path="/eventDetails" element={<EventDetails />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/event-details" element={<EventDetails />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
