import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    "Website Design",
    "Digital Marketing",
    "Graphic Design",
    "App Development",
    "Social Media",
    "Animation",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 px-4 sm:px-6 max-w-7xl mx-auto z-30 overflow-visible"
    >
      {/* Rotating Star Background */}
      <motion.div
        className="absolute right-[-1%] -translate-y-1/2 z-0 opacity-70 scale-[0.9] pointer-events-none"
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="603"
          height="810"
          viewBox="0 0 603 810"
          fill="none"
        >
          <path
            stroke="#002768"
            strokeWidth="0.6"
            d="M708.818 123.244L708.534 122.739L708.076 123.094L462.151 313.585L509.2 1.07444L509.287 0.5H508.706H309.029H308.456L308.534 1.0678L351.31 313.605L101.07 120.944L100.611 120.591L100.329 121.096L1.56384 297.309L1.27537 297.823L1.83039 298.023L292.552 402.861L1.8243 511.979L1.27757 512.184L1.56453 512.693L104.623 695.352L104.914 695.866L105.373 695.495L349.166 498.579L308.534 808.935L308.46 809.5H309.029H506.559H507.136L507.054 808.928L462.145 498.575L705.925 691.201L706.385 691.564L706.672 691.053L805.436 514.84L805.721 514.331L805.174 514.127L512.285 405L805.174 295.873L805.722 295.669L805.436 295.159L708.818 123.244Z"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12">
        {/* Left Column */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <p className="text-[#002768] font-semibold mb-3 text-sm sm:text-base">
            Our Services
          </p>
          <h2 className="text-[#1F1F1F] font-normal text-3xl sm:text-4xl md:text-5xl leading-[1.35] mb-8">
            <div>
              <span className="">
                Expert
              </span>{" "}
              Website
            </div>
            <div>
              <span className="">
                De
              </span>
              velopment &
            </div>
            <div>
              <span className="">
                D
              </span>
              esign Solutions
            </div>
          </h2>
          <Link href="Services">
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
        </motion.div>

        {/* Right Column */}
        <div className="grid gap-3 sm:gap-4 relative z-10">
          {services.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative  w-[480px] h-[72px] flex items-center pl-6">
                {/* Capsule */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="absolute left-0 top-0 w-full h-full -z-10 sm-w-[100px]"
                      initial={{ opacity: 0, x: -100, y: -40, rotate: -15 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, x: -100, y: -40, rotate: -15 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="w-full h-full rounded-[115px] border border-[#002768] bg-[#002768] backdrop-blur-[9.13px] shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Text */}
                <div className="uppercase font-extrabold text-2xl sm:text-3xl md:text-[42px] text-[#111111] leading-none hover:text-white">
                  {item}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
