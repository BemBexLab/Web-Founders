import Image from "next/image";
import { FaGem } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";

const WhyChooseUs = () => {
  return (
    <section className="relative z-30 w-full px-4 sm:px-6 py-20 md:py-28 max-w-7xl mx-auto text-white">
      <div className="flex flex-col lg:flex-row items-center gap-14">
        {/* 📸 Image + Bottom Tags */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/mainpage/Rectangle 8.svg"
              alt="Why Bembexlab"
              width={700}
              height={450}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>

          {/* 🧩 Tags Below Image */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 px-2 gap-4 sm:gap-0">
            {/* Left Tag */}
            <div className="flex items-center gap-3">
             <div
  className="w-10 h-10 flex items-center justify-center text-white"
  style={{
    borderRadius: "75px",
    background: "#002768",
  }}
>
  <FaGem size={18} />
</div>


              <span className="text-[#1F1F1F] font-semibold text-base sm:text-lg">
                Quality Assurance
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-white/10" />

            {/* Right Tag */}
            <div className="flex items-center gap-3">
              <div
  className="w-10 h-10 flex items-center justify-center text-white"
  style={{
    borderRadius: "75px",
    background: "#002768",
  }}
>
  <LuBadgeCheck size={18} />
</div>

              <span className="text-[#1F1F1F] font-semibold text-base sm:text-lg">
                Professional Support
              </span>
            </div>
          </div>
        </div>

        {/* ✍️ Right Text Column */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#BF0B30] font-semibold mb-3 text-sm sm:text-base">
            Why Choose Web Founders?
          </p>
          <h2 className="text-[#1F1F1F] font-normal text-3xl sm:text-4xl md:text-5xl leading-[1.3] mb-6 space-y-2">
            <div>
              Cr
              <span className="">
                af
              </span>
              ting Exceptional
            </div>
            <div>
              <span className="">
                Ex
              </span>
              periences, Delivering
            </div>
            <div>
              <span className="">
                S
              </span>
              uccess
            </div>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            At Web Founders, our commitment to quality and excellence goes beyond
            expectations. From the initial brainstorming session to the final
            product delivery, we focus on perfection at every stage of the
            process. We don’t just provide a service – we become your dedicated
            partner, committed to driving your business growth and success
            through top-tier website development and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
