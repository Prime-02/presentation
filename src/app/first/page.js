"use client";

import Navbar from "@assets/components/navbar/Navbar";
import React from "react";
import LandingPageBg from "../../../public/assets/images/lawchecks (4).jpg";
import Image from "next/image";
import { OnboardingTexts } from "@assets/components/index";
import { ButtonOne } from "@assets/components/reusables/buttons/Buttons";
import { CircleArrowOutUpRight } from "lucide-react";
import {motion} from 'framer-motion'
import AboutCard from "../about/AboutCard";
import FAQCard from "../faq/FAQCard";
import Footer from "@assets/components/footer/Footer";

const Page = () => {
  return (
    <>
      {/* Navbar */}

      {/* Main Section */}
      <main className="relative h-screen w-full flex md:items-end items-center justify-center bg-black md:justify-start md:pb-16">
        <Navbar />
        {/* Background Image */}
        <Image
          src={LandingPageBg}
          alt="Landing Page Background"
          className="absolute inset-0 object-cover w-full h-full opacity-35 z-0"
          priority
        />

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="z-20"
        >
          <div className="text-start text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold  max-w-4xl mb-4">
              {OnboardingTexts.heading}
            </h1>
            <div className="gap-x-16 gap-y-4 flex flex-col justify-between">
              <p className="text-lg md:text-xl">{OnboardingTexts.subHeading}</p>
              <span>
                <ButtonOne
                  buttonValue={`Get Started`}
                  iconValue={<CircleArrowOutUpRight />}
                />
              </span>
            </div>
          </div>
        </motion.div>
      </main>
      <AboutCard/>
      <FAQCard/>
      <Footer/>
    </>
  );
};

export default Page;
