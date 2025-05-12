"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    img: "/image-6(traced).png",
    title: "UI/UX Design",
    desc: "User-friendly interfaces are created by our UI/UX design services, which keep users happy and engaged.",
  },
  {
    img: "/image-7(traced).png",
    title: "Website Design",
    desc: "We create visually stunning and functional websites that not only attract visitors but also turn them into customers.",
  },
  {
    img: "/image-8(traced).png",
    title: "Software Development",
    desc: "We develop tailor-made software that streamlines your operations, enhances efficiency, and drives growth.",
  },
  {
    img: "/image-9(traced).png",
    title: "Animation",
    desc: "Our animation service provides complete support and enhancements to keep your digital visuals engaging and dynamic.",
  },
  {
    img: "/image-10(traced).png",
    title: "App Development",
    desc: "We create scalable, robust mobile apps that perform well and offer a consistent user experience across devices.",
  },
  {
    img: "/image-11(traced).png",
    title: "Graphic Design",
    desc: "Our creative graphic designers produce engaging and impactful designs that capture your brand's essence.",
  },
  {
    img: "/image-13(traced).png",
    title: "Digital Marketing",
    desc: "Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.",
  },
  {
    img: "/image-14(traced).png",
    title: "Social Media Management",
    desc: "Our social media experts craft compelling content, engage with your audience, and manage your social presence.",
  },
  {
    img: "/image-15(traced).png",
    title: "Content Writing",
    desc: "Our content writing experts create engaging and persuasive content, connect with your audience, and enhance your online presence.",
  },
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedArrows, setClickedArrows] = useState<number[]>([]);

  const handleArrowClick = (index: number) => {
    if (!clickedArrows.includes(index)) {
      setClickedArrows([...clickedArrows, index]);
      setTimeout(() => {
        setClickedArrows(clickedArrows.filter((i) => i !== index));
      }, 2000);
    }
  };

  return (
    <section className="bg-[#0A0A11] text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
              Digital Services
            </span>{" "}
            That <br className="hidden md:block" />
            Deliver Results
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative rounded-[30px] bg-[rgba(222,47,4,0.10)] backdrop-blur-[33px] p-6 md:p-8 flex flex-col justify-between shadow-[0_4px_30px_#ff3c1b11] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 40px #ff3c1b22",
              }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Link Overlay */}
              <Link href="/ContactUs" className="absolute inset-0 z-10" />

              {/* Floating Particles */}
              {hoveredCard === i && (
                <>
                  {[...Array(8)].map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute rounded-full bg-[#FF3C1B] opacity-0 group-hover:opacity-30"
                      initial={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                      }}
                      animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        transition: {
                          duration: Math.random() * 5 + 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "linear",
                        },
                      }}
                    />
                  ))}
                </>
              )}

              {/* Card Content */}
              <div className="relative z-20">
                <motion.div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[33.15px] border-t border-white/60 border-l-transparent border-r-transparent border-b-0">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                </motion.div>
                <motion.h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                  <span className="bg-gradient-to-r from-[#ffb199] to-white text-transparent bg-clip-text">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </motion.h3>
                <motion.p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {service.desc}
                </motion.p>

                {/* Arrow */}
                <Link href="/ContactUs">
                  <motion.div
                    className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[20px] bg-[rgba(222,47,4,0.10)] backdrop-blur-[33.15px] overflow-hidden cursor-pointer"
                    onClick={() => handleArrowClick(i)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div className="absolute inset-0 w-11 bg-[#FF3C1B] rounded-[20px] z-0" />
                    <motion.div
                      className="relative z-10 text-white text-lg font-bold"
                      animate={{
                        x: clickedArrows.includes(i) ? [0, 20, 0] : 0,
                        y: clickedArrows.includes(i) ? [0, -10, 0] : 0,
                        rotate: clickedArrows.includes(i) ? [0, 180, 360] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        times: clickedArrows.includes(i)
                          ? [0, 0.5, 1]
                          : undefined,
                      }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
