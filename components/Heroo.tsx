import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-16 mt-16 gap-12">
          {/* Left Side - Content */}
          <div className="w-full sm:w-1/2 text-[#002768] pl-4 sm:pl-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
             Custom Solutions. Exceptional Results.
            </h2>
    
            <p className="text-base sm:text-lg lg:text-xl mb-6" style={{ color: "rgba(31, 31, 31, 0.50)" }}>
              Dive into our bespoke digital packages, crafted just for you. Whether it's boosting your SEO or sparking your social media, we're here to help your brand shine. Let’s make something amazing together.
            </p>
    
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
      Book a call →
    </button>
          </div>
    
          {/* Right Side - Image */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/3] sm:max-w-[500px] sm:aspect-[1/1]">
              <Image
                src="/package/image (12).svg"
                alt="Large Bag"
                layout="fill"
                objectFit="contain" // Ensures the image scales fully
                priority
              />
            </div>
          </div>
        </section>
  );
}
