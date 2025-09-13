import { useState } from "react";
import "./modal.css";

export default function UserSelector({ onComplete }) {
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [showNameModal, setShowNameModal] = useState(true);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const handleNameSubmit = () => {
    if (userName.trim() === "") return;
    setShowNameModal(false);
    setShowUserModal(true);
  };

  const handleUserSelect = (type) => {
    setUserType(type);
    setShowUserModal(false);
    setShowWelcomeModal(true);

    // ✅ Save data in localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("userStatus", type);

    // Redirect after 3s
    setTimeout(() => {
      setShowWelcomeModal(false);
      if (onComplete) onComplete();
    }, 3000);
  };

  const getUserTitle = () => {
    switch (userType) {
      case "student":
        return "Student";
      case "faculty":
        return "Faculty";
      case "guest":
        return "Guest";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Name Modal */}
      {showNameModal && (
        <div className="user-modal">
          <div className="modal-content">
            <h2>Welcome to CampusConnect</h2>
            <p>Please enter your name to continue:</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              style={{ padding: "10px", borderRadius: "8px", width: "80%" }}
            />
            <br />
            <button
              className="user-btn"
              onClick={handleNameSubmit}
              style={{ marginTop: "15px" }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* User Type Modal */}
      {showUserModal && (
        <div className="user-modal">
          <div className="modal-content">
            <h2>Hello, {userName}!</h2>
            <p>Please select your user type to continue:</p>
            <div className="user-options">
              <button
                className="user-btn"
                onClick={() => handleUserSelect("student")}
              >
                Student
              </button>
              <button
                className="user-btn"
                onClick={() => handleUserSelect("faculty")}
              >
                Faculty
              </button>
              <button
                className="user-btn"
                onClick={() => handleUserSelect("guest")}
              >
                Guest
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="welcome-modal active">
          <div className="welcome-content">
            <h2>
              Welcome, {userName} ({getUserTitle()})!
            </h2>
            <p>Redirecting you to the CampusConnect homepage...</p>
          </div>
        </div>
      )}
    </>
  );
}
