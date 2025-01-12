import React, { useState } from "react";
import Link from "next/link";
import { ButtonTwo } from "@assets/components/reusables/buttons/Buttons";
import { FAQ } from "@assets/components/index";
import { Plus } from "lucide-react";
import FAQImage from "../../../public/assets/images/lawchecks (2).jpg";
import Image from "next/image";

const FAQCard = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <>
      <div className="w-[90%] md:w-[85%] mx-auto card flex flex-col md:flex-row justify-between rounded-3xl p-8 gap-y-12 md:gap-x-8 h-auto ">
        <div className="space-y-5 flex-1">
          <h1 className="text-5xl">{FAQ.heading}</h1>
          <p className="font-light text-sm md:text-md md:max-w-md">
            {FAQ.text}
          </p>
          <div className="items-center justify-center hidden md:flex h-1/2 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={FAQImage}
              alt="FAQ"
              className="object-cover w-full h-full "
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {FAQ.faqData.slice(0, 2).map((category, index) => (
            <div key={index} className="mb-8 w-full">
              <div className="w-full flex justify-between mb-4 pb-2 items-center">
                <h2 className="text-2xl font-semibold">{category.category}</h2>
                {index === 0 && (
                  <Link href={"/faq"}>
                    <ButtonTwo
                      buttonValue="See All"
                      className="w-auto h-auto px-4 py-2"
                    />
                  </Link>
                )}
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
                        activeQuestion === q.question ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <Plus />
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQCard;
