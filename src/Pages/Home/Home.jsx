// File: src/Pages/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Project from "../../components/Projects/Project";
import Properties from "../../components/Properties/Properties";
import Testimonal from "../../components/Testimonal/Testimonal";
import Footer from "../../components/footer/Footer";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center w-full px-4 md:px-20 lg:px-32"
        style={{
          backgroundImage: "url(/header_img.png)",
        }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          {/* Updated H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl font-bold pt-20 mx-auto leading-tight">
            Find, Buy, or Lease Properties with Confidence
          </h1>

          {/* Updated H2 */}
          <h2 className="text-lg md:text-xl max-w-3xl font-medium pt-5 mx-auto">
            At Client Point Properties, we simplify your real estate journey —
            from discovery to closing. Whether you're buying, selling, or
            leasing, our expert team is here to guide you every step of the way.
          </h2>

          {/* Primary CTA Button */}
          <div className="mt-8">
            <Link
              to="/contact" // Update this route if your contact form lives elsewhere
              className="inline-block bg-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-700 transition"
            >
              🔘 Speak to a Property Advisor
            </Link>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "Short Stays",
              "Exclusive",
              "Rent",
              "Sale",
              "Waterfront Plot",
              "Commercial",
            ].map((category) => (
              <Link
                key={category}
                to={`/productList?category=${encodeURIComponent(category)}`}
                className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Learn More Link */}
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block underline hover:text-blue-300 transition"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>

      {/* Section Components */}
      <Project />
      <Properties />
      <About />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default Home;
