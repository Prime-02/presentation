import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Textinput } from "../inputs/Textinput";
import Logo from "../../../public/assets/images/lawchecks.png";
import personel from "../../../public/assets/images/lawchecks (8).jpg";
import { ButtonTwo } from "../reusables/buttons/Buttons";
import { AboutUsText, navItems } from "../index";

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4 md:w-1/3">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <Image src={Logo} alt="Logo" className="bg-white object-cover" />
            </div>
            <div>
              <h2 className="font-bold text-xl">{AboutUsText.companyName}</h2>
              <p className="text-sm text-gray-400">{AboutUsText.description}</p>
            </div>
          </div>

          <h3 className="font-semibold text-lg mt-6">Quick Navigation</h3>
          <ul className="space-y-2">
            {navItems.map((links, index) => (
              <li key={index}>
                <Link href={links.href} className="hover:text-blue-400 text-sm">
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Section - About and Contact */}
        <div className="flex flex-col items-start space-y-4 md:w-1/3">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={personel}
                alt="Founder"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">Cozein</h4>
              <p className="text-sm text-gray-400">Founder</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            We are here to empower you with expert legal guidance for a secure
            future.
          </p>

          <div className="flex space-x-4 mt-6">
            <ButtonTwo buttonValue="Contact Us" />
          </div>
        </div>

        {/* Right Section - Newsletter & Address */}
        <div className="flex flex-col items-start space-y-4 md:w-1/3">
          <h3 className="font-semibold text-lg">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-400">
            Stay updated with the latest news, expert tips, industry trends, and
            exciting projects delivered straight to your inbox!
          </p>
          <Textinput
            type="text"
            label="Enter Your Email"
            labelStyle="bg-transparent text-white"
            className="border-b border-gray-400 bg-transparent text-white"
            value={footerEmail}
            changed={(e) => setFooterEmail(e.target.value)}
          />

          <div className="mt-8 text-sm text-gray-400">
            <p>12 Okwu Street, Umuahia North, Owerri, Imo State, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal */}
      <div className="bg-gray-900 py-6 mt-8 text-center text-sm">
        <p>&copy; {currentYear} Law Check. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href={"/"} className="text-blue-400">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-blue-400">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
