// src/pages/Creators.tsx
export default function Creators() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Meet the Creator</h1>

      <p className="mb-4">
        Hi! I'm <strong>Devendar</strong>, a young Computer Science graduate who 
        built FilesPlay completely from scratch. This project started as a 
        personal passion — to create a free and open file-conversion tool that 
        anyone can use without limits.
      </p>

      <p className="mb-4">
        I am working alone on this platform right now, but I plan to invite open-source 
        contributors to help expand its features. My vision is to make FilesPlay 
        the simplest and most useful file conversion tool on the internet.
      </p>

      <p className="mb-4">
        If you find the project helpful, you can support me by buying me a coffee. ❤️  
        Your support helps me pay server costs and continue improving this platform.
      </p>

      <a
        href="https://buymeacoffee.com/"
        target="_blank"
        className="inline-block bg-yellow-400 px-4 py-2 rounded-lg font-semibold text-black shadow hover:bg-yellow-300 transition"
      >
        Buy Me a Coffee ☕
      </a>
    </div>
  );
}
