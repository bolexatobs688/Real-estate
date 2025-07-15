import React from "react";
import { Link } from "react-router-dom"; // Use this for client-side routing
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
          <h2 className="text-5xl sm:text-6xl md:text-[50px] max-w-3xl font-semibold pt-20 mx-auto">
            Real Estate Different and Better
          </h2>
          <h2 className="text-xl md:text-[15px] max-w-3xl font-semibold pt-5 mx-auto">
            We will help find your place, invest and build wealth in Lagos
          </h2>

          {/* ✅ Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Short Stays
            </button>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Exclusive
            </button>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Rent
            </button>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Sale
            </button>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Waterfront Plot
            </button>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              Commercial
            </button>
          </div>

          {/* ✅ Optional Link to About Page */}
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-blue-600 px-5 py-2 rounded text-white hover:bg-blue-700 transition"
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
