import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export default function ReviewCard({ review, isActive }) {
  return (
    <div
      className={`bg-white rounded-3xl p-8 transition-all duration-500
      ${isActive ? "scale-100 opacity-100 blur-0 shadow-xl hover:cursor-pointer" : "scale-90 opacity-90 blur-xs"}`}
    >
      {/* Quote (Top Left) */}
      <div className="text-3xl text-[#067A87] font-bold mb-4 text-left leading-none">
        <FaQuoteRight />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed text-left">
        {review.description}
      </p>

      {/* Dotted Line */}
      <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0aa4b9]"></div>

        <div className="text-left">
          <h4 className="text-black font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-700">{review.position}</p>
        </div>
      </div>
    </div>
  );
}