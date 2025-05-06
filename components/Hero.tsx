import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const HeroWithStats = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 🌀 Arc Background Image */}
      <Image
        src="/arc-line.png"
        alt="Glow Arc"
        width={1200}
        height={600}
        className="absolute top-[160px] md:top-[200px] left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none"
      />

      {/* ✨ Hero Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 text-white text-center pt-[200px] md:pt-[320px] pb-10">
        <div className="w-full max-w-5xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Expert Website
            <br />
            Development & Design
            <br />
            Solutions
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
            We craft visually stunning, user-centric websites that drive
            results.
            <br />
            From modern design to seamless functionality, Help businesses stand
            out in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/ContactUs">
              <button className="flex items-center justify-center gap-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-red-600 text-white px-6 py-3 rounded-full hover:brightness-110 transition shadow-[0_0_12px_#ff1e00aa] text-sm sm:text-base min-h-[48px]">
                <span>Book a call</span>
                <span className="text-lg">→</span>
              </button>
            </Link>

            <Link href="/portfolio">
              <button className="flex items-center justify-center gap-3 text-white px-6 py-3 rounded-full transition text-sm sm:text-base min-h-[48px] ">
                <span className="w-12 h-12 flex items-center justify-center border border-[#ff4500] rounded-full hover:bg-[#DE2F04]">
                  <FaPlay size={10} className="text-[#ff4500] hover:-[]" />
                </span>
                <span>Explore Portfolio</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="relative z-30 w-full flex justify-center px-4 py-12 mt-[-40px]">
        <div className="relative w-full max-w-6xl rounded-3xl sm:rounded-[80px] px-6 sm:px-12 py-10 sm:py-12 text-white text-center backdrop-blur-md bg-[#1a1a1a]/40 shadow-[inset_0_-1px_1px_#ff1e00aa] overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-white/20 via-[#ff3c3c33] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-80 z-10" />

          <div className="relative z-20 grid grid-cols-2 sm:flex justify-between w-full items-center gap-8 sm:gap-0 text-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold">596</h2>
              <p className="text-xs sm:text-sm mt-2 text-gray-300">
                Happy Customers
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold">1,890+</h2>
              <p className="text-xs sm:text-sm mt-2 text-gray-300">
                Issues Solved
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold">250</h2>
              <p className="text-xs sm:text-sm mt-2 text-gray-300">
                Finished Projects
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold">04+</h2>
              <p className="text-xs sm:text-sm mt-2 text-gray-300">
                Awards Winning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithStats;
