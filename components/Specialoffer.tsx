import Link from "next/link";

export default function SpecialOfferSection() {
  return (
    <Link href="/ContactUs">
      <section className="bg-[#DE2F04] py-5 sm:py-6 rounded-[180px] mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-8 sm:px-12 lg:px-20">
          <p className="text-white text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-4 sm:mb-0">
            Grab it fast to get special price
          </p>
          <button className="bg-gradient-to-r from-[#FF8C6A] to-[#FF4F34] text-white px-8 py-4 rounded-full font-semibold border-t-4 border-white bg-opacity-40">
            Book a call →
          </button>
        </div>
      </section>
    </Link>
  );
}
