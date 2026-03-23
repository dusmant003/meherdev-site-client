const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center 
    bg-[#0a192f] text-white px-6 md:px-20 overflow-hidden">

      {/* 🔥 Background Glow (keep subtle) */}
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Content */}
      <div className="max-w-3xl z-10">

        {/* Small Intro */}
        <p className="text-sm text-pink-400 mb-4">
          Hi, my self
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Dusmant Meher
        </h1>

        {/* Role */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
          I'm a Full Stack Developer.
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
          I build modern, scalable, and high-performance web applications
          using the latest technologies. I help businesses grow with
          clean and efficient solutions.
        </p>

        {/* Button */}
        <button className="hidden md:block px-5 py-2 rounded-xl text-white 
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
        shadow-[0_0_15px_rgba(139,92,246,0.5)]
        hover:scale-105 transition duration-300">
          View Work
        </button>


      </div>

    </section>
  );
};

export default Hero;