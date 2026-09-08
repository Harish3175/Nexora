"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          NEXORA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#services"
            className="text-gray-300 hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="text-gray-300 hover:text-white transition"
          >
            Work
          </a>

          <a
            href="#contact"
            className="border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-5 bg-black">
          <div className="flex flex-col gap-5 text-sm">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}