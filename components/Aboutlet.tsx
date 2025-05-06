"use client";

import Link from "next/link";

const LetsTalk = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-[#0A0A11] flex items-center justify-center px-4 sm:px-6">
      {/* 🔴 Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[70%] sm:w-[60%] h-full bg-gradient-to-br from-[#FF3C1B33] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[90%] sm:w-[80%] h-full bg-gradient-to-tr from-[#FF3C1B22] via-transparent to-transparent" />
      </div>

      {/* 🟠 Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
            Lets
          </span>{" "}
          <span className="text-white">talk</span>
        </h2>

        <Link href="/ContactUs">
          <button className="rounded-full px-5 sm:px-6 py-3 text-white text-sm sm:text-base bg-[#1a1a1a]/60 border border-[#ff4d2d] backdrop-blur-md hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa]">
            Book a call →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LetsTalk;
