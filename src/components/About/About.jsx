import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-[#C9A041]">
        About{" "}
        <span className="underline underline-offset-4 decoration-[#C9A041] font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-[#C9A041] text-lg font-medium mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col mt-10 md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-[#C9A041]">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium">20+</p>
              <p>Mn.sq. ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg text-black">
            Client Point Properties is a full-service real estate brokerage firm
            dedicated to helping individuals and organizations navigate the real
            estate market with confidence. We specialize in the sales, leasing,
            and acquisition of premium residential and commercial properties, as
            well as investment advisory, joint ventures, and property
            consulting.
          </p>

          {/* ✅ Use Link to route to Aboutpage */}
          <Link to="/aboutpage">
            <button className="bg-[#C9A041] text-white px-4 py-2 rounded hover:bg-[#b48a35] transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
