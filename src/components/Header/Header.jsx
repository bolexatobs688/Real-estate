import React from "react";
import Nav from "../Nav/Nav";
import { FaUser } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black shadow-md h-28 px-4 z-50 md:px-20 lg:px-32">
      {/* Header Layout */}
      <div className="flex justify-between items-center h-full">
        <div>
          <div>
            <Nav />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={assets.logo_dark} className="w-30" alt="Logo" />
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <FaUser className="text-green-600 w-5 h-5 mr-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
