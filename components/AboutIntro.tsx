"use client";

const AboutIntro = () => {
  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-start">
        {/* 🔸 Left Content */}
        <div>
          <p className="text-[#BF0B30] text-sm font-semibold mb-3 sm:mb-4">
            About us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#002768]">
            <span className="">
              Discover Bembexlab
            </span>
            <span className="">
              Your Trusted Website
            </span>
            <span className="">
              Development Partner
            </span>
          </h2>
        </div>

        {/* 🔹 Right Content */}
        <div className=" text-sm sm:text-base leading-relaxed space-y-5"  style={{ color: "rgba(31, 31, 31, 0.5)" }}>
          <p>
            At Bembex Lab, we combine innovation and technical expertise
            to deliver top-tier web development and design solutions.
            Established with a vision to create impactful digital experiences.
          </p>
          <p>
            Our team has been crafting websites that not only look great but
            also perform flawlessly. We stay ahead of industry trends, ensuring
            your business stands out in a competitive online space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
