import Image from "next/image";
import bgImage from "/public/mainpage/image (6).svg";
import Link from "next/link";


const BehindTheScenes = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end items-center bg-white overflow-hidden pt-24 pb-32 px-4 sm:px-6">
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
    <div
  className="relative z-10 w-full max-w-5xl px-6 sm:px-10 py-12 sm:py-14 text-center mt-[-5%]"
  style={{
    background: "#002768",
  }}
>
  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
    <span className="bg-gradient-to-r from-[#ff512f] to-[#fff] text-white text-transparent bg-clip-text">
      Watch the creative process
    </span>
    <br />
    <span className="text-white">behind our digital works.</span>
  </h2>

  {/* Paragraph */}
  <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
    At Bembex lab, our commitment to quality and excellence goes beyond
    expectations. From the initial brainstorming session.
  </p>

  {/* Button */}
  <Link href="/ContactUs">
    <button
      className="px-6 py-3 text-white text-sm font-medium transition"
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
        WebkitBackdropFilter: "blur(9.137930870056152px)", // for Safari
      }}
    >
      Book a call →
    </button>
  </Link>
</div>

    </section>
  );
};

export default BehindTheScenes;
