import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative z-20">
      {/* Menu Icon */}
      {!showNav && (
        <button className="p-6 cursor-pointer">
          <img
            onClick={() => setShowNav(true)}
            src={assets.menu_icon}
            alt="Menu Icon"
            className="w-6"
          />
        </button>
      )}

      {/* Navigation Menu */}
      {showNav && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out">
          {/* Close Icon */}
          <div className="flex justify-end p-6">
            <button onClick={() => setShowNav(false)} aria-label="Close Menu">
              <img
                src={assets.cross_icon}
                alt="Close Icon"
                className="w-6 hover:scale-110 transition-transform"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-start px-10 space-y-4 text-lg font-medium">
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 px-6 py-3 transition-colors duration-200 rounded-full"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-red-600 px-6 py-3 transition-colors duration-200 rounded-full"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 px-6 py-3 transition-colors duration-200 rounded-full"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 px-6 py-3 transition-colors duration-200 rounded-full"
            >
              Listing
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
