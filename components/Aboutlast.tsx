"use client";

import Image from "next/image";
import { FaTags, FaUserAlt, FaCrown } from "react-icons/fa";

const features = [
  {
    icon: <FaTags className="text-white text-lg" />,
    title: "Competitive Pricing",
    desc: "Delivering top-notch services without breaking the bank.",
  },
  {
    icon: <FaUserAlt className="text-white text-lg" />,
    title: "Customer-centric Focus",
    desc: "Ensuring every solution resonates with your audience.",
  },
  {
    icon: <FaCrown className="text-white text-lg" />,
    title: "Tailor-made Strategies",
    desc: "No one-size-fits-all approach; we adapt to your goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#0A0A11] px-4 sm:px-6 lg:px-20 py-16 sm:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* 🔶 Left Image */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[650px] rounded-[32px] overflow-hidden">
            <Image
              src="/Rectangle-31.png"
              alt="Why Choose Us"
              width={600}
              height={600}
              className="object-cover w-full h-auto rounded-[32px]"
              priority
            />
          </div>
        </div>

        {/* 🟥 Right Feature Cards */}
        <div className="bg-[#1A0D0C]/60 border border-[#ff3c1b33] rounded-2xl px-5 sm:px-8 py-8 sm:py-10 shadow-[0_0_30px_#ff3c1b22] space-y-6 sm:space-y-8 w-full max-w-xl mx-auto lg:mx-0">
          {features.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF3C1B] shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
