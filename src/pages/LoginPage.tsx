import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LandingPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) navigate("/dashboard");
    else window.location.href = import.meta.env.VITE_API_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center px-6">

      {/* Hero Section */}
      <div className="max-w-3xl text-center mt-24">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Organize, Convert & Manage Your Files <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Faster Than Ever
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          FilesPlay helps you convert documents, manage uploads, and keep everything in one simple, efficient workspace.
        </p>

        <button
          onClick={handleGetStarted}
          className="px-8 py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
        >
          {user ? "Go to Dashboard" : "Get Started"}
        </button>
      </div>

      {/* Feature Section */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl w-full text-center mb-12">

        <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:border-gray-500 transition">
          <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
          <p className="text-gray-400 text-sm">
            Convert and manage files instantly with our optimized processing engine.
          </p>
        </div>

        <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:border-gray-500 transition">
          <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
          <p className="text-gray-400 text-sm">
            Your files stay private with secure authentication and encrypted upload handling.
          </p>
        </div>

        <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-700 hover:border-gray-500 transition">
          <h3 className="text-xl font-semibold mb-3">Universal Formats</h3>
          <p className="text-gray-400 text-sm">
            Convert between PDF, DOCX, Images, ZIP and many more formats seamlessly.
          </p>
        </div>

      </div>

    </div>
  );
}
