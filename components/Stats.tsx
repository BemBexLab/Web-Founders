const Stats = () => {
  return (
    <section className="relative z-30 w-full flex justify-center px-4 py-20">
      <div className="relative w-full max-w-6xl rounded-[80px] px-12 py-12 text-white text-center backdrop-blur-md bg-[#1a1a1a]/40 shadow-[inset_0_-1px_1px_#ff1e00aa] overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0">
        {/* 🧊 Top gloss: soft white + red tint */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-white/20 via-[#ff3c3c33] to-transparent z-10" />

        {/* 🔴 Bottom glow line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e00] to-transparent opacity-80 z-10" />

        {/* 📊 Stats Content */}
        <div className="relative z-20 flex flex-col sm:flex-row justify-between w-full items-center gap-10 sm:gap-0">
          <div>
            <h2 className="text-5xl font-bold">596</h2>
            <p className="text-sm mt-2 text-gray-300">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">1,890+</h2>
            <p className="text-sm mt-2 text-gray-300">Issues Solved</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">250</h2>
            <p className="text-sm mt-2 text-gray-300">Finished Projects</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">04+</h2>
            <p className="text-sm mt-2 text-gray-300">Awards Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
