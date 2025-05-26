"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LetsTalk = () => {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        background: "#002768",
        border: "1px solid #BF0B30",
      }}
    >
      {/* 🔴 Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[70%] sm:w-[60%] h-full bg-gradient-to-br from-[#FF3C1B33] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[90%] sm:w-[80%] h-full bg-gradient-to-tr from-[#FF3C1B22] via-transparent to-transparent" />
      </div>

      {/* 🌟 Rotating Star on Right */}
      <motion.div
        className="absolute right-[-1%] -translate-y-1/2  z-0 opacity-70 scale-[0.9] pointer-events-none"
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="603"
          height="810"
          viewBox="0 0 603 810"
          fill="none"
        >
          <path
            stroke="#FFFFFF"
            strokeWidth="0.6"
            d="M708.818 123.244L708.534 122.739L708.076 123.094L462.151 313.585L509.2 1.07444L509.287 0.5H508.706H309.029H308.456L308.534 1.0678L351.31 313.605L101.07 120.944L100.611 120.591L100.329 121.096L1.56384 297.309L1.27537 297.823L1.83039 298.023L292.552 402.861L1.8243 511.979L1.27757 512.184L1.56453 512.693L104.623 695.352L104.914 695.866L105.373 695.495L349.166 498.579L308.534 808.935L308.46 809.5H309.029H506.559H507.136L507.054 808.928L462.145 498.575L705.925 691.201L706.385 691.564L706.672 691.053L805.436 514.84L805.721 514.331L805.174 514.127L512.285 405L805.174 295.873L805.722 295.669L805.436 295.159L708.818 123.244Z"
          />
        </svg>
      </motion.div>

      {/* 🟠 Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 sm:mb-8 leading-tight">
          <span className="text-white">Lets</span>{" "}
          <span className="text-white">talk</span>
        </h2>

        <Link href="/ContactUs">
          <button
            className="px-5 sm:px-6 py-3 text-white text-sm sm:text-base hover:brightness-110 transition"
            style={{
              borderRadius: "75px",
              border: "1px solid white",
              background:
                "linear-gradient(180deg, rgba(191, 11, 48, 0.10) 41.53%, rgba(0, 39, 104, 0.10) 100%)",
              boxShadow: `
                9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset,
                -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset
              `,
              backdropFilter: "blur(9.137930870056152px)",
              WebkitBackdropFilter: "blur(9.137930870056152px)",
            }}
          >
            Book a call →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LetsTalk;
