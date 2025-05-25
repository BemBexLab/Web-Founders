import Link from "next/link";

export default function SpecialOfferSection() {
  return (
    <Link href="/ContactUs">
      <section className="bg-[#BF0B30] py-5 sm:py-6 rounded-[180px] mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-8 sm:px-12 lg:px-20">
          <p className="text-white text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-4 sm:mb-0">
            Grab it fast to get special price
          </p>
          <button
  className="text-white px-8 py-4 font-semibold"
  style={{
    borderRadius: "85.155px",
    border: "1.135px solid #FFF",
    background: "rgba(255, 255, 255, 0.30)",
    boxShadow: `
      10.375px -10.375px 10.375px 0px rgba(169, 36, 3, 0.10) inset,
      -10.375px 10.375px 10.375px 0px rgba(255, 255, 255, 0.10) inset
    `,
    backdropFilter: "blur(10.375149726867676px)",
    WebkitBackdropFilter: "blur(10.375149726867676px)", // Safari support
  }}
>
  Book a call →
</button>

        </div>
      </section>
    </Link>
  );
}
