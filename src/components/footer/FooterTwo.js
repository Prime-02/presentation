import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Textinput } from "../inputs/Textinput";
import Logo from "../../../public/assets/images/lawchecks (2).png";
import { ButtonTwo } from "../reusables/buttons/Buttons";

const FooterTwo = () => {
  const [footerEmail, setFooterEmail] = useState("");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand & About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src={Logo} alt="Law Checks Logo" width={50} height={50} />
              <span className="text-xl font-semibold text-white">
                Law Checks
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner for expert legal guidance. Empowering you
              with solutions for a secure future.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <Textinput
              type="email"
              label="Email Address"
              labelStyle="hidden"
              className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded-md"
              value={footerEmail}
              changed={(e) => setFooterEmail(e.target.value)}
            />
            <div className="mt-4">
              <ButtonTwo buttonValue="Subscribe" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {currentYear} Law Checks. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-blue-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm hover:text-blue-500"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
