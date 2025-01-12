"use client";
import React, { useEffect, useState } from "react";
import AboutImage from "../../../../public/assets/images/lawchecks (9).jpg";
import AboutImageTwo from "../../../../public/assets/images/lawchecks (2).jpg";
import AboutImageThree from "../../../../public/assets/images/lawchecks (3).jpg";
import Image from "next/image";
import { AboutUsText } from "@assets/components/index";
import { DBButtonTwo } from "@assets/components/reusables/buttons/Buttons";
import { motion } from "framer-motion";
const AboutCard = () => {
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
  return (
    <>
      <main className="flex  items-center justify-center h-screen w-full px-5 md:px-12">
        <div className="h-auto min-h-[50dvh] w-full flex flex-col md:flex-row justify-between items-center p-4 bg-amber-950 text-white">
          <motion.div
            initial={{ translateY: 0 }}
            whileInView={{ translateY: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full md:max-w-[50%] relative flex justify-center items-center rounded-2xl overflow-hidden  shadow-2xl bg-black"
          >
            <Image
              src={AboutImage}
              alt="About Image"
              className="w-full h-auto  object-contain opacity-30"
            />
            <h2 className="text-xl font-semibold mb-4 absolute top-1/3 left-10">
              About <br />{" "}
              <strong className="text-4xl bg-gradient-to-r from-amber-600 to-amber-500 text-transparent bg-clip-text">
                {AboutUsText.companyName}
              </strong>
            </h2>
          </motion.div>
          <div className="flex flex-col justify-center items-start px-4">
            <p className="text-lg text-white">{AboutUsText.heading}</p>
            <DBButtonTwo
              buttonValue={`Get Started with Us`}
              className={`mt-8`}
            />
          </div>
        </div>
      </main>

      {/* Section 2 */}
      <section className="flex flex-col items-center justify-evenly md:w-[75%] w-full mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-center mb-8"
        >
          <h1>
            {AboutUsText.firstSection.title.split(" ").slice(0, -2).join(" ")}{" "}
            <strong className="bg-gradient-to-r from-amber-800 to-amber-900 text-transparent bg-clip-text">
              {AboutUsText.firstSection.title.split(" ").slice(-2).join(" ")}
            </strong>
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row-reverse md:items-start items-center md:justify-between w-full gap-12">
          <div className="flex flex-col gap-y-8 md:w-1/2 px-5">
            {AboutUsText.firstSection.points.map((point, i) => (
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
                <h1 className="text-5xl md:text-7xl font-bold text-amber-600">
                  {useCounter(point.value, 2)}%
                </h1>
                <p className="text-lg max-w-md mt-4">{point.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-2xl justify-center md:w-1/2 hidden md:flex"
          >
            <Image
              src={AboutImageTwo}
              alt=""
              className="max-w-full h-auto" // Ensure image scales properly
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 flex items-center justify-center">
        <div className="px-6 py-10 md:w-[75%] w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-amber-900 text-transparent bg-clip-text">
              {AboutUsText.secondSection.title}
            </h1>
            <p className="text-lg mt-4">
              {AboutUsText.secondSection.subHeading}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div>
              {AboutUsText.secondSection.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, translateY: 20 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * i, // Incremental delay for each item
                  }}
                  className="flex flex-col cursor-pointer hover:border-b items-start p-6 "
                >
                  <p className="text-2xl font-bold ">{point.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl justify-center md:w-1/2 hidden md:flex"
            >
              <Image
                src={AboutImageThree}
                alt=""
                className="max-w-full h-auto" // Ensure image scales properly
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
