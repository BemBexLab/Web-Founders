import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative z-30 w-full px-4 sm:px-6 py-20 md:py-24 max-w-7xl mx-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* 💬 Left Side - Text */}
        <div className="relative z-20 w-full lg:w-1/2">
          <p className="text-[#BF0B30] font-semibold mb-3">About us</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-6 text-[#1F1F1F]">
            Discover Web Founder Your Trusted <br className="hidden md:block" />
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

        {/* 🌀 Right Side - Spiral Image */}
        <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/mainpage/image (5).svg"
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
