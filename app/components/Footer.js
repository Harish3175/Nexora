export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 2026 Nexora. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#services" className="text-gray-400 hover:text-white transition">
            Services
          </a>

          <a href="#portfolio" className="text-gray-400 hover:text-white transition">
            Work
          </a>

          <a href="#contact" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}