import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// logos
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import start from "../../../assets/brands/start.png";
import start_people1 from "../../../assets/brands/start_people1.png";

const ClientLogosSlider = () => {
  const logos = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    start,
    start_people1,
  ];

  // Doubling the array ensures there's enough content to loop without gaps
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16  overflow-hidden bg-amber-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">Trusted By</h2>
        <p className="text-gray-500 mt-2">
          Companies that trust our services
        </p>
      </div>

      {/* This CSS is vital for the "Marquee" effect. 
          It ensures the movement doesn't 'ease in/out' but moves at a constant pace.
      */}
      <style>
        {`
          .marquee-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        speed={2000} // Speed of the transition (higher = slower/smoother)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // <-- THIS PAUSES THE SCROLL ON HOVER
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="marquee-swiper"
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center py-4 ">
            <img
              src={logo}
              alt={`brand-logo-${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientLogosSlider;