"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@assets/components/index";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <div className="min-h-screen w-full pt-20">
      <section className="w-full h-screen flex justify-center items-start">
        <div className="text-center h-[60%] w-full bg-gradient-to-t from-amber-500 to-amber-600 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-white text-start font-bold uppercase">
            frequently asked questions
          </h1>
        </div>
      </section>
      <section className="w-full px-5 py-10">
        <motion.div
          initial={{ opacity: 0, translateY: 0 }}
          whileInView={{ opacity: 1, translateY: -300 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md bg-white/50 flex flex-col h-full rounded-2xl shadow-lg md:w-[85%] mx-auto p-6"
        >
          <div className="space-y-5 mb-10 text-center">
            <h1 className="text-3xl font-semibold text-amber-600">
              {FAQ.heading}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{FAQ.text}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FAQ.faqData.map((category, index) => (
              <div key={index} className="rounded-lg shadow-md p-6 bg-white">
                <h2 className="text-xl font-bold text-amber-600 mb-4">
                  {category.category}
                </h2>
                {category.questions.map((q, idx) => (
                  <div key={idx} className="mb-4">
                    <button
                      className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
                      onClick={() => toggleQuestion(q.question)}
                    >
                      {q.question}
                      <span
                        className={`transform transition-transform ${
                          activeQuestion === q.question
                            ? "rotate-45"
                            : "rotate-0"
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
                      <p className="text-gray-600 mt-2">{q.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default page;
