"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Samantha Milner",
    company: "Mindful LLC",
    message:
      "We now have a fantastic website that perfectly encapsulates the essence of our company thanks to them. Their service has exceeded all of our expectations, making us extremely happy.",
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
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-rotate testimonials with floating effect
  useEffect(() => {
    const autoRotate = () => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    timeoutRef.current = setInterval(autoRotate, 4000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Reset timer when user interacts
  const handleManualChange = (index) => {
    setActiveIndex(index);
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <section className="relative w-full py-20 px-4 md:px-8 max-w-[100vw] mx-auto overflow-hidden">
      {/* Main Background SVG */}
      <div className="absolute top-[6%] right-[4%] w-[310px] h-[310px] z-10 opacity-[0.4] -rotate-[6deg] translate-y-2 pointer-events-none animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 519 640"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="307.5"
              y1="0"
              x2="307.5"
              y2="640"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff2a2a" />
              <stop offset="1" stopColor="#1a0000" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="307.5"
              y1="0"
              x2="307.5"
              y2="640"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff2a2a" />
              <stop offset="1" stopColor="#1a0000" />
            </linearGradient>
          </defs>
          <path
            d="M301.339 241.797C296.729 152.029 273.709 90.0346 232.386 53.3289C191.017 18.8858 138.143 0.5 71.4264 0.5C57.0852 0.5 43.368 1.12003 30.9191 2.35929C12.9045 4.15259 0.5 20.0317 0.5 38.2153C0.5 64.7038 26.1476 83.3549 52.6758 80.9971C59.4295 80.3969 66.4195 80.0756 73.7304 80.0756C117.611 80.0756 152.327 93.9237 175.486 121.685C200.958 149.456 212.475 195.662 212.475 262.446C212.475 290.694 189.575 313.594 161.327 313.594H85.4327C48.7058 313.594 18.9327 343.367 18.9327 380.094V573C18.9327 609.727 48.7057 639.5 85.4327 639.5H237.138C273.865 639.5 303.638 609.727 303.638 573V313.094C303.638 280.846 303.637 257.868 301.339 241.797Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.5"
            stroke="url(#paint1_linear)"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Second Background SVG with animation */}
      <div className="absolute top-[12%] right-[-6%] w-[270px] h-[270px] z-0 opacity-[0.4] -rotate-[8deg] translate-y-6 pointer-events-none animate-float">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 519 640"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="paint2_linear"
              x1="307.5"
              y1="0"
              x2="307.5"
              y2="640"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#600808" />
              <stop offset="1" stopColor="#0a0000" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="307.5"
              y1="0"
              x2="307.5"
              y2="640"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#600808" />
              <stop offset="1" stopColor="#0a0000" />
            </linearGradient>
          </defs>
          <path
            d="M301.339 241.797C296.729 152.029 273.709 90.0346 232.386 53.3289C191.017 18.8858 138.143 0.5 71.4264 0.5C57.0852 0.5 43.368 1.12003 30.9191 2.35929C12.9045 4.15259 0.5 20.0317 0.5 38.2153C0.5 64.7038 26.1476 83.3549 52.6758 80.9971C59.4295 80.3969 66.4195 80.0756 73.7304 80.0756C117.611 80.0756 152.327 93.9237 175.486 121.685C200.958 149.456 212.475 195.662 212.475 262.446C212.475 290.694 189.575 313.594 161.327 313.594H85.4327C48.7058 313.594 18.9327 343.367 18.9327 380.094V573C18.9327 609.727 48.7057 639.5 85.4327 639.5H237.138C273.865 639.5 303.638 609.727 303.638 573V313.094C303.638 280.846 303.637 257.868 301.339 241.797Z"
            fill="url(#paint2_linear)"
            fillOpacity="0.5"
            stroke="url(#paint3_linear)"
            strokeWidth="8"
          />
        </svg>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#ff4d2d]/20 to-[#ff4d2d]/10 animate-particle"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <p className="text-[#ff4d2d] text-sm font-semibold text-center mb-2 relative z-10">
        Customer Testimonials
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 leading-tight relative z-10">
        <span className="bg-gradient-to-r from-[#a06d5e] to-white text-transparent bg-clip-text animate-text-shimmer">
          Our
        </span>{" "}
        <span className="text-white">success, echoed</span>
        <br />
        <span className="text-white">by our clients</span>
      </h2>

      {/* 3D Rotating Testimonial Showcase */}
      <div className="relative mx-auto max-w-4xl h-[450px] perspective-1000 z-10">
        <div ref={carouselRef} className="relative w-full h-full transform-style-3d">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 preserve-3d backface-hidden
                ${activeIndex === index ? "opacity-100 z-10 scale-100" : "opacity-0 -z-10 scale-90"}`}
            >
              <div className="bg-gradient-to-br from-[#250808]/90 to-[#0f0000]/95 border border-[#b02010] rounded-2xl p-8 w-full max-w-md shadow-2xl backdrop-blur-lg transform transition-all duration-500 hover:shadow-[#ff4d2d]/30 hover:shadow-xl">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ff4d2d] to-[#b02010] p-1 rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-white/10"
                  />
                </div>

                <div className="text-center mt-12 mb-6">
                  <p className="font-bold text-white text-lg">{item.name}</p>
                  <p className="text-sm text-white/60">{item.company}</p>
                </div>

                <div className="relative">
                  <svg className="absolute -top-3 -left-2 w-8 h-8 text-[#ff4d2d]/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-.95 2.31-1.08 4.06-.4 1.74.69 2.61 1.94 2.61 3.76 0 1.2-.29 2.2-.88 3.06-.59.84-1.38 1.26-2.36 1.26-.5 0-.92-.14-1.29-.41-.36-.28-.54-.64-.54-1.08zm-11.192 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.838-.55-.144-1.07-.14-1.54.028-.16-.95.1-1.95.41-3 .96-.95 2.31-1.08 4.06-.4 1.74.69 2.61 1.94 2.61 3.76 0 1.2-.29 2.2-.88 3.06-.59.84-1.38 1.26-2.36 1.26-.5 0-.92-.14-1.29-.41-.36-.28-.54-.64-.54-1.08z" />
                  </svg>
                  <p className="text-white/80 text-base leading-relaxed mb-6 px-4">
                    {item.message}
                  </p>
                  <svg className="absolute -bottom-2 -right-2 w-8 h-8 text-[#ff4d2d]/30 transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.41-3 .96-.95 2.31-1.08 4.06-.4 1.74.69 2.61 1.94 2.61 3.76 0 1.2-.29 2.2-.88 3.06-.59.84-1.38 1.26-2.36 1.26-.5 0-.92-.14-1.29-.41-.36-.28-.54-.64-.54-1.08zm-11.192 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.838-.55-.144-1.07-.14-1.54.028-.16-.95.1-1.95.41-3 .96-.95 2.31-1.08 4.06-.4 1.74.69 2.61 1.94 2.61 3.76 0 1.2-.29 2.2-.88 3.06-.59.84-1.38 1.26-2.36 1.26-.5 0-.92-.14-1.29-.41-.36-.28-.54-.64-.54-1.08z" />
                  </svg>
                </div>

                <div className="flex justify-center mt-6">
                  <div className="px-4 py-2 rounded-full bg-[#1c0b0b]/50 border border-[#ff4d2d] backdrop-blur-md animate-pulse-slow">
                    <div className="flex items-center gap-1 text-[#ff4d2d] text-base">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }}>★</span>
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
                : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={() => handleManualChange((activeIndex - 1 + testimonials.length) % testimonials.length)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-[#ff4d2d]/30 hover:border-[#ff4d2d] z-20"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        
        <button 
          onClick={() => handleManualChange((activeIndex + 1) % testimonials.length)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 sm:translate-x-0 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-[#ff4d2d]/30 hover:border-[#ff4d2d] z-20"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-15px) rotate(-4deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -100%; }
          100% { background-position: 200%; }
        }
        
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }
        
        .animate-particle {
          animation: particle var(--duration, 20s) ease-in infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;