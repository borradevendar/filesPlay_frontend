// src/pages/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        FilesPlay (“we”, “our”, “us”) is committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <p>
        • Google account details (name, email, avatar)  
        • Uploaded files for conversion (temporarily stored & auto-deleted)  
        • Basic analytics such as page views  
      </p>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p>
        • To provide file conversion services  
        • To improve performance and user experience  
        • To maintain your account login sessions  
      </p>

      <h2 className="text-xl font-semibold mt-6">3. File Upload Safety</h2>
      <p>
        Uploaded files are processed temporarily and automatically deleted after conversion. 
        We do not store or analyze your documents.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Third-Party Services</h2>
      <p>
        We may use Google services (OAuth, analytics, ads).  
        These services may collect data as described in their privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Cookies & Local Storage</h2>
      <p>
        We use cookies/local storage to store authentication tokens securely.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Contact</h2>
      <p>
        If you have questions, contact us at: <strong>support@filesplay.com</strong>
      </p>
    </div>
  );
}
