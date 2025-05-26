"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Samantha Milner",
    company: "Mindful LLC",
    message:
      "We now have a fantastic website that perfectly encapsulates the essence of our company thanks to them. Their service has exceeded all of our expectations.",
    image: "/Ellipse6.png",
  },
  {
    id: 2,
    name: "Emily Tran",
    company: "Glow Wellness",
    message:
      "They understood our brand perfectly. The design is stunning and the user experience is flawless. Highly recommended!",
    image: "/Ellipse7.png",
  },
  {
    id: 3,
    name: "Daniel Lee",
    company: "NextGen Corp",
    message:
      "We're incredibly impressed. Their team was professional, creative, and fast. They really care about delivering quality.",
    image: "/Ellipse8.png",
  },
  {
    id: 4,
    name: "Olivia James",
    company: "Luxe Living",
    message:
      "The final result was better than we imagined. They exceeded every expectation with their design and attention to detail.",
    image: "/Ellipse9.png",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const autoRotate = () => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    timeoutRef.current = setInterval(autoRotate, 4000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  const handleManualChange = (index: number) => {
    setActiveIndex(index);
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 max-w-[100vw] mx-auto overflow-hidden">
       {/* 🔵 Left & Right Background Images */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 pointer-events-none">
    <Image
      src="/mainpage/“ (3).svg"
      alt="Left Decoration"
      width={300}
      height={300}
      className=""
    />
  </div>
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0 pointer-events-none">
    <Image
      src="/mainpage/“ (4).svg"
      alt="Right Decoration"
      width={300}
      height={300}
      className=""
    />
  </div>
      
      <div className="relative mx-auto max-w-4xl h-[450px] perspective-1000 z-10">
        <div
          ref={carouselRef}
          className="relative w-full h-full transform-style-3d"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 preserve-3d backface-hidden ${
                activeIndex === index
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-0 -z-10 scale-90"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 shadow-xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-1 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-white/10"
                  />
                </div>

                <div className="text-center mt-12 mb-6">
                  <p className="font-bold text-black text-lg">{item.name}</p>
                  <p className="text-sm text-black/60">{item.company}</p>
                </div>

                <div className="relative">
                  <svg
                    className="absolute -top-3 -left-2 w-8 h-8 text-[#ff4d2d]/30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.192 15.757..." />
                  </svg>
                  <p className="text-black/80 text-base leading-relaxed mb-6 px-4">
                    {item.message}
                  </p>
                  <svg
                    className="absolute -bottom-2 -right-2 w-8 h-8 text-[#ff4d2d]/30 transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.192 15.757..." />
                  </svg>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="px-4 py-2 rounded-full bg-[#002768]">
                    <div className="flex items-center gap-1 text-white text-base">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-lg animate-twinkle"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation indicators */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#ff4d2d] w-8"
                  : "bg-black/20 hover:bg-black/40"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() =>
            handleManualChange(
              (activeIndex - 1 + testimonials.length) % testimonials.length
            )
          }
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-[#ff4d2d]/30 hover:border-[#ff4d2d] z-20"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => handleManualChange((activeIndex + 1) % testimonials.length)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 sm:translate-x-0 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-[#ff4d2d]/30 hover:border-[#ff4d2d] z-20"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
