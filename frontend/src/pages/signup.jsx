import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../styles/Auth.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const provider = new GoogleAuthProvider();

const saveUserToDatabase = async (user) => {
  try {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await saveUserToDatabase({
        email: user.email,
        name: "New User",
        profilePicture: "",
      });

      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.error("Signup Error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await saveUserToDatabase({
        email: user.email,
        name: user.displayName,
        profilePicture: user.photoURL,
      });

      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup} className="auth-btn">
          Sign Up
        </button>
        <button onClick={handleGoogleSignIn} className="google-btn">
          Sign Up with Google
        </button>
        {error && <p className="error-message">{error}</p>}
        <p className="redirect-text">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}
