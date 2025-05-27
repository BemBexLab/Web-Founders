import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const HeroWithStats = () => {
  return (
    <section className="mt-10  ">
      {/* 🎥 Background Image */}
      <Image
        src="/mainpage/Home.svg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* 🔲 Dark Overlay */}
      <div className="absolute inset-0  z-10" />

      {/* ✨ Hero Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 text-white text-center pb-0">
        <div className="w-full max-w-5xl px-4 pb-0">
          <>
            <h1 className="custom-heading">
              <span style={{ color: "#000000" }}>Expert </span>
              <span className="outlined">Website</span>
              <br />
              <span className="outlined">Development</span>{" "}
              <span style={{ color: "#000000" }}>& </span>
              <span className="outlined">Design</span>
              <br />
              <span style={{ color: "#000000" }}>Solutions</span>
            </h1>

            <style jsx>{`
              .custom-heading {
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-style: normal;
                margin: 0;
              }

              .outlined {
                -webkit-text-stroke-width: 2px;
                -webkit-text-stroke-color: #002768;
                -webkit-text-fill-color: transparent;
                color: transparent;
                display: inline-block;
              }

              .custom-heading {
                font-size: 42px;
                line-height: 52px;
              }

              @media (min-width: 640px) {
                .custom-heading {
                  font-size: 60px;
                  line-height: 72px;
                }
              }

              @media (min-width: 768px) {
                .custom-heading {
                  font-size: 76px;
                  line-height: 90px;
                }
              }

              @media (min-width: 1024px) {
                .custom-heading {
                  font-size: 70px;
                  line-height: 101px;
                }
              }
            `}</style>
          </>

          <p
            className="max-w-4xl mx-auto mb-4 text-sm sm:text-base md:text-lg"
            style={{ color: "rgba(31, 31, 31, 0.50)" }}
          >
            We craft visually stunning, user-centric websites that drive results.
           
            From modern design to seamless  <br /> functionality, Help businesses stand
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
    <div className="group w-[50px] h-[50px] transition-all duration-300 hover:w-[65px] hover:h-[65px]">
  <Image
    src="/mainpage/Mask group (6).svg"
    alt="Play Button"
    width={60}
    height={60}
    className="w-full h-full object-contain transition-all duration-300"
  />
</div>

    <span className="text-[#002768]">Explore Portfolio</span>
  </button>
</Link>
          </div>
        </div>
      </div>

      {/* 📊 Stats Section */}
      <div className="relative z-30 w-full flex justify-center px-4 -mt-20 pb-12">
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
