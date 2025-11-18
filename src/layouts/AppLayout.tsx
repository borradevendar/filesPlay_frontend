// src/layouts/AppLayout.tsx
import Footer from "../pages/components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content */}
      <main className="flex-grow">{children}</main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
