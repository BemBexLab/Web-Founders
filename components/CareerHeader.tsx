import Image from "next/image";

export default function CareerSection() {
  return (
    <section className="bg-[#0A0A11] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-16 mt-16 gap-12">
      {/* Left Side - Content */}
      <div className="w-full sm:w-1/2 text-white pl-4 sm:pl-12">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Craft Your Future with Us
        </h2>

        <p className="text-white/70 text-base sm:text-lg lg:text-xl mb-6">
          Explore, innovate, and excel with a career at Bembex Lab.
        </p>

        <button className="bg-[#DE2F04] text-white px-6 py-3 rounded-full font-semibold border-2 border-[#DE2F04] bg-opacity-10 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all duration-300">
          Book a call →
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[400px] aspect-[4/3] sm:max-w-[500px] sm:aspect-[1/1]">
          <Image
            src="/Frame 138.png"
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
