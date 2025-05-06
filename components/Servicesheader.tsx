"use client";

import Image from "next/image";
import Link from "next/link";

const ServicesHeader = () => {
  return (
    <section className="relative bg-[#0A0A11] text-white  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* 🔸 Left Side: Text */}
        <div className="text-center lg:text-left z-10 px-6 lg:px-20 py-20 max-w-7xl mx-auto mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Your
            </span>{" "}
            brand.
            <br />
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Your
            </span>{" "}
            success.
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8">
            Brand agency for strategy, design and interaction from Munich
          </p>
          <Link href="/ContactUs">
            <button className="rounded-full px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
              Book a call →
            </button>
          </Link>
        </div>

        {/* 🔹 Right Side: Gears Image */}
        <div className="flex justify-center lg:justify-end relative ">
          <div className="w-full max-w-[600px]">
            <Image
              src="/Group 21.png" // or your image path
              alt="Service Gears"
              width={800}
              height={800}
              className="w-full h-auto object-cover ml-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
