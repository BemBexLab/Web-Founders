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
  const [clickedArrows, setClickedArrows] = useState<number[]>([]);

  const handleArrowClick = (index: number) => {
    if (!clickedArrows.includes(index)) {
      setClickedArrows([...clickedArrows, index]);
      setTimeout(() => {
        setClickedArrows((prev) => prev.filter((i) => i !== index));
      }, 2000);
    }
  };

  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-8 ">
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
            className="text-[#BF0B30] font-semibold mb-2 md:mb-3 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1F1F1F]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-[#002768] bg-clip-text">
              Digital Services That Deliver Results
            </span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const isRed = i % 2 === 0;
            const bgColor = isRed ? "#BF0B30" : "#002768";
            const textColor = "#FFFFFF";

            return (
              <motion.div
                key={i}
                className="group relative aspect-square w-full rounded-[30px] p-6 md:p-8 transition-all duration-300 hover:border-[#DE2F04] cursor-pointer flex flex-col justify-between"
                style={{
                  border: "1px solid #BF0B30",
                  background: bgColor,
                  color: textColor,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Link Overlay */}
                <Link href="/ContactUs" className="absolute inset-0 z-10" />

                {/* Card Content */}
                <div className="relative z-20 flex flex-col justify-between h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-white border-white/10">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-white/80">
                    {service.desc}
                  </p>

                  {/* Arrow */}
                  <Link href="/ContactUs">
                    <div
                      className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl border border-white/50 bg-white/10 cursor-pointer"
                      onClick={() => handleArrowClick(i)}
                    >
                      <div
                        className="relative z-10 text-white text-lg font-bold"
                        style={{
                          transform: clickedArrows.includes(i)
                            ? "rotate(360deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.8s ease-in-out",
                        }}
                      >
                        →
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-12">
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
      Book a Call →
    </button>
  </Link>
</div>

    </section>
  );
};

export default ServicesSection;
