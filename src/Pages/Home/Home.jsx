import React from "react";
import Project from "../../components/Projects/Project";
import Properties from "../../components/Properties/Properties";
import Testimonal from "../../components/Testimonal/Testimonal";
import Footer from "../../components/footer/Footer";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center overflow-hidden w-full px-4 md:px-20 lg:px-32"
        style={{
          backgroundImage: "url(/header_img.png)",
        }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[50px] inline-block max-w-3xl font-semibold pt-20">
            Real Estate Different and Better
          </h2>
          <h2 className="text-xl md:text-[15px] inline-block max-w-3xl font-semibold pt-5">
            We will help find your place, invest and build wealth in Lagos
          </h2>

          {/* ✅ Button group now inside the container, under the headings */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Short Stays
            </a>
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Exclusive
            </a>
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Rent
            </a>
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Sale
            </a>
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Waterfront Plot
            </a>
            <a href="#" className="border border-white px-4 py-2 rounded-full">
              Commercial
            </a>
          </div>
        </div>
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Properties />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Testimonal />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
