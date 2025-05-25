"use client";

import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 🧡 Left Side – Text */}
        <div>
          <p className="text-[#BF0B30] text-sm font-semibold mb-3 sm:mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#002768]">
            <span className="">Wh</span>
            <span className="">
              at
            </span>{" "}
            <span className="">We Are Trying To</span>
            <br />
            <span className="">
              Ac
            </span>
            <span className="">complish.</span>
          </h2>

          <p className=" text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "rgba(31, 31, 31, 0.5)" }}>
            Our mission is to empower businesses by creating innovative and
            functional digital solutions that drive growth and success. We aim
            to blend cutting-edge design with flawless development, ensuring
            every project is tailored to meet our clients’ unique needs. Our
            goal is to establish long-term partnerships, helping brands build a
            strong and lasting online presence.
          </p>
        </div>

        {/* 🖼️ Right Side – Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
            <Image
              src="/aboutus/image (7).svg"
              alt="Mission Illustration"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
