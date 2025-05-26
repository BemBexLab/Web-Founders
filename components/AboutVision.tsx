"use client";

import Image from "next/image";

const OurVision = () => {
  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden">
      {/* 🔴 Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3C1B11] via-transparent to-[#ffffff08] z-0" />

      {/* 🟠 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* 📸 Left Image */}
        <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/aboutus/Rectangle 20.svg"
            alt="Vision Graphic"
            width={600}
            height={600}
            className="object-cover w-full h-auto rounded-2xl"
            priority
          />
        </div>

        {/* 📝 Right Content */}
        <div className="text-white">
          <p className="text-[#BF0B30] text-sm font-semibold mb-3">
            Our Vision
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6 text-[#002768]">
            <span className="">
              What
            </span>{" "}
            We Are Trying To
            <br />
            <span className="">
              Ac
            </span>
            complish.
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(31, 31, 31, 0.5)" }}>
            We are committed to delivering exceptional digital experiences that
            help businesses thrive in a competitive online landscape. By
            combining creativity, technology, and strategy, we focus on building
            tailored solutions that not only meet but exceed client
            expectations. Our goal is to foster long-lasting relationships,
            driving growth and innovation through every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
