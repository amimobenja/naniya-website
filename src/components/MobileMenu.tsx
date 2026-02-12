'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary-600 transition"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4">
            <a
              href="https://chama.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Chama Platform
            </a>
            <a
              href="#products"
              className="px-6 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#services"
              className="px-6 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="px-6 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
