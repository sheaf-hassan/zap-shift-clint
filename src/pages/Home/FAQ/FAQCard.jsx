import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
      {/* Header */}
      <div
        className="flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <p className="text-[#0f7d8a] font-medium pr-4">{question}</p>
        {open ? <ChevronUp className="text-[#0f7d8a]" /> : <ChevronDown className="text-[#0f7d8a]"/>}
      </div>

      {/* Dotted line */}
      {open && (
        <div className="border-t border-dashed my-3 text-[#0f7d8a]"></div>

      )}
      {/* Answer */}
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}