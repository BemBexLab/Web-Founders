import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-white py-16 px-4 md:px-16 ">
      {/* Background Accent SVG */}
      <div className="absolute left-0 top-0 w-[300px] h-full opacity-[0.06] pointer-events-none z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 519 640"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="footerAccent"
              x1="307.5"
              y1="0"
              x2="307.5"
              y2="640"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ff2a2a" />
              <stop offset="1" stopColor="#0a0a11" />
            </linearGradient>
          </defs>
          <path
            d="M301.339 241.797C296.729 152.029..."
            fill="url(#footerAccent)"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto ">
        {/* Logo Row */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-4 sm:gap-6 mb-6 border-t-[1px] border-b-[1px] border-gray-400 py-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="../">
              <img
                src="/navbar/image (3).svg"
                alt="Bembex Lab"
                className="w-[150px] sm:w-[180px] object-contain"
              />
            </Link>
          </div>

          {/* Gradient Line */}
          <div className="hidden md:block md:flex-1 h-[1.4px] bg-gradient-to-r from-[#FDFDFD] to-[#BF0B30]"></div>

          {/* Menu */}
          <div
  className="w-full md:w-auto rounded-[75px] px-6 py-3 text-sm flex flex-wrap justify-between md:justify-center md:gap-16 "
  style={{
    background: "#002768",

  }}
>
  <a href="/Packages" className=" transition text-white">
    Pricing
  </a>
  <a href="/ContactUs" className=" transition text-white">
    Contact us
  </a>
  <a href="/Terms" className="transition text-white">
    Terms
  </a>
  <a
    href="/PrivacyandPolicy"
    className=" transition text-white"
  >
    Privacy
  </a>
</div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center gap-6 mb-10 border-b-[1px] border-gray-600 pb-14">
          {/* Phone */}
          <div className="flex items-center gap-3 flex-1 min-w-[250px]">
            <div
              className="p-3"
              style={{
                borderRadius: "76.415px",
                background: "#002768",
              }}
            >
              <img
                src="/material-symbols_call.png"
                alt="Phone"
                className="w-5 h-5"
              />
            </div>
            <span className="text-[#1F1F1F] font-medium text-sm sm:text-[17px]">
              +92(314)-2518727
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 flex-1 min-w-[250px]">
            <div
              className="p-3"
              style={{
                borderRadius: "76.415px",
                background: "#002768",
              }}
            >
              <img
                src="/ic_baseline-email.png"
                alt="Email"
                className="w-5 h-5"
              />
            </div>
            <span className="text-[#1F1F1F] font-medium text-sm sm:text-[17px]">
              hello@webfounder.com
            </span>
          </div>

          {/* Location */}
          <div className="flex w-full sm:w-auto items-start sm:items-center gap-3">
            <div
              className="p-3 flex-shrink-0"
              style={{
                borderRadius: "76.415px",
                background: "#002768",
              }}
            >
              <img src="/Group.png" alt="Location" className="w-5 h-5" />
            </div>
            <div className="text-[#1F1F1F] font-medium text-sm sm:text-[17px] leading-snug break-words">
              68 CIRCULAR ROAD, #02-01,
              <br className="block sm:hidden" />
              SINGAPORE 049422
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-[#1F1F1F] text-xs sm:text-sm md:text-base">
          &copy; 2025 Web Founders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
