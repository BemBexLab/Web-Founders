"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 md:px-16 bg-[#0A0A11] text-white"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight">
        Kind words from
        <span className="text-[#A855F7]"> satisfied clients</span>
      </h2>

      <div className="flex flex-col items-center gap-12">
        {/* Testimonials Carousel */}
        <div className="h-[28rem] sm:h-[30rem] w-full max-w-6xl rounded-xl overflow-hidden relative border border-white/10 backdrop-blur-md">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Trusted Companies */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 w-full">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/5 rounded-xl px-3 sm:px-4 py-2 shadow-sm backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <img
                src={company.img}
                alt={company.name}
                className="w-6 sm:w-8 md:w-10 object-contain"
              />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="w-20 sm:w-24 md:w-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
