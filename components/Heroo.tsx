import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A11] text-white flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-12 gap-12 md:gap-0">
      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Custom Solutions.
          <br />
          Exceptional Results.
        </h1>
        <p className="text-white/70 text-base sm:text-lg md:text-xl mb-6">
          Dive into our bespoke digital packages, crafted just for you. Whether
          it’s boosting your SEO or sparking your social media, we’re here to
          help your brand shine. Let’s make something amazing together.
        </p>
        <button className="px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base rounded-full border border-[#DE2F04] bg-[#DE2F04]/10 shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] backdrop-blur-[9.137930870056152px] transition hover:bg-[#DE2F04]/20">
          Book a call →
        </button>
      </div>

      {/* Right Section: Coin Image */}
      <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] flex-shrink-0">
        <Image
          src="/Coin3DModel1.png"
          alt="Large Coin"
          width={820}
          height={820}
          className="absolute right-0 top-0 z-10 w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 8px 32px #0008)" }}
        />
      </div>
    </section>
  );
}
