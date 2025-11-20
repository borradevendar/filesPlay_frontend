function Footer() {
  return (
    <footer 
      style={{
        padding: "20px",
        background: "#111",
        color: "white",
        textAlign: "center"
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
      © {new Date().getFullYear()} Files Play — All Rights Reserved
    </footer>
  );
}

export default Footer;
