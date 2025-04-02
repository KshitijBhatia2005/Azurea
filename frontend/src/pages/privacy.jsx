import React from "react";
import "../../styles/privacy.css"; // Ensure styles are linked

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 2nd April 2025</p>

        <h2>1. Information We Collect</h2>
        <h3>a. Personal Information</h3>
        <ul>
          <li>Azurea</li>
          <li>azurea2024@gmail.com</li>
          <li>Profile picture (optional)</li>
          <li>Body type and size (optional, for better AI recommendations)</li>
          <li>Account authentication details (Google Sign-In, if used)</li>
        </ul>

        <h3>b. Usage Data</h3>
        <ul>
          <li>Interactions with our app (e.g., favorite outfits, browsing history)</li>
          <li>Device information (browser type, operating system)</li>
          <li>IP address and location (if permitted)</li>
        </ul>

        <h3>c. Third-Party Data</h3>
        <ul>
          <li>Pinterest API data (to fetch fashion trends and recommendations)</li>
          <li>Payment and transaction data (if applicable)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide AI-generated outfit recommendations</li>
          <li>To improve user experience and personalize recommendations</li>
          <li>To process transactions (if applicable)</li>
          <li>To enhance security and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell or rent your personal data. However, we may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> To help operate our platform (e.g., hosting, analytics, AI processing)</li>
          <li><strong>Third-Party APIs:</strong> Such as Pinterest, for retrieving fashion-related data</li>
          <li><strong>Legal Authorities:</strong> If required by law or to protect our rights</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access, loss, misuse, or disclosure. However, no online service can be 100% secure.</p>

        <h2>5. Your Rights and Choices</h2>
        <ul>
          <li><strong>Access & Correction:</strong> You can update or delete your personal information from your account settings.</li>
          <li><strong>Opt-Out:</strong> You may opt out of data collection features (such as personalized recommendations) by adjusting your preferences.</li>
          <li><strong>Account Deletion:</strong> You can request account deletion by contacting us.</li>
        </ul>

        <h2>6. Third-Party Links</h2>
        <p>Our Service may contain links to third-party websites (e.g., product purchase pages). We are not responsible for their privacy practices.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this policy from time to time. Any changes will be posted here, and continued use of the Service implies acceptance of the revised policy.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us at: <strong>Azurea2024@gmail.com</strong></p>
      </div>
    </div>
  );
};

export default Privacy;
