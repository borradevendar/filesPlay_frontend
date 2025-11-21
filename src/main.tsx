// src/main.tsx
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import LoginPage from "./pages/LoginPage";
import AuthCallback from "./pages/AuthCallback";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Creators from "./pages/Creators";
import AuthProvider from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LoginPage />} />
            <Route path="auth/callback" element={<AuthCallback />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="about" element={<About />} />
            <Route path="creators" element={<Creators />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
