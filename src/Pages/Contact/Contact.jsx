import React from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center flex items-center h-[150px] w-full px-6 md:px-40"
        style={{
          backgroundImage: "url(/header_img.png)",
        }}
      >
        <div className="text-left text-white">
          <div className="text-base font-medium">
            <Link to="/" className="mr-2 hover:underline">
              Home
            </Link>
            <span className="mr-2">{">"}</span>
            <span>Contact</span>
          </div>
          <p className="text-1xl font-bold pt-3 text-[#C9A041]">Contact</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full py-16 bg-gray-100 text-black">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 px-6 md:px-20">
          {/* Left: Contact Info */}
          <div className="bg-[#152515] text-white p-8 w-full md:w-1/2 rounded-md shadow">
            <h2 className="text-2xl font-semibold mb-6 text-[#C9A041]">
              Contact Information
            </h2>
            <p className="mb-4">
              <strong className="text-[#C9A041]">Email:</strong>{" "}
              contact@example.com
            </p>
            <p className="mb-4">
              <strong className="text-[#C9A041]">Phone:</strong> +123 456 7890
            </p>
            <div>
              <p className="mb-2 font-semibold text-[#C9A041]">Follow us:</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline text-white">
                  Facebook
                </a>
                <a href="#" className="hover:underline text-white">
                  Twitter
                </a>
                <a href="#" className="hover:underline text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 w-full md:w-1/2 rounded-md shadow text-black">
            <h2 className="text-2xl font-semibold mb-6 text-[#C9A041]">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full sm:w-1/2 p-2 border rounded mb-4 sm:mb-0"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:w-1/2 p-2 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-[#C9A041] text-white px-6 py-2 rounded hover:bg-[#b28936] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
