import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="text-gray-400 mt-4">
            lorem sjdhdidjhd suidiuhdhohdhodh qdnkqhdhonhoqj qubdiuqdhoiwj
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <NavLink to="/" className="hover:text-white">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-white">
              About
            </NavLink>
            <NavLink to="/blog" className="hover:text-white">
              Blog
            </NavLink>
            <NavLink to="/contact" className="hover:text-white">
              Contact
            </NavLink>
            <NavLink to="/productList" className="hover:text-white">
              Listings
            </NavLink>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © 2024 Mayiwa Estate. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
