import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative z-50">
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

      {/* Right Side Navigation Panel (NO overlay) */}
      {showNav && (
        <div className="fixed top-0 right-0 h-full bg-white z-50 w-[80%] max-w-sm shadow-lg transition-transform duration-300 ease-in-out">
          {/* Header: Title & Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setShowNav(false)}
              aria-label="Close Menu"
              className="focus:outline-none"
            >
              <img
                src={assets.cross_icon}
                alt="Close Icon"
                className="w-6 hover:scale-110 transition-transform"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-8 pt-8 space-y-6 text-xl font-medium">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowNav(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowNav(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowNav(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowNav(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/productList"
              className="text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowNav(false)}
            >
              Listing
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
