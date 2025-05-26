import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const HeroWithStats = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0 bg-[#FDFDFD] z-10" />

      {/* ✨ Hero Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 text-white text-center">
        <div className="w-full max-w-5xl px-4">
          <h1
  style={{
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "90px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "101px",
  }}
>
  <span style={{ color: "#000000" }}>Expert </span>
  <span
    style={{
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "#002768",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      display: "inline-block",
    }}
  >
    Website
  </span>
  <br />
  <span
    style={{
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "#002768",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      display: "inline-block",
    }}
  >
    Development
  </span>{" "}
  &nbsp;
  <span
    style={{
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "#002768",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      display: "inline-block",
    }}
  >
    Design
  </span>
  <br />
  <span style={{ color: "#000000" }}>Solutions</span>
</h1>


          <p
            className="max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg"
            style={{ color: "rgba(31, 31, 31, 0.50)" }}
          >
            We craft visually stunning, user-centric websites that drive results.
            <br />
            From modern design to seamless functionality, Help businesses stand
            out in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/ContactUs">
              <button
                className="px-5 sm:px-6 py-3 text-white text-sm hover:brightness-110 transition"
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
                Book a call →
              </button>
            </Link>

            <Link href="/portfolio">
              <button className="flex items-center justify-center gap-3 text-white px-6 py-3 rounded-full transition text-sm sm:text-base min-h-[48px]">
                <span className="group w-12 h-12 flex items-center justify-center border border-[#002768] rounded-full hover:bg-[#002768]">
                  <FaPlay
                    size={10}
                    className="text-[#002768] group-hover:text-white"
                  />
                </span>
                <span className="text-[#002768]">Explore Portfolio</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="relative z-30 w-full flex justify-center px-4 pt-0 pb-12">
        <div
          className="relative w-full max-w-6xl overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 text-white text-center px-6 sm:px-12 py-10 sm:py-12"
          style={{
            background: "#BF0B30",
            borderRadius: "115px",
          }}
        >
          <div className="relative z-20 grid grid-cols-2 sm:flex justify-between w-full items-center gap-8 sm:gap-0 text-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">596</h2>
              <p className="text-xs sm:text-sm mt-2 text-white">Happy Customers</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">1,890+</h2>
              <p className="text-xs sm:text-sm mt-2 text-white">Issues Solved</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">250</h2>
              <p className="text-xs sm:text-sm mt-2 text-white">Finished Projects</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white">04+</h2>
              <p className="text-xs sm:text-sm mt-2 text-white">Awards Winning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithStats;
