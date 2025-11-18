export default function PrivacyPolicy() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 24px",
        color: "#1F2937",
        lineHeight: 1.7,
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "24px",
          background: "linear-gradient(to right, #6366F1, #8B5CF6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Privacy Policy
      </h1>

      {/* Card */}
      <div
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid #E5E7EB",
        }}
      >
        <p style={p}>
          This Privacy Policy explains how FilesPlay (“we”, “our”, “us”) collects,
          processes, and protects your information when you use our services.
        </p>

        {/* Section 1 */}
        <h2 style={title}>1. Overview</h2>
        <p style={p}>
          FilesPlay is designed with privacy and security as core principles. We only
          collect the minimum amount of information required to operate our services,
          and we do not sell your data.
        </p>

        {/* Section 2 */}
        <h2 style={title}>2. Information We Collect</h2>

        <h3 style={sub}>2.1 Account Information</h3>
        <ul style={ul}>
          <li>Name (from Google OAuth)</li>
          <li>Email address</li>
          <li>Profile image (avatar)</li>
        </ul>

        <h3 style={sub}>2.2 File Uploads</h3>
        <p style={p}>
          When you upload files for conversion, they are processed temporarily on our
          secure server. Files are **automatically deleted** after conversion and never
          stored permanently.
        </p>

        <h3 style={sub}>2.3 Usage & Analytics Data</h3>
        <p style={p}>We may collect anonymized usage metrics such as:</p>
        <ul style={ul}>
          <li>Pages visited</li>
          <li>Conversion types used</li>
          <li>Approximate device information (browser, OS)</li>
        </ul>

        <p style={note}>
          No personally identifiable analytics data is collected without your consent.
        </p>

        {/* Section 3 */}
        <h2 style={title}>3. How We Use Your Information</h2>
        <ul style={ul}>
          <li>To operate and improve our file conversion services</li>
          <li>To authenticate your account via Google OAuth</li>
          <li>To maintain login sessions</li>
          <li>To detect misuse or security threats</li>
        </ul>

        {/* Section 4 */}
        <h2 style={title}>4. File Processing & Security</h2>
        <ul style={ul}>
          <li>Files are processed securely inside temporary storage.</li>
          <li>Files are **never analyzed, viewed, or manually accessed**.</li>
          <li>Files are **auto-deleted immediately after conversion**.</li>
          <li>Your files are **never shared with third parties**.</li>
        </ul>

        {/* Section 5 */}
        <h2 style={title}>5. Third-Party Services</h2>
        <p style={p}>We may use the following services:</p>
        <ul style={ul}>
          <li>Google OAuth (for login)</li>
          <li>Google Analytics (anonymous usage stats)</li>
          <li>Google AdSense (optional advertising)</li>
        </ul>
        <p style={p}>
          These services operate under their own privacy policies and may collect
          certain data independently.
        </p>

        {/* Section 6 */}
        <h2 style={title}>6. Cookies & Local Storage</h2>
        <p style={p}>
          We use local storage/cookies **only to store login tokens**.  
          We do not use tracking cookies without consent.
        </p>

        {/* Section 7 */}
        <h2 style={title}>7. Data Retention</h2>
        <ul style={ul}>
          <li>OAuth profile data is retained until account deletion.</li>
          <li>Temporary files are deleted automatically after conversion.</li>
          <li>Analytics data may be retained in anonymized form.</li>
        </ul>

        {/* Section 8 */}
        <h2 style={title}>8. Your Rights</h2>
        <p style={p}>Depending on your location, you may have the right to:</p>
        <ul style={ul}>
          <li>Request deletion of your account</li>
          <li>Request deletion of stored login data</li>
          <li>Opt out of analytics and ads</li>
        </ul>

        {/* Section 9 */}
        <h2 style={title}>9. Children's Privacy</h2>
        <p style={p}>
          FilesPlay does not knowingly collect information from individuals under 13
          years of age.
        </p>

        {/* Section 10 */}
        <h2 style={title}>10. Updates to This Policy</h2>
        <p style={p}>
          This Privacy Policy may be updated to reflect changes in our services or
          legal obligations. Updates will be posted on this page.
        </p>

        {/* Section 11 */}
        <h2 style={title}>11. Contact</h2>
        <p style={p}>
          For questions, please contact us at:  
          <br />
          <strong>filesplay.contact@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}

/* Shared Inline Styles */

const title = {
  fontSize: "22px",
  fontWeight: 600,
  marginTop: "28px",
  marginBottom: "12px",
  color: "#374151",
};

const sub = {
  fontSize: "18px",
  fontWeight: 500,
  marginTop: "20px",
  marginBottom: "8px",
  color: "#4B5563",
};

const p: React.CSSProperties = {
  marginBottom: "16px",
  fontSize: "16px",
};

const ul: React.CSSProperties = {
  paddingLeft: "20px",
  marginBottom: "16px",
  fontSize: "16px",
  listStyle: "disc",
};

const note: React.CSSProperties = {
  background: "#F3F4F6",
  padding: "12px",
  borderRadius: "8px",
  fontSize: "15px",
  marginBottom: "16px",
  color: "#374151",
};
