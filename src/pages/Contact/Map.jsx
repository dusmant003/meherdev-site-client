const MapSection = () => {
  return (
    <section className="relative bg-[#0b0f19] py-20">

      {/* 🔥 Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-10">
        <p className="text-purple-400 mb-3">● Location</p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
          Find Me{" "}
          <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
            Here
          </span>
        </h2>
      </div>

      {/* 🔥 Map Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        <div className="relative rounded-2xl overflow-hidden 
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r 
          from-purple-500/10 to-cyan-400/10 blur-xl z-10 pointer-events-none"></div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps?q=Rourkela,Odisha&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0 w-full h-[400px]"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default MapSection;