export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "20px",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "14px",
        color: "#6B7280", // gray-500
        background: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "10px",
        }}
      >
        <a href="/dashboard" style={{ color: "#6B7280", textDecoration: "none" }}>
          Home
        </a>
        <a href="/about" style={{ color: "#6B7280", textDecoration: "none" }}>
          About
        </a>
        <a
          href="/creators"
          style={{ color: "#6B7280", textDecoration: "none" }}
        >
          Creator
        </a>
        <a
          href="/privacy"
          style={{ color: "#6B7280", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
      </div>

      <p style={{ marginTop: "10px" }}>
        © {new Date().getFullYear()} FilesPlay. All rights reserved.
      </p>
    </footer>
  );
}
