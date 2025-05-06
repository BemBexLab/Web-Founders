import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative z-30 w-full px-4 sm:px-6 py-20 md:py-24 max-w-7xl mx-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* 💬 Left Side - Text */}
        <div className="relative z-20 w-full lg:w-1/2">
          <p className="text-[#ff4d2d] font-semibold mb-3">About us</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
            Discover Bembexlab Your Trusted <br className="hidden md:block" />
            Website Development Partner
          </h2>

          <p className="text-gray-400 text-base sm:text-[17px] leading-relaxed mb-10 max-w-xl">
            At Bembex lab, we specialize in providing innovative website
            development and design services that help businesses thrive in the
            digital world. With a passion for creativity and a focus on
            delivering exceptional user experiences.
          </p>

          {/* 🔘 Glossy Learn More Button */}
          <Link href='/Aboutus'>
            <button className="relative px-6 py-2.5 rounded-full text-white text-base font-light flex items-center gap-3 bg-[#1a1a1a]/60 backdrop-blur-md border border-[#ff1e00]/20 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                Learn More
              </span>
              <FaArrowRight className="relative z-10 text-white text-base transition-transform duration-300 group-hover:translate-x-1" />

              {/* 🔴 Top red shine */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-[#ff1e00] to-transparent rounded-t-full pointer-events-none" />

              {/* 🔴 Bottom hover line glow */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full" />

              {/* 🧊 Inner glossy shadow */}
              <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)] pointer-events-none" />
            </button>
          </Link>
        </div>

        {/* 🌀 Right Side - Spiral Image */}
        <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/image.png"
            alt="About Bembexlab"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
