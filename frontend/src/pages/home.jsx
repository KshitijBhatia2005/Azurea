import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"; // Import Firebase auth for logout
import "../../styles/Home.css";
import storeImage from "../../images/store-header.jpg";

export default function Home({ user }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="home-container">
      {/* Header with full-width image */}
      <header>
        <img src={storeImage} alt="Store Header" className="store-header" />
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button onClick={() => navigate("/browse")}>Browse</button>
        <button onClick={() => navigate("/ai-outfit")}>AI Outfit</button>
        <button onClick={() => navigate("/privacy-policy")}>Privacy Policy</button> {/* Added Privacy Policy button */}

        {/* Logout Button at Bottom */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Menu button on the top-left */}
      <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>

      <h2>Welcome</h2>
    </div>
  );
}
