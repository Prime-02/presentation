import Link from "next/link";
import React from "react";

const page = () => {
  const designs = [
    {
      name: "Design One",
      href: "/first",
    },
    {
      name: "Design Two",
      href: "/second",
    },
  ];

  return (
    <main className="w-full h-screen flex items-center justify-center px-8 gradient-background">
      <div className="border w-full md:w-[60%] lg:w-[50%] h-auto min-h-[50dvh] rounded-3xl bg-white shadow-lg flex flex-col items-center p-8">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-600 text-center mb-6">
          Please select a design to proceed:
        </p>

        {/* Design Selection Section */}
        <div className="w-full flex flex-col gap-4">
          {designs.map((design, i) => (
            <Link
              href={design.href}
              key={i}
              className="w-full block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              {design.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
