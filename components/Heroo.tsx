import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0A11] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0">
      {/* Left Section: Heading & Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
          Custom Solutions.
          <br />
          Exceptional Results.
        </h1>
        <p className="text-white/70 text-lg sm:text-xl mb-6">
          Dive into our bespoke digital packages, crafted just for you. Whether
          it’s boosting your SEO or sparking your social media, we’re here to
          help your brand shine. Let’s make something amazing together.
        </p>
        <button className="px-8 py-4 text-white rounded-[75px] border border-[#DE2F04] bg-[#DE2F04]/10 shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] backdrop-blur-[9.137930870056152px]">
          Book a call →
        </button>
      </div>

      {/* Right: Overlapping Coin Images */}
      <div className="relative w-[350px] h-[350px] mt-12 md:mt-0 flex-shrink-0">
        <Image
          src="/Coin3DModel1.png"
          alt="Large Coin"
          width={820} // Adjusted for mobile
          height={820} // Adjusted for mobile
          className="absolute right-0 top-0 z-10"
          style={{ filter: "drop-shadow(0 8px 32px #0008)" }}
        />
        {/* <Image
          src="/Coin3DModel2.png"
          // alt="Small Coin"
          width={520} // Adjusted for mobile
          height={520} // Adjusted for mobile
          className="absolute left-8 top-24 z-20"
          style={{ filter: "drop-shadow(0 4px 16px #0008)" }}
        /> */}
      </div>
    </section>
  );
}
