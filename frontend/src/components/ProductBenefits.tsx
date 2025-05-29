import { useState, useEffect } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

const ProductBenefits = () => {
  const [accordionData, setAccordionData] = useState<AccordionItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Use the Vite environment variable for the API base URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/accordion`)
      .then((res) => res.json())
      .then((data) => setAccordionData(data))
      .catch((err) => console.error("Failed to fetch accordion data", err));
  }, [API_BASE_URL]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-black text-white w-full max-w-none">
      {accordionData.map((item, idx) => (
        <div key={item.title} className="border-b border-gray-700">
          <button
            className="w-full flex items-center justify-between py-6 px-4 focus:outline-none"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-normal text-2xl md:text-4xl text-left flex-1">
              {item.title}
            </span>
            <svg
              className={`w-6 h-6 ml-2 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-6 text-gray-300 transition-opacity duration-300 ease-in-out">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductBenefits;
