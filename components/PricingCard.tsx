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
  const redColor = "#BF0B30";
  const blueColor = "#002768";
  const grayColor = "#444444";

  const backgroundColor = variant === "center" ? redColor : blueColor;

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl p-4 sm:p-6 flex flex-col h-full
        backdrop-filter backdrop-blur-lg
        ${isMobile ? "w-[90vw] max-w-xs flex-shrink-0" : "w-full"}
      `}
      style={{ backgroundColor }}
    >
      <h3 className="text-white text-lg sm:text-xl font-medium mb-2 sm:mb-4 relative z-10">
        {title}
      </h3>

      <div className="flex items-baseline mb-2 relative z-10">
        <span className="text-white text-3xl sm:text-5xl md:text-6xl font-bold">
          {price}
        </span>
        <span className="text-white text-sm sm:text-base md:text-xl ml-2 line-through">
          {originalPrice}
        </span>
      </div>

      <p className="text-white mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base relative z-10">
        Up to <span className="font-medium">{referralDiscount}</span> referral AAR
      </p>

      <div className="mb-2 text-white text-xs sm:text-sm md:text-base font-medium relative z-10">
        Includes:
      </div>
      <div className="flex-grow relative z-10">
        <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 relative">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check
                size={14}
                className="text-white mr-2 mt-0.5 flex-shrink-0"
              />
              <span className="text-white text-xs sm:text-sm md:text-base">
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
            border: "1px solid white",
            backgroundColor,
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
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6 sm:mb-10">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;