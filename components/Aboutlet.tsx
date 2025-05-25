"use client";

import Link from "next/link";

const LetsTalk = () => {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6"
      style={{
        background: "#002768",
        border: "1px solid #BF0B30",
      }}
    >
      {/* 🔴 Gradient Overlays (optional – you can remove if undesired) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[70%] sm:w-[60%] h-full bg-gradient-to-br from-[#FF3C1B33] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[90%] sm:w-[80%] h-full bg-gradient-to-tr from-[#FF3C1B22] via-transparent to-transparent" />
      </div>

      {/* 🟠 Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
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
