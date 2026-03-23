import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Hero = () => {
  const typewriter = (
    <Typewriter
      words={["Meher"]}
      loop={true}
      cursor={false}
      typeSpeed={400}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );

  return (
    <section className="relative min-h-screen flex items-center 
    bg-[#0b0f19] text-white px-4 md:px-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* 🔥 Main Layout */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-xl z-10 text-center md:text-left">

          <p className="text-sm text-gray-400 font-bold mb-3">
            Hi, I'm 
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
              Dusmant
            </span>

            <span className="text-gray-200 ml-2">
              {typewriter}
            </span>

            <span className="ml-1 text-white animate-[blink_1s_infinite]">
              |
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-200 mb-5">
            I'm a Full Stack Developer.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
            I build modern, scalable, and high-performance web applications.
          </p>

          {/* ✅ Button visible on mobile */}
          <button className="px-5 py-2 rounded-xl text-white 
          bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
          shadow-[0_0_15px_rgba(139,92,246,0.5)]
          hover:scale-105 transition duration-300">
            View Work
          </button>
        </div>

        {/* 🔥 RIGHT SIDE 3D CUBE */}
        <div className="flex flex-1 justify-center items-center relative">

          {/* Glow */}
          <div className="absolute w-[220px] md:w-[300px] h-[220px] md:h-[300px]
          bg-gradient-to-tr from-purple-500/30 to-cyan-400/30 
          rounded-full blur-3xl"></div>

          {/* Cube (Responsive size) */}
          <div className="cube scale-75 sm:scale-90 md:scale-100">
            <div className="face front">&lt;/&gt;</div>
            <div className="face back">React</div>
            <div className="face right">Node</div>
            <div className="face left">JS</div>
            <div className="face top">API</div>
            <div className="face bottom">DB</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;