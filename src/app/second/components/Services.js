import React from "react";
import {
  FaUsers,
  FaGavel,
  FaBuilding,
  FaHome,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    heading: "Family Law",
    icon: <FaUsers/>,
    text: "Legal matters concerning family relationships, such as marriage, divorce, child custody, and related financial issues.",
  },
  {
    heading: "Criminal Law",
    icon: <FaGavel/>,
    text: "Representation and defense in criminal cases, including offenses ranging from minor infractions to serious felonies.",
  },
  {
    heading: "Corporate Law",
    icon: <FaBuilding/>,
    text: "Legal services for businesses, including formation, governance, compliance, contracts, mergers, and intellectual property rights.",
  },
  {
    heading: "Real Estate Law",
    icon: <FaHome/>,
    text: "Guidance on property transactions, including buying, selling, leasing, and disputes over real estate ownership and use.",
  },
  {
    heading: "Immigration Law",
    icon: <FaGlobe/>,
    text: "Assistance with visa applications, citizenship processes, and legal representation for individuals facing immigration issues.",
  },
  {
    heading: "Employment Law",
    icon: <FaUserTie/>,
    text: "Providing legal counsel on workplace rights, discrimination, wrongful termination, labor contracts, and employee benefits.",
  },
];

const Services = () => {
  return (
    <main className="flex items-center justify-center w-full h-auto min-h-screen">
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold uppercase text-center text-gray-800 mb-12">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-amber-600 group transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl text-amber-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-2 group-hover:text-white transition-all duration-300">
                  {service.heading}
                </h3>
                <p className="text-sm text-gray-600 text-center group-hover:text-white transition-all duration-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
