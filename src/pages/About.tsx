export default function About() {
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
      {/* Header */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "16px",
          background: "linear-gradient(to right, #2563EB, #3B82F6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About FilesPlay
      </h1>

      {/* Description Card */}
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
          <strong>FilesPlay</strong> is a modern, fast, and free file conversion tool
          designed to make your workflow simple and stress-free. Upload a file,
          hit convert, download — that’s it.
        </p>

        <p style={{ marginBottom: "16px", fontSize: "16px" }}>
          We believe essential tools should be open, accessible, and reliable —
          without paywalls, or complicated interfaces.
        </p>

        <p style={{ marginBottom: "16px", fontSize: "16px" }}>
          Today, FilesPlay supports converting <strong>Word → PDF</strong>.
          In upcoming releases, we plan to add more document and media formats.
        </p>

        <p
          style={{
            marginTop: "24px",
            fontWeight: 600,
            fontSize: "17px",
            color: "#374151",
          }}
        >
          Thank you for using FilesPlay ❤️  
          <br />
          We’re just getting started.
        </p>
      </div>
    </div>
  );
}
