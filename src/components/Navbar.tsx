import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import filesplayLogo from "../../public/filesplay_logo.png";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../services/authService";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}`;
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white relative">
      
      {/* Logo */}
      <Link to="/dashboard" className="flex items-center">
        <img 
          src={filesplayLogo} 
          alt="FilesPlay Logo" 
          className="h-6"
        />
      </Link>

      {/* Right Menu */}
      <div className="flex items-center gap-6 pr-4">
        <Link to="/dashboard" className="hover:text-gray-300">Home</Link>
        <Link to="/creators" className="hover:text-gray-300">Creator</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>

        {/* AUTH SECTION */}
        {!user ? (
          // 🔑 Login button when NOT logged in
          <button
            onClick={login}
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </button>
        ) : (
          // Avatar + dropdown
          <div className="relative">
            <img
              src={user.avatarUrl}
              alt="User Avatar"
              className="h-8 w-8 rounded-full border cursor-pointer hover:opacity-80"
              onClick={() => setOpen(!open)}
            />

            {/* Dropdown menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                {/* <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link> */}

                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    logout();      // clear tokens
                    setUser(null); // update context
                    setOpen(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
