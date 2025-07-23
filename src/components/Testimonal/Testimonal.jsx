import React from "react";
import { assets, testimonialsData } from "../../assets/assets";

const Testimonal = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-[#C9A041]">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-[#C9A041] font-light">
          Testimonal
        </span>
      </h1>

      <p className="text-center text-[#C9A041] mb-12 max-w-80 mx-auto font-medium">
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[230px] max-h-[350px] border shadow-lg rounded px-2 py-4 text-center bg-white"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl font-semibold text-[#C9A041]">
              {testimonial.name}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-[#C9A041] mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-sm text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
