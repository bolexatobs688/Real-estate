import React from "react";
import { assets } from "../../assets/assets";
import Footer from "../../components/footer/Footer";

const Aboutpage = () => {
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
            Vision
          </h2>
          <h2 className="text-xl md:text-[15px] inline-block max-w-3xl font-semibold pt-5">
            Offering utmost value to our clients with DIfferent & Better
            standards of luxury real estate <br /> in Lagos, Abuja and around
            the World
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto  p-14 md:px-20 lg:px-32 w-full overflow-hidden  ">
        <div className="flex flex-col mt-15 md:flex-row items-center md:items-start md:gap-20">
          <img
            src={assets.brand_img}
            alt=""
            className="w-full sm:w-1/2 max-w-lg"
          />
          <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">12+</p>
                <p>Projects Completed </p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Mn.sq. ft. Delievered</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">25+</p>
                <p>Ongoing Projects</p>
              </div>
            </div>
            <p className="my-10 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              maxime minima non illo nemo cum quam dolore laborum itaque atque,
              eos nulla. Doloremque reiciendis a accusantium reprehenderit
              sapiente velit dolor.
            </p>
            <button className="bg-blue-600 text-white px-2 py-1 rounded ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-xl font-semibold mb-2">Real Estate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a
            cupiditate quasi commodi officiis doloremque nulla beatae autem ex
            numquam omnis eveniet, sapiente porro iure optio, neque
            necessitatibus, perspiciatis amet?
          </p>
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-semibold mb-2">Real Estate</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            necessitatibus tenetur. Maiores ipsum numquam, nesciunt adipisci ut
            doloribus dignissimos eum, eius possimus soluta architecto
            voluptatem sint, vitae pariatur fugiat in.
          </p>
        </div>

        <div className="flex-1">
          <h1 className="text-xl font-semibold mb-2">Real Estate</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            molestias commodi ut nisi vel est incidunt nostrum atque, totam quo
            placeat quibusdam officiis repellat libero iure aliquam! Ratione,
            necessitatibus dolorem?
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Aboutpage;
