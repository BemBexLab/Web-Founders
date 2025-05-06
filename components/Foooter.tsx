const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0a0a11] text-white py-16 px-4 md:px-16 border-t border-t-white/10 border-b border-b-white/10">
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
      <div className="relative z-10 max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Logo Row */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-4 sm:gap-6 mb-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Bembex-logo.png"
              alt="Bembex Lab"
              className="w-[150px] sm:w-[180px] object-contain"
            />
          </div>

          {/* Gradient Line */}
          <div className="hidden md:block md:flex-1 h-[1.4px] bg-gradient-to-r from-[#DE2F04] to-[#000011]"></div>

          {/* Menu */}
          <div
            className="w-full md:w-auto rounded-[75px] px-6 py-3 text-sm backdrop-blur-[9.14px] flex flex-wrap justify-between md:justify-center md:gap-16"
            style={{
              border: "1px solid #DE2F04",
              background: "rgba(222, 47, 4, 0.10)",
              boxShadow:
                "9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset, -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset",
            }}
          >
            <a href="/Packages" className="hover:text-[#ff4d2d] transition">
              Pricing
            </a>
            <a href="/ContactUs" className="hover:text-[#ff4d2d] transition">
              Contact us
            </a>
            <a href="/Terms" className="hover:text-[#ff4d2d] transition">
              Terms
            </a>
            <a
              href="/PrivacyandPolicy"
              className="hover:text-[#ff4d2d] transition"
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center gap-6 mb-10">
          {/* Phone */}
          <div className="flex items-center gap-3 flex-1 min-w-[250px]">
            <div
              className="p-3"
              style={{
                borderRadius: "76.415px",
                border: "1.141px solid #DE2F04",
                background: "rgba(222, 47, 4, 0.20)",
              }}
            >
              <img
                src="/material-symbols_call.png"
                alt="Phone"
                className="w-5 h-5"
              />
            </div>
            <span className="text-white font-medium text-sm sm:text-[17px]">
              +92(314)-2518727
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 flex-1 min-w-[250px]">
            <div
              className="p-3"
              style={{
                borderRadius: "76.415px",
                border: "1.141px solid #DE2F04",
                background: "rgba(222, 47, 4, 0.20)",
              }}
            >
              <img
                src="/ic_baseline-email.png"
                alt="Email"
                className="w-5 h-5"
              />
            </div>
            <span className="text-white font-medium text-sm sm:text-[17px]">
              hr@bembexlab.com
            </span>
          </div>

          {/* Location */}
          <div className="flex w-full sm:w-auto items-start sm:items-center gap-3">
            <div
              className="p-3 flex-shrink-0"
              style={{
                borderRadius: "76.415px",
                border: "1.141px solid #DE2F04",
                background: "rgba(222, 47, 4, 0.20)",
              }}
            >
              <img src="/Group.png" alt="Location" className="w-5 h-5" />
            </div>
            <div className="text-white font-medium text-sm sm:text-[17px] leading-snug break-words">
              68 CIRCULAR ROAD, #02-01,
              <br className="block sm:hidden" />
              SINGAPORE 049422
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-center text-white/80 text-xs sm:text-sm md:text-base">
          &copy; 2025 Bembex Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
