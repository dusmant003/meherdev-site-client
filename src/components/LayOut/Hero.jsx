import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Hero = () => {

  const typewriter = (
    <Typewriter
      words={["Meher"]}
      loop={true}
      cursor={false} // cursor alag se
      typeSpeed={400}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin size={20} />, url: "https://linkedin.com", bgColor: "bg-blue-600" },
    { name: "Facebook", icon: <FaFacebook size={20} />, url: "https://facebook.com", bgColor: "bg-blue-700" },
    { name: "Twitter", icon: <FaTwitter size={20} />, url: "https://twitter.com", bgColor: "bg-blue-400" },
    { name: "YouTube", icon: <FaYoutube size={20} />, url: "https://youtube.com", bgColor: "bg-red-600" },
    { name: "Instagram", icon: <FaInstagram size={20} />, url: "https://www.instagram.com/dusmant_003/", bgColor: "bg-pink-600" },
    { name: "WhatsApp", icon: <FaWhatsapp size={20} />, url: "https://wa.me/yourphonenumber", bgColor: "bg-green-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center 
    bg-[#0a192f] text-white px-6 md:px-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="max-w-3xl z-10">

        <p className="text-sm text-gray-400 font-bold mb-4">
          Hi, my self
        </p>

        {/* 🔥 Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">

          {/* Dusmant (constant gradient) */}
          <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
            Dusmant
          </span>

          {/* Meher (typing) */}
          <span className="text-gray-200 ml-2">
            {typewriter}
          </span>

          {/* Blinking cursor */}
          <span className="ml-1 text-white animate-[blink_1s_infinite]">
            |
          </span>

        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6">
          I'm a Full Stack Developer.
        </h2>

        <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
          I build modern, scalable, and high-performance web applications.
        </p>

        <button className="hidden md:block px-5 py-2 rounded-xl text-white 
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
        shadow-[0_0_15px_rgba(139,92,246,0.5)]
        hover:scale-105 transition duration-300">
          View Work
        </button>

      </div>
      {/* 🔥 Social Icons (3D Premium) */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0 z-50">
        <ul>
          {socialLinks.map((link, index) => (
            <li
              key={index}
              className={`
        w-[180px] h-[45px] flex justify-between items-center
        ml-[-130px] hover:ml-[-5px]

        ${link.bgColor}

        rounded-r-xl

        shadow-[0_8px_20px_rgba(0,0,0,0.5)]
        hover:shadow-[0_12px_30px_rgba(139,92,246,0.5)]

        hover:-translate-y-1
        active:translate-y-1

        transition-all duration-300
        `}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 text-gray-200 font-medium"
              >
                <span className="flex items-center gap-2">
                  {link.name}
                </span>

                {/* 🔥 Icon box */}
                <span className="w-8 h-8 flex items-center justify-center 
          rounded-md bg-white/10 backdrop-blur-md
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
          text-white">
                  {link.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;