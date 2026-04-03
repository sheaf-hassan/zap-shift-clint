import React from "react";

export default function BenefitCard({ image, title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-3xl p-8 md:p-10 hover:shadow-xl transition">
      
      {/* Left Image */}
      <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 mb-6 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Vertical Dotted Line */}
      <div className="hidden md:block h-24 border-l-2 border-dotted border-gray-300 mx-8"></div>

      {/* Right Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl text-primary md:text-3xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}