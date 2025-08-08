"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-white lg:hidden z-50 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col items-center justify-center space-y-8 z-40`}
      >
        <a
          onClick={toggleMenu}
          href="#shop"
          className="text-2xl hover:text-gray-300"
        >
          Shop
        </a>
        <a
          onClick={toggleMenu}
          href="#docs"
          className="text-2xl hover:text-gray-300"
        >
          Docs
        </a>
        <a
          onClick={toggleMenu}
          href="#howitworks"
          className="text-2xl hover:text-gray-300"
        >
          How it works
        </a>
        <a
          onClick={toggleMenu}
          href="#pricing"
          className="text-2xl hover:text-gray-300"
        >
          Pricing
        </a>
        <a
          onClick={toggleMenu}
          href="#contact"
          className="text-2xl hover:text-gray-300"
        >
          Contact
        </a>
      </div>
    </>
  );
}
