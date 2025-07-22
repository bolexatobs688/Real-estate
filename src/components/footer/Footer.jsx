import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#152515] text-white py-10 px-4 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4 max-w-sm">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <p>
            Client Point Properties is committed to helping individuals and
            businesses achieve real estate success through expertise,
            transparency, and a client-first approach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#C9A041] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:underline">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#C9A041] mb-4">Contact</h3>
          <p>Email: info@clientpoint.com</p>
          <p>Phone: +234 123 456 7890</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Client Point Properties. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
