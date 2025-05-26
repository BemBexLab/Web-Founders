"use client";

import Image from "next/image";
import Link from "next/link";

const ServicesHeader = () => {
  return (
    <section className="min-h-screen bg-white text-white px-4 sm:px-6 lg:px-20 pt-20 lg:pt-24 pb-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* ✅ Left Side: Text Content */}
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-[#002768]">
           Your <span className="text-black">Brand.</span> <br /> Your <span className="text-black">Success.</span>
          </h1>

         <p
  className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl"
  style={{ color: "rgba(31, 31, 31, 0.5)" }}
>
  Brand agency for strategy, design and interaction from Munich.
</p>


          <Link href="/ContactUs">
            <button
  className="px-5 sm:px-6 py-3 text-whoite text-sm hover:brightness-110 transition"
  style={{
    borderRadius: "75px",
    border: "1px solid #002768",
    background: "#002768",
    boxShadow: `
      9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset,
      -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset
    `,
    backdropFilter: "blur(9.137930870056152px)",
    WebkitBackdropFilter: "blur(9.137930870056152px)",
  }}
>
  Book a call  →
</button>
          </Link>
        </div>

        {/* ✅ Right Side: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[550px] xl:max-w-[650px]">
            <Image
              src="/service/image (10).svg"
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

export default ServicesHeader;
