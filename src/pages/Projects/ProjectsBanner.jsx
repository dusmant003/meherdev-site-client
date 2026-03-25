const ProjectsBanner = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center 
    bg-[#0b0f19] overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl bottom-10 right-10"></div>

      {/* 🔥 Grid Lines Effect */}
      <div className="absolute inset-0 opacity-10 
      bg-[linear-gradient(to_right,gray_1px,transparent_1px),
      linear-gradient(to_bottom,gray_1px,transparent_1px)] 
      bg-[size:60px_60px]"></div>

      {/* 🔥 Content */}
      <div className="text-center z-10" data-aos="zoom-in">

        <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
          My{" "}
          <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
            Projects
          </span>
        </h1>

        {/* Breadcrumb */}
        <p className="mt-4 text-gray-400">
          <span className="hover:text-purple-400 cursor-pointer transition">
            Home
          </span>{" "}
          /{" "}
          <span className="text-cyan-400">
            My Projects
          </span>
        </p>

      </div>

    </section>
  );
};

export default ProjectsBanner;