"use client";

import { useState } from "react";

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState("Website");

  const packages = [
    "Website",
    "E-commerce",
    "Website Maintenance",
    "Video Animation",
    "SEO",
    "Combo Packages",
  ];

  return (
    <section className="py-10 bg-white text-white mt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Subheading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#BF0B30] mb-8">
          Packages
        </h2>

        <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-[#002768]">
          The Perfect Plans For Your Needs
        </h3>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-4 flex-wrap">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg;
            return (
              <button
                key={pkg}
                onClick={() => setSelectedPackage(pkg)}
                className={`px-8 py-4 rounded-[75px] border text-white transition-all font-medium ${
                  isSelected
                    ? "bg-[#002768] border-[#002768]"
                    : "bg-[rgba(0,39,104,0.20)] border-[#002768] hover:bg-[#002768]/80"
                }`}
              >
                {pkg}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
