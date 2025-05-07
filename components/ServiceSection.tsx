import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const hoverVariants = {
    rest: {
      backgroundPosition: "0% 0%",
      color: "rgba(255, 255, 255, 0.4)",
    },
    hover: {
      backgroundPosition: "100% 100%",
      color: "#ffffff",
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const gradientVariants = {
    rest: {
      opacity: 0,
      scale: 0.8,
      background:
        "linear-gradient(90deg, rgba(255,60,27,0) 0%, rgba(255,60,27,0) 100%)",
    },
    hover: {
      opacity: 1,
      scale: 1,
      background:
        "linear-gradient(90deg, rgba(255,60,27,0.1) 0%, rgba(255,60,27,0.4) 50%, rgba(255,60,27,0.1) 100%)",
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 px-4 sm:px-6 max-w-7xl mx-auto z-30 overflow-visible"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ff3c1b]"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.2 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              x: [null, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      {/* Animated star background - now on the LEFT side */}
      <motion.div
        className="absolute right-[-10%]  -translate-y-1/2 z-0 opacity-70 scale-[0.9] pointer-events-none"
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
            stroke="#ff3c1b"
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
          <motion.p
            className="text-[#ff4d2d] font-semibold mb-3 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Services
          </motion.p>

          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.35] mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-white">E</span>
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                xp
              </span>{" "}
              Website
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                De
              </span>
              velopment &
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="bg-gradient-to-b from-white via-[#ffecd3] to-[#5a2e1b] text-transparent bg-clip-text">
                D
              </span>
              esign Solutions
            </motion.div>
          </h2>

          <motion.button
            className="relative px-6 py-3 rounded-full text-white text-sm flex items-center gap-2 bg-[#1a1a1a]/60 backdrop-blur-md border border-transparent group overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{
              borderColor: "rgba(255, 60, 27, 0.3)",
              boxShadow: "0 0 15px rgba(255, 60, 27, 0.3)",
            }}
          >
            <Link href="Services">
              <span className="relative z-10">See All Services</span>
            </Link>
            <motion.span
              className="text-lg relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              →
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff3c1b]/10 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <span className="absolute inset-0 rounded-full shadow-[inset_0_4px_6px_rgba(255,255,255,0.08)]" />
          </motion.button>
        </motion.div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            className="grid gap-6 sm:gap-7 relative z-10"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {services.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(-1)}
              >
                <motion.div
                  className={`relative z-20 uppercase font-extrabold text-2xl sm:text-3xl md:text-[42px] pb-6 pl-6 cursor-pointer`}
                  initial="rest"
                  animate={activeIndex === i ? "hover" : "rest"}
                  variants={hoverVariants}
                  style={{
                    backgroundSize: "200% 200%",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,60,27,0) 0%, rgba(255,60,27,0.1) 50%, rgba(255,60,27,0) 100%)",
                  }}
                >
                  {item}

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        className="absolute left-0 top-0 h-full w-1 bg-[#ff3c1b] rounded-r-full"
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      className="absolute inset-0 z-10 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#ff3c1b]/10 to-transparent rounded-lg"
                        variants={gradientVariants}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#ff3c1b] to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
