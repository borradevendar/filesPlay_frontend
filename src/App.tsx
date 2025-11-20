import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div
      className="app-wrapper"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sticky Navbar */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Content */}
      <main
        style={{flex: 1, textAlign:"justify"}}
      >
        <Outlet />
      </main>

      {/* Sticky Footer */}
      <div style={{ position: "sticky", bottom: 0, zIndex: 1000 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
