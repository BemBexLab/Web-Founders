import Image from "next/image"; // Import Next.js Image component for optimized images
import Link from "next/link";

export default function ContactUsSection() {
  return (
    <section className="bg-[#0A0A11] py-16 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between">
      {/* Left Side - Content */}
      <div className="w-full sm:w-1/2 text-white sm:ml-12 mb-8 sm:mb-0 mt-14">
        {" "}
        {/* Added margin-left for larger screens and margin-bottom for mobile */}
        <h1 className="text-4xl sm:text-7xl font-extrabold leading-tight mb-4 text-white">
          Let's Start Something Great Together
        </h1>
        <p className="text-white/70 text-lg sm:text-xl mb-6">
          Reach out to us today and let's make amazing things happen!
        </p>
        <Link href='#contactform'>
          <button className="bg-[#FF3C1B] text-white px-6 py-3 rounded-[75px] font-semibold border-2 border-[#DE2F04] bg-opacity-10 backdrop-blur-md shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all duration-300">
            Book a call →
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <Image
          src="/Chat-1.png" // Replace with your image path
          alt="Contact Us"
          width={550}
          height={550}
          className="object-cover w-full sm:w-[450px] h-auto" // Adjusted image size to be more responsive
        />
      </div>
    </section>
  );
}
