// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import AuthCallback from "./pages/AuthCallback";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Creators from "./pages/Creators";

import AppLayout from "./layouts/AppLayout";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
);
