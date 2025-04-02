import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase";
import Login from "../../pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Browse from "./pages/Browse"; // Import Browse Page
import Privacy from "./pages/Privacy";
import { Link } from "react-router-dom";
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Redirect to Signup if user is not logged in */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/signup" />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/browse" element={user ? <Browse /> : <Navigate to="/signup" />} /> {/* Protect Browse Page */}
      </Routes>
    </Router>
  );
}
