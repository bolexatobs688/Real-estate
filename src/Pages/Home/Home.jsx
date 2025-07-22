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
    <div className="bg-[#F2F2F2] text-white">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center w-full px-4 md:px-20 lg:px-32"
        style={{
          backgroundImage: "url(/header_img.png)",
        }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
          {/* H1 with gold color and white outline */}
          <h1
            className="text-5xl sm:text-6xl md:text-[50px] max-w-3xl font-semibold pt-20 mx-auto"
            style={{
              color: "#C9A041",
              textShadow: "1px 1px 2px white",
            }}
          >
            Real Estate Different and Better
          </h1>

          {/* H2 with same gold and outline */}
          <h2
            className="text-xl md:text-[15px] max-w-3xl font-semibold pt-5 mx-auto"
            style={{
              color: "#C9A041",
              textShadow: "1px 1px 2px white",
            }}
          >
            We will help find your place, invest and build wealth in Lagos
          </h2>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-full font-semibold 
          bg-[#152515] text-white border-2 border-[#C9A041] 
          hover:bg-[#1f3b1f] hover:border-[#d9aa45] transition"
            >
              🔘 Speak to a Property Advisor
            </Link>
          </div>

          {/* Filter Buttons - Styled like CTA */}
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
                className="inline-block px-6 py-3 rounded-full font-semibold 
            bg-[#152515] text-white border-2 border-[#C9A041] 
            hover:bg-[#1f3b1f] hover:border-[#d9aa45] transition"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Learn More Link */}
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block underline text-white hover:text-[#C9A041] transition"
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
