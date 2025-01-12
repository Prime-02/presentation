import React, { useState } from "react";
import Link from "next/link";
import { DBButtonTwo } from "@assets/components/reusables/buttons/Buttons";
import { FAQ } from "@assets/components/index";
import { ChevronDown, Plus } from "lucide-react";

const FAQCard = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <>
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col justify-between rounded-3xl p-8 gap-y-12 md:gap-x-8 h-auto ">
        <div className="space-y-5 flex-1">
          <h1 className="text-5xl  bg-gradient-to-r from-amber-800 to-amber-900 text-transparent bg-clip-text">
            {FAQ.heading}
          </h1>
        </div>
        <div className="w-full">
          {FAQ.faqData.slice(0, 1).map((category, index) => (
            <div key={index} className="mb-8 w-full">
              <div className="w-full flex flex-col md:flex-col justify-between mb-4 pb-2 items-start">
                <h2 className="text-2xl font-semibold">{category.category}</h2>
              </div>
              {category.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="rounded-lg mb-4 shadow-sm transition hover:shadow-md"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-gray-100"
                    onClick={() => toggleQuestion(q.question)}
                  >
                    {q.question}
                    <span
                      className={`transform transition-transform ${
                        activeQuestion === q.question
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeQuestion === q.question ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 card">{q.answer}</div>
                  </div>
                </div>
              ))}
              {index === 0 && (
                <Link href={"/faq"}>
                  <DBButtonTwo
                    buttonValue="See All"
                    className="w-auto px-9 rounded-lg h-auto py-2"
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQCard;
