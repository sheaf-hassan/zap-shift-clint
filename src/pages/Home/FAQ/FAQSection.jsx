import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";
import FAQCard from "./FAQCard";

export default function FAQSection() {
  const [openMain, setOpenMain] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, it is designed to fit most body types and is adjustable for comfort."
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Yes, it helps align your spine and reduces strain, improving posture over time."
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some models include smart alerts to notify you when posture is incorrect."
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You can subscribe with your email to receive stock notifications."
    },
    {
      q: "Can I wear it under clothes?",
      a: "Yes, it is lightweight and discreet under most clothing."
    },
    {
      q: "How long should I wear it daily?",
      a: "Start with 15-30 minutes and gradually increase usage."
    },
    {
      q: "Is it comfortable for long-time use?",
      a: "Yes, it is made with breathable materials for extended comfort."
    },
    {
      q: "Does it require charging?",
      a: "Only smart versions require charging; basic ones do not."
    },
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl text-[#0f7d8a] md:text-4xl font-bold mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* ✅ SAME WIDTH AS CARDS */}
      <div className="max-w-3xl mx-auto bg-[#E6F2F3] rounded-xl shadow-sm p-6 mb-10">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenMain(!openMain)}
        >
          <h3 className="text-lg text-[#0f7d8a] font-semibold">
            How does this posture corrector work?
          </h3>
          {openMain ? <ChevronUp className="text-[#0f7d8a]" /> : <ChevronDown className="text-[#0f7d8a]"/>}
        </div>

        {openMain && (
            <div className="border-t text-[#0f7d8a] border-dashed my-4"></div>
        )}

        {openMain && (
          <p className="text-gray-600 leading-relaxed">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. It helps train your muscles and
            improves posture consistency.
          </p>
        )}
      </div>

      {/* FAQ Cards */}
      <div className="max-w-3xl mx-auto flex flex-col gap-5 mb-10">
        {visibleFaqs.map((item, index) => (
          <FAQCard
            key={index}
            question={item.q}
            answer={item.a}
          />
        ))}
      </div>

      {/* ✅ TOGGLE BUTTON */}
      <div className="flex justify-center items-center gap-3">
        
        {/* Dynamic text */}
        <div className="px-6 py-3 bg-primary hover:bg-yellow-300 text-black border rounded-full font-medium">
          {showAll ? "Show Less FAQ’s" : "See More FAQ’s"}
        </div>

        {/* Functional Arrow */}
        <button
          onClick={() => setShowAll(!showAll)}
          className={`w-12 h-12 rounded-full bg-black text-primary hover:cursor-pointer flex items-center justify-center transition transform ${
            showAll ? "rotate-180" : "rotate-0"
          }`}
        >
          <ArrowUpRight size={20} />
        </button>

      </div>
    </section>
  );
}