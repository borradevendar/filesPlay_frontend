import { Link } from "react-router-dom";

import filesplayLogo from "../../public/filesplay_logo.png";

function Navbar() {
  return (
    <nav style={{
      padding: "15px 25px",
      background: "#111",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",  // ⭐ pushes items to ends
      alignItems: "center",   
    }}><div>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: 'none' }}><img 
  src={filesplayLogo} 
  alt="FilesPlay Logo" 
  style={{ height: "25px" }} 
/>
</Link>
</div>
<div style={{display: "flex", gap: "20px", paddingRight: "10px"}}>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: 'none' }}>Home</Link>
      <Link to="/creators" style={{ color: "#fff", textDecoration: 'none' }}>Creator</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: 'none' }}>About</Link>
      <Link to="/privacy" style={{ color: "#fff", textDecoration: 'none' }}>Privacy Policy</Link>
      </div>
    </nav>
  );
}

export default Navbar;
