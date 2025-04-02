import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../styles/Auth.css"; 
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const saveUserToDatabase = async (user) => {
  try {
    const response = await fetch(`http://localhost:5000/api/users/${user.email}`);
    const existingUser = await response.json();

    if (!existingUser) {
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    }
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
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

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserToDatabase({
        email: user.email,
        name: user.displayName || "User",
        profilePicture: user.photoURL || "",
      });
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.error("Email Login Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-fade-in">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleEmailLogin} className="auth-btn animated-btn">
          Login with Email
        </button>
        <div className="divider">or</div>
        <button onClick={GoogleLogin} className="google-btn animated-btn">
          Sign in with Google
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <Footer />
    </div>
  );
}