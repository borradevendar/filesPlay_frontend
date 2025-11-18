export default function Creators() {
  return (
    <div
      style={{
        maxWidth: "720px",
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
          marginBottom: "20px",
          background: "linear-gradient(to right, #F59E0B, #FBBF24)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Meet the Creator
      </h1>

      {/* Card */}
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid #E5E7EB",
        }}
      >
        <p style={{ marginBottom: "16px", fontSize: "16px" }}>
          Hi! I'm <strong>Devendar</strong> — a young Computer Science graduate who
          built <strong>FilesPlay</strong> entirely from scratch. This project started
          from a simple idea:  
          <em style={{ color: "#6B7280" }}>
            “Tools should be free, fast, and accessible to everyone.”
          </em>
        </p>

        <p style={{ marginBottom: "16px", fontSize: "16px" }}>
          I’m currently building and maintaining FilesPlay on my own, but I plan to
          invite open-source contributors soon to help expand the platform. My goal
          is to make FilesPlay the simplest and most reliable file-conversion tool
          on the internet.
        </p>

        <p style={{ marginBottom: "20px", fontSize: "16px" }}>
          If you find this project valuable, you can support me by buying me a
          coffee ☕.  
          <br />
          Your support helps cover server costs and encourages future development.
        </p>

        {/* Buy Me a Coffee Button */}
        <a
          href="https://buymeacoffee.com/devendar"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#FACC15",
            padding: "12px 20px",
            borderRadius: "12px",
            fontWeight: 600,
            color: "#1F2937",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#FDE047";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#FACC15";
          }}
        >
          Buy Me a Coffee ☕
        </a>
      </div>
    </div>
  );
}
