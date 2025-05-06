"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <section className="min-h-screen bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-20 pt-20 lg:pt-24 pb-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* ✅ Left Side: Text Content */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#ffb199] to-[#ff0844] text-transparent bg-clip-text">
              Passionate
            </span>
            <span className="text-white"> About </span>
            <span className="bg-gradient-to-r from-[#b75c3c] to-white text-transparent bg-clip-text">
              W
            </span>
            <span className="text-white">ebsite Development.</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl">
            We craft visually stunning, user-centric websites that drive
            results. From modern design to seamless functionality, Help
            businesses stand out in the digital world.
          </p>

          <Link href="/ContactUs">
            <button className="rounded-full px-5 sm:px-6 py-3 text-white text-sm bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
              Book a call →
            </button>
          </Link>
        </div>

        {/* ✅ Right Side: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] xl:max-w-[650px]">
            <Image
              src="/image.png"
              alt="Swirl Graphic"
              width={800}
              height={800}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
