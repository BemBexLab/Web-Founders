"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const PortfolioHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A11] text-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14 md:gap-10 relative z-10">
        {/* 🔥 Left Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Our Results-Driven
            <br />
            Project Showcase
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8">
            We take pride in delivering projects that drive measurable results.
            Our work is a testament to our commitment to excellence, where each
            project is carefully crafted to meet specific business goals. From
            concept to execution, we focus on creating impactful solutions that
            not only fulfill client expectations but also contribute to their
            ongoing success.
          </p>

          <Link href="/ContactUs">
            <div className="flex justify-center lg:justify-start">
              <button className="rounded-full px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
                Book a call →
              </button>
            </div>
          </Link>
        </div>

        {/* 🎯 Right Image */}
        <div className="relative flex justify-center lg:justify-end items-end mt-10 lg:mt-0">
          <div className="w-[80%] sm:w-[60%] md:w-[450px] lg:w-[600px] xl:w-[750px]">
            <Image
              src="/banner-graphics 2.png"
              alt="3D Ring"
              width={750}
              height={750}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* 🔻 Diagonal Animated Red Tape */}
      <div className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 w-[300%] rotate-[5deg] bg-[#FF3C1B] z-20 py-3 sm:py-4">
        <motion.div
          className="whitespace-nowrap text-white text-base sm:text-lg md:text-xl font-extrabold px-6 tracking-wider"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR
          WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK
          ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶ OUR WORK ✶
          OUR WORK ✶ OUR WORK ✶
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
