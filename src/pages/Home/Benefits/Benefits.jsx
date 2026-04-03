import React from "react";
import BenefitCard from "../Benefits/BenefitCard.";
import track from "../../../assets/benefits/track.png"
import safe from "../../../assets/benefits/safe.png"
import call from "../../../assets/benefits/call.png"
const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates.",
    image: track
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe delivery.",
    image: call
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our support team is available 24/7 to assist you with any questions, updates, or delivery concerns anytime.",
    image: safe
  },
];

export default function Benefits() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      
      {/* Top Dotted Line */}
      <div className="max-w-6xl mx-auto mb-14 border-t-2 border-dotted border-gray-300"></div>

      

      <div className="space-y-8 max-w-6xl mx-auto">
        {benefits.map((item) => (
          <BenefitCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Bottom Dotted Line */}
      <div className="max-w-6xl mx-auto mt-14 border-t-2 border-dotted border-gray-300"></div>

    </section>
  );
}