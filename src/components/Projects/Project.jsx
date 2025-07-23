import React, { useState } from "react";
import { assets, projectsData } from "../../assets/assets";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-4 px-6 md:px-20 lg:px-20 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-[#C9A041]">
        Best Luxury Listings in Lagos
      </h1>
      <h2 className="text-center text-[#C9A041] mb-8 max-w-80 mx-auto">
        Some of the finest Luxury listings in the market, handpicked just for
        you
      </h2>
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="previous project"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="next project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-[#C9A041]">
                    {project.title}
                  </h2>
                  <p className="text-[#C9A041] text-sm">
                    {project.price}
                    <span className="px-1" /> {project.location}
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

export default Project;
