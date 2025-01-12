'use client'
import FooterTwo from '@assets/components/footer/FooterTwo'
import NavTwo from '@assets/components/navbar/NavTwo'
import React from 'react'
import LandingPageImages from '../../../public/assets/images/lawchecks (8).jpg'
import { AboutUsText, FAQ, OnboardingTexts } from '@assets/components/index'
import Image from 'next/image'
import Services from './components/Services'
import AboutCard from './components/AboutCard'
import FAQCard from './components/FAQCard'
import {motion} from 'framer-motion'

const page = () => {
  return (
    <>
      <NavTwo />
      <main className="h-screen bg-black flex justify-center items-center w-full md:hidden relative">
        <Image
          src={LandingPageImages}
          className="opacity-45"
          alt="Background Image"
          layout="fill"
          objectFit="cover" // Ensures the image covers the container
          priority // Ensures faster loading for this critical image
        />
        <section className="font-bold z-10 w-fit p-5">
          <div className="text-start text-white space-y-5 max-w-xl">
            <h1 className="text-4xl">{OnboardingTexts.headingTwo}</h1>
            <p className="font-thin tracking-wide text-sm">
              {OnboardingTexts.subHeadingTwo}
            </p>
          </div>
        </section>
      </main>

      <main className="md:flex hidden flex-row justify-between items-center w-full h-screen">
        <section className="h-full flex justify-center mr-5 w-1/2 items-center">
          <motion.div
            initial={{ translateX: -200 }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit text-start mx-auto space-y-5 max-w-xl"
          >
            <h1 className="text-4xl uppercase">
              {OnboardingTexts.headingTwo.split(" ").slice(0, -4).join(" ")}
              <br />
              <span className="text-4xl bg-gradient-to-r from-amber-800 to-amber-900 text-transparent bg-clip-text font-extrabold">
                {OnboardingTexts.headingTwo.split(" ").slice(-4).join(" ")}
              </span>
            </h1>

            <p className="text-sm font-bold tracking-tight">
              {OnboardingTexts.headingTwo}
            </p>
          </motion.div>
        </section>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-1/2 flex items-center justify-center"
        >
          <Image
            src={LandingPageImages}
            alt=""
            className="w-full h-full object-contain rounded-r-full"
          />
        </motion.div>
      </main>
      <Services />
      <AboutCard />
      <FAQCard />
      <FooterTwo />
    </>
  );
}

export default page