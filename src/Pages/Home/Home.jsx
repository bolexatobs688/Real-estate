// File: src/Pages/Home/Home.jsx (or wherever your Home component is)
import React from "react";
import { Link } from "react-router-dom";
import Project from "../../components/Projects/Project";
import Properties from "../../components/Properties/Properties";
import Testimonal from "../../components/Testimonal/Testimonal";
import Footer from "../../components/footer/Footer";
import About from "../../components/About/About";

const Home = () => {
  const categories = [
    "Short Stays",
    "Exclusive",
    "Rent",
    "Sale",
    "Waterfront Plot",
    "Commercial",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center w-full px-4 md:px-20 lg:px-32"
        style={{ backgroundImage: "url(/header_img.png)" }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 px-6 text-white">
          <h2 className="text-5xl md:text-[50px] max-w-3xl font-semibold pt-20 mx-auto">
            Real Estate Different and Better
          </h2>
          <h2 className="text-xl md:text-[15px] max-w-3xl font-semibold pt-5 mx-auto">
            We will help find your place, invest and build wealth in Lagos
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => (
              <Link
                to={`/productList?category=${encodeURIComponent(cat)}`}
                key={cat}
                className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* About Link */}
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

      <Project />
      <Properties />
      <About />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default Home;
