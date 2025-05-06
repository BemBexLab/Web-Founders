import Image from "next/image";
import bgImage from "/public/Rectangle-10.png";
import Link from "next/link";


const BehindTheScenes = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end items-center bg-black overflow-hidden pt-24 pb-32 px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[50vh] z-0">
        <Image
          src={bgImage}
          alt="Creative Background"
          fill
          priority
          quality={100}
          className="object-cover object-top"
        />
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 py-12 sm:py-14 rounded-3xl border border-[#ff4d2d]/30 backdrop-blur-xl bg-gradient-to-b from-[#ff4d2d]/30 via-black/50 to-black/90 shadow-[0_0_60px_#ff4d2d22] text-center mt-[-5%]">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#ff512f] to-[#fff] text-transparent bg-clip-text">
            Watch the creative process
          </span>
          <br />
          <span className="text-white">behind our digital works.</span>
        </h2>

        {/* Paragraph */}
        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
          At Bembex lab, our commitment to quality and excellence goes beyond
          expectations. From the initial brainstorming session.
        </p>

        {/* Button */}
        <Link href='/ContactUs'>
          <button className="px-6 py-3 rounded-full text-white text-sm font-medium bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ff4d2d]/50 shadow-[0_0_12px_#ff4d2d66] transition hover:shadow-[0_0_25px_#ff4d2d99]">
            Book a call →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BehindTheScenes;
