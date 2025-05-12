"use client";

import Image from "next/image";

const PortfolioGallery = () => {
  return (
    <section className="relative w-full bg-[#0A0A11] text-white px-6 lg:px-20 pt-16 pb-24">
      {/* 🔻 Filter Tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["SHOPIFY", "WORDPRESS", "WEB DEVELOPMENT", "UI UX DESIGN", "FIGMA DESIGN", "LOGO DESIGN", "BRANDING","ILLUSTRATION", "PRINT"].map(
          (label) => (
            <span
              key={label}
              className="px-4 py-1.5 text-sm sm:text-base rounded-full bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_8px_#ff1e00aa] cursor-pointer"
            >
              {label}
            </span>
          )
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
