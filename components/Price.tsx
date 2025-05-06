export default function PackagesSection() {
  return (
    <section className="py-10 bg-[#0A0A11] text-white mt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Subheading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DE2F04] mb-8">
          Packages
        </h2>

        <h3 className="text-2xl sm:text-3xl font-extrabold mb-8">
          The Perfect Plans For Your Needs
        </h3>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-4">
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            Website
          </button>
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            E-commerce
          </button>
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            Website Maintenance
          </button>
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            Video Animation
          </button>
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            SEO
          </button>
          <button className="px-8 py-4 text-white rounded-[75px] border-[1px] border-[#DE2F04] bg-[#DE2F04] bg-opacity-10 backdrop-blur-lg shadow-[9.138px_-9.138px_9.138px_0px_rgba(169,36,3,0.10)_inset,_-9.138px_9.138px_9.138px_0px_rgba(255,255,255,0.10)_inset] hover:bg-opacity-20 transition-all">
            Combo Packages
          </button>
        </div>
      </div>
    </section>
  );
}
