import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AboutUsText } from "@assets/components/index";
import {
  ButtonOne,
  ButtonTwo,
} from "@assets/components/reusables/buttons/Buttons";

// Counter Animation Hook
const useCounter = (to, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const value = Math.floor(progress * to);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return count;
};

const AboutCard = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="px-8">
      {/* Section 1 */}
      <div className="min-h-screen w-full flex justify-center items-center mb-16">
        <section className="flex flex-col md:flex-row justify-between w-[75%] mx-auto gap-8">
          {/* Title Animation */}
          <motion.div
            className="text-5xl font-bold text-gray-800"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Trigger when 50% in view
          >
            {AboutUsText.title}
          </motion.div>

          {/* Heading Animation */}
          <motion.div
            className="text-lg md:max-w-xl flex flex-col text-gray-600"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Trigger when 50% in view
          >
            <p>{AboutUsText.heading}</p>
            <ButtonOne buttonValue={`See More`} className={`w-32 mt-5`} />
          </motion.div>
        </section>
      </div>

      {/* Section 2 */}
      <section className="flex flex-col items-center justify-evenly md:w-[75%] w-full mx-auto py-16">
        <motion.h1
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center mb-8"
        >
          {AboutUsText.firstSection.title}
        </motion.h1>
        <div className="flex flex-col-reverse md:flex-row md:items-start items-center md:justify-between w-full gap-12">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            {/* Counter Animation for the First Point */}
            <h1 className="text-5xl md:text-7xl font-bold">
              {useCounter(AboutUsText.firstSection.points[0].value, 2)}
            </h1>
            <p className="text-lg max-w-md mt-4">
              {AboutUsText.firstSection.points[0].text}
            </p>
            <span className="w-full">
              <ButtonTwo
                buttonValue={`Get Started`}
                className={"rounded-md w-full mt-8"}
              />
            </span>
          </motion.div>
          <div className="flex flex-col gap-y-8">
            {AboutUsText.firstSection.points.slice(1, 3).map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * i, // Incremental delay for each item
                }}
              >
                {/* Counter Animation for Each Point */}
                <h1 className="text-5xl md:text-7xl font-bold">
                  {useCounter(point.value, 2)}%
                </h1>
                <p className="text-lg max-w-md mt-4">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 flex items-center justify-center">
        <div className="px-6 py-10 md:w-[75%] w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              {AboutUsText.secondSection.title}
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              {AboutUsText.secondSection.subHeading}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {AboutUsText.secondSection.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * i, // Incremental delay for each item
                }}
                className="flex flex-col items-start p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-xl mb-4">{point.icon}</div>
                <p className="text-lg text-gray-600">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutCard;
