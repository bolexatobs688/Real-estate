import React from "react";
import { assets, projectsData } from "../../assets/assets";

const Properties = () => {
  return (
    <div
      className="container mx-auto py-4 pt-4 px-6 md:px-20 lg:px-7 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-[#C9A041]">
        Top Luxuries in Lagos
      </h1>
      <h2 className="text-center text-[#C9A041] mb-8 max-w-80 mx-auto">
        Some of the finest Luxury listings in the market, handpicked just for
        you
      </h2>

      <div className="overflow-hidden mr-0">
        <div className="flex gap-10 transition-transform duration-500 ease-in-out w-full">
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-15"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-[#C9A041]">
                    {project.title}
                  </h2>
                  <p className="text-[#C9A041] text-sm">
                    {project.price}
                    <span className="px-1" />
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
