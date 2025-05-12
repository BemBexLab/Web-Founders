import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice: string;
  referralDiscount: string;
  features: PricingFeature[];
  variant: "side" | "center";
  isMobile?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  originalPrice,
  referralDiscount,
  features,
  variant,
  isMobile = false,
}) => {
  const redColor = "#DE2F04";
  const grayColor = "#444444";

  return (
    <div
      className={`
      relative overflow-hidden rounded-3xl p-4 sm:p-6 flex flex-col h-full
      ${
        variant === "center"
          ? "bg-opacity-10 border border-[#DE2F04]"
          : "bg-opacity-10 border border-neutral-900"
      }
      backdrop-filter backdrop-blur-lg
      ${isMobile ? "w-[280px] flex-shrink-0" : "w-full"}
    `}
      style={{
        backgroundColor: "rgba(222, 47, 4, 0.10)",
      }}
    >
      {variant === "side" && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(to right, transparent, ${redColor}, transparent)`,
            }}
          ></div>
          <div
            className="absolute bottom-0 top-1/2 left-0 w-1"
            style={{
              background: `linear-gradient(to top, ${redColor}, ${redColor}, transparent)`,
            }}
          ></div>
          <div
            className="absolute bottom-0 top-1/2 right-0 w-1"
            style={{
              background: `linear-gradient(to top, ${redColor}, ${redColor}, transparent)`,
            }}
          ></div>
        </div>
      )}

      {variant === "center" && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: redColor }}
          ></div>
          <div
            className="absolute top-0 bottom-0 left-0 w-1 h-1/2"
            style={{
              background: `linear-gradient(to bottom, ${redColor}, ${redColor}, transparent)`,
            }}
          ></div>
          <div
            className="absolute top-0 bottom-0 right-0 w-1 h-1/2"
            style={{
              background: `linear-gradient(to bottom, ${redColor}, ${redColor}, transparent)`,
            }}
          ></div>
        </div>
      )}

      <h3 className="text-[#DE2F04] text-lg sm:text-xl font-medium mb-2 sm:mb-4 relative z-10">
        {title}
      </h3>

      <div className="flex items-baseline mb-2 relative z-10">
        <span className="text-neutral-100 text-3xl sm:text-5xl md:text-7xl font-bold">
          {price}
        </span>
        <span className="text-[#DE2F04] text-sm sm:text-base md:text-xl ml-2 line-through">
          {originalPrice}
        </span>
      </div>

      <p className="text-neutral-400 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base relative z-10">
        Up to{" "}
        <span className="text-[#DE2F04] font-medium">{referralDiscount}</span>{" "}
        referral AAR
      </p>

      <div className="mb-2 text-neutral-300 text-xs sm:text-sm md:text-base font-medium relative z-10">
        includes:
      </div>
      <div className="flex-grow relative z-10">
        <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 relative">
          <div
            className="absolute left-0 top-0 bottom-1/2 w-1"
            style={{ background: redColor }}
          ></div>
          <div
            className="absolute left-0 top-1/2 bottom-0 w-1"
            style={{ background: grayColor }}
          ></div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check
                size={14}
                className="text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-neutral-300 text-xs sm:text-sm md:text-base">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/ContactUs" className="mt-auto relative z-10">
        <button
          className="w-full text-white py-2 sm:py-3 px-4 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base"
          style={{
            borderRadius: "75px",
            border: "1px solid #DE2F04",
            background: "rgba(222, 47, 4, 0.10)",
            backdropFilter: "blur(9.14px)",
            boxShadow:
              "9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset, -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset",
          }}
        >
          <span className="mr-1 sm:mr-2">Buy Now</span>
          <ArrowRight size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </Link>
    </div>
  );
};

const PricingCards: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const pricingData: PricingCardProps[] = [
    {
      title: "Basic Website Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
      ],
      variant: "side",
    },
    {
      title: "Standard Website Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
        { text: "Dedicated Project Manager" },
      ],
      variant: "center",
    },
    {
      title: "Premium Website Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
      ],
      variant: "side",
    },
    {
      title: "E-commerce Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
      ],
      variant: "side",
    },
    {
      title: "Gold E-commerce Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
        { text: "Dedicated Project Manager" },
      ],
      variant: "center",
    },
    {
      title: "Platinum E-commerce Package",
      price: "$229",
      originalPrice: "$499",
      referralDiscount: "50%",
      features: [
        { text: "2 Stock Images" },
        { text: "3 Page Website" },
        { text: "1 jQuery Slider Banner" },
        { text: "Contact/Query Form" },
        { text: "Complete W3C Certified HTML" },
        { text: "48 to 72 hours TAT" },
        { text: "Complete Deployment" },
      ],
      variant: "side",
    },
  ];

  return (
    <div className="bg-black min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-6 sm:mb-10">
          Choose Your Plan
        </h2>

        {/* Mobile View - Left/Right Arrow Navigation */}
        <div className="md:hidden">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-between w-full max-w-xs mx-auto">
              <button
                onClick={() =>
                  setSelectedPackage((prev) =>
                    prev === 0 ? pricingData.length - 1 : prev - 1
                  )
                }
                className="text-white p-2"
                aria-label="Previous Package"
              >
                ←
              </button>

              <div className="w-[280px] flex-shrink-0">
                <PricingCard
                  {...pricingData[selectedPackage]}
                  isMobile={true}
                />
              </div>

              <button
                onClick={() =>
                  setSelectedPackage((prev) =>
                    prev === pricingData.length - 1 ? 0 : prev + 1
                  )
                }
                className="text-white p-2"
                aria-label="Next Package"
              >
                →
              </button>
            </div>

            {/* Scroll indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {pricingData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPackage(index)}
                  className={`w-2 h-2 rounded-full ${
                    selectedPackage === index ? "bg-[#DE2F04]" : "bg-gray-600"
                  }`}
                  aria-label={`Go to package ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet View - 2 Columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>

        {/* Desktop View - 3 Columns */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
