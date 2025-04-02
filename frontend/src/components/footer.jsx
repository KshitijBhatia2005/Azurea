import { Link } from "react-router-dom";
import "../../styles/Footer.css"; // Make sure you create this file

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/privacy-policy" className="footer-link">
        Privacy Policy
      </Link>
    </div>
  );
}
