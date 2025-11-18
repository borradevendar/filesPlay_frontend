// src/pages/About.tsx
export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About FilesPlay</h1>

      <p className="mb-4">
        FilesPlay is a modern, fast and free file-conversion platform built to help 
        users quickly convert documents with maximum privacy and simplicity.
      </p>

      <p className="mb-4">
        We believe tools shouldn't be locked behind paywalls or intrusive ads. 
        Our goal is to provide a clean and accessible experience for everyone.
      </p>

      <p className="mb-4">
        Currently, FilesPlay supports converting Word documents to PDF, with many 
        more file formats planned for the future.
      </p>

      <p className="mt-6 font-semibold">
        Thank you for using FilesPlay!
      </p>
    </div>
  );
}
