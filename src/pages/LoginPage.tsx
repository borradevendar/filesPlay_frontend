// src/pages/LoginPage.tsx
export default function LoginPage() {
  const login = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>FilesPlay Login</h1>
      <button onClick={login}>Login with Google</button>
    </div>
  );
}
