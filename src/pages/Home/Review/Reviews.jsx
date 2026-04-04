import React, { useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import customer from "../../../assets/customer-top.png"

const reviews = [
  {
    id: 1,
    description:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
    name: "Rasel Ahamed",
    position: "CEO",
  },
  {
    id: 2,
    description:
      "Using this daily has significantly improved my posture and reduced back pain.",
    name: "Nusrat Jahan",
    position: "Software Engineer",
  },
  {
    id: 3,
    description:
      "Very comfortable and easy to wear. I noticed improvement quickly.",
    name: "Tanvir Hasan",
    position: "Student",
  },
  {
    id: 4,
    description:
      "The quality is excellent and it helps maintain a straight back.",
    name: "Mehedi Hasan",
    position: "Entrepreneur",
  },
  {
    id: 5,
    description:
      "Highly recommended for anyone struggling with posture issues.",
    name: "Farzana Akter",
    position: "Physiotherapist",
  },
  {
    id: 6,
    description:
      "It made a huge difference in reducing my shoulder pain.",
    name: "Sabbir Rahman",
    position: "Freelancer",
  },
];

export default function Reviews() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      
      {/* Top Image */}
      <img
        src={customer}
        alt="icon"
        className="mx-auto mb-4"
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
        What our customers are saying
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      
      {/*  Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto mb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            {({ isActive }) => (
              <ReviewCard review={review} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  Control Bar */}
      <div className="flex items-center justify-center gap-6 max-w-md mx-auto border-t-2 border-dotted border-gray-300 pt-6">
        
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="px-4 py-2 bg-white rounded-full text-2xl font-extrabold text-green-900 hover:bg-primary cursor-pointer"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              onClick={() => swiperRef.current.slideToLoop(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === i ? "bg-lime-700" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="px-4 py-2 bg-white rounded-full text-2xl font-extrabold text-green-900 hover:bg-primary cursor-pointer"
        >
          →
        </button>
      </div>
    </section>
  );
}