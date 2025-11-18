// src/pages/LoginPage.tsx
export default function LoginPage() {
  const login = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}`;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          padding: "40px 32px",
          borderRadius: 16,
          background: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 12,
            color: "#111827",
          }}
        >
          FilesPlay
        </h1>

        <p
          style={{
            color: "#6B7280",
            fontSize: 15,
            marginBottom: 28,
          }}
        >
          Sign in to continue
        </p>

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            cursor: "pointer",
            fontSize: 15,
            fontWeight: 500,
            color: "#374151",
            transition: "0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#f9fafb";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "white";
          }}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            style={{ width: 20, height: 20 }}
          />
          Login with Google
        </button>

        <p
          style={{
            marginTop: 24,
            fontSize: 13,
            color: "#9CA3AF",
          }}
        >
          Your files, your control.
        </p>
      </div>
    </div>
  );
}
