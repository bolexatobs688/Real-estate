import React from "react";
import Nav from "../Nav/Nav";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full shadow-md h-30 px-4 z-50 md:px-20 lg:px-32"
      style={{ backgroundColor: "#152515" }}
    >
      {/* Header Layout */}
      <div className="flex justify-between items-center h-full">
        {/* Navigation Toggle */}
        <div>
          <Nav />
        </div>

        {/* Logo (Smaller + Zoom on Hover) */}
        <Link to="/" className="flex-1 flex justify-center">
          <img
            src="Client_black_Logo png.png"
            className="w-8 md:w-24 transition-transform duration-300 hover:scale-105 object-contain py-2"
            alt="Logo"
          />
        </Link>

        {/* Right Side Icon linked to Contact Page */}
        <div className="flex items-center space-x-2 text-white">
          <Link to="/contact">
            <FaUser className="w-5 h-5 mr-10 cursor-pointer hover:text-[#C9A041]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
