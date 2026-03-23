const SkillsScroll = () => {
  return (
    <div className=" overflow-hidden">

      <div className="relative w-full overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0a192f] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0a192f] to-transparent z-10"></div>

        {/* Scroll */}
        <div className="flex gap-16 whitespace-nowrap animate-[scroll_25s_linear_infinite] 
        hover:[animation-play-state:paused] text-lg md:text-xl font-medium">

          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">

              <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-[Poppins]">
                Product Design
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-[Poppins]">
                Website Design
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-[Poppins]">
                Dashboard Design
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-[Poppins]">
                Mobile App Design
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-[Poppins]">
                Wireframe Design
              </span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default SkillsScroll;