import Link from "next/link";

Link
export default function SpecialOfferSection() {
  return (
    <Link href='/ContactUs'>
      <section className="bg-[#DE2F04] py-5 rounded-[180px] mx-6 sm:mx-[6rem]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-12 sm:px-20">
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
