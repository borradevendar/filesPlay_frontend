// src/pages/Dashboard.tsx
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

import api from "../services/api";
import { getUser } from "../services/authService";

import Button from "../common/Button";

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api.get("/auth/profile").then((res) => setProfile(res.data));
  }, []);

  const handleBrowse = () => inputRef.current?.click();

  const handleFileSelect = (e: any) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setError("");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files[0];
    if (f) {
      setFile(f);
      setError("");
    }
  };

  const uploadFile = async () => {
    if (!file) return setError("Please select a file first.");

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await api.post("/files/convert", formData, {
        responseType: "blob", // backend returns PDF
      });

      // Create PDF blob URL
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      const pdfUrl = window.URL.createObjectURL(pdfBlob);

      // Trigger download
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${file.name.replace(/\.[^/.]+$/, "")}.pdf`;
      link.click();

      toast.success("Your PDF has been downloaded successfully!");
    } catch (err) {
      setError("Conversion failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        background: "#f7f9fc",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "white",
          padding: 40,
          borderRadius: 16,
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        }}
      >
        {/* Profile Header */}
        {profile && (
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 30 }}
          >
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                style={{ width: 60, height: 60, borderRadius: "50%" }}
              />
            ) : (
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "#ddd",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 24,
                }}
              >
                {profile?.email?.charAt(0) || "?"}
              </div>
            )}
            <div style={{ marginLeft: 16 }}>
              <p style={{ margin: 0, fontSize: 16, color: "#111" }}>
                Welcome, {profile.name}
              </p>
            </div>
          </div>
        )}

        {/* Upload Card */}
        <div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "8px",
              WebkitBackgroundClip: "text",
              color: "#1F2937",
            }}
          >
            WORD to PDF Converter
          </h1>
          <p style={{ fontSize: "14px", marginBottom: "12px" }}>
            Convert your WORD documents to PDF files with incredible accuracy.
          </p>

          {/* Drag & Drop box */}
          <div
            onDragEnter={() => setDragActive(true)}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            onClick={handleBrowse}
            style={{
              border: "2px dashed #cbd5e1",
              padding: 50,
              textAlign: "center",
              marginBottom: 20,
              borderRadius: 14,
              background: dragActive ? "#f1f5f9" : "#f8fafc",
              transition: "0.2s",
              cursor: "pointer",
            }}
          >
            <p style={{ fontSize: 16, color: "#475569" }}>
              {dragActive
                ? "Drop your file here"
                : "Drag & drop your Word file here"}
            </p>
            <p style={{ color: "#94a3b8", fontSize: 14 }}>or click to browse</p>

            <input
              type="file"
              accept=".doc,.docx"
              ref={inputRef}
              onChange={handleFileSelect}
              style={{ display: "none" }}
            />
          </div>

          {/* Selected File */}
          {file && (
            <div
              style={{
                marginTop: 20,
                marginBottom: 10,
                padding: 14,
                background: "#f1f5f9",
                borderRadius: 8,
                fontSize: 15,
                color: "#1e293b",
              }}
            >
              {file.name} ({Math.round(file.size / 1024)} KB)
            </div>
          )}

          {/* Error */}
          {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

          {/* Convert Button */}
          <Button
            onClick={uploadFile}
            isLoading={uploading}
            color="black"
            size="lg"
            className="w-full mt-6"
          > 
            Convert to PDF
          </Button>

        </div>
      </div>
    </div>
  );
}
