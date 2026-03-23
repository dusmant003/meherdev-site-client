import { Link } from "react-router-dom";
import {
  Gem,
  Globe,
  LayoutDashboard,
  Smartphone,
  PencilRuler,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { title: "Product Design", icon: <Gem size={28} />, link: "/product-design" },
  { title: "Website Design", icon: <Globe size={28} />, link: "/website-design" },
  { title: "Dashboard Design", icon: <LayoutDashboard size={28} />, link: "/dashboard-design" },
  { title: "Mobile App Design", icon: <Smartphone size={28} />, link: "/mobile-design" },
  { title: "Wireframe Design", icon: <PencilRuler size={28} />, link: "/wireframe" },
];

const Services = () => {
  return (
    <section className="bg-[#0b0f19] py-20 overflow-hidden">

      {/* 🔥 Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 grid md:grid-cols-2 gap-10">

        {/* LEFT TEXT */}
        <div data-aos="fade-right">
          <p className="text-purple-400 mb-3">● My Specialization</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
            Innovative design and <br />
            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
              development services
            </span>
          </h2>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <p className="text-gray-400 mb-6">
            I create modern, scalable and high-performance digital products 
            with clean UI and smooth user experience.
          </p>

          <button 
            data-aos="zoom-in"
            className="w-fit px-6 py-3 rounded-full text-white 
            bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
            shadow-[0_0_20px_rgba(139,92,246,0.5)]
            hover:scale-105 transition duration-300">
            View All Services
          </button>
        </div>

      </div>

      {/* 🔥 Auto Scroll Cards */}
      <div className="relative overflow-visible">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0f19] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0f19] to-transparent z-10"></div>

        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-6">

          {[...services, ...services].map((item, i) => (

            <Link to={item.link} key={i}>

              <div 
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative w-72 h-64 rounded-2xl p-6 
                bg-white/5 backdrop-blur-xl

                shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

                hover:-translate-y-3 hover:scale-105
                transition-all duration-300 cursor-pointer">

                {/* Glow Aura */}
                <div className="absolute inset-0 rounded-2xl 
                bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
                opacity-0 hover:opacity-100 transition duration-300 blur-xl"></div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center 
                rounded-xl bg-white/5 border border-white/10
                text-purple-400 
                shadow-[0_0_10px_rgba(139,92,246,0.4)]
                mb-6 relative z-10">

                  {item.icon}

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-200 relative z-10">
                  {item.title}
                </h3>

                {/* Arrow */}
                <div className="mt-6 w-10 h-10 flex items-center justify-center 
                rounded-full 
                bg-gradient-to-r from-purple-500 to-cyan-400 
                text-white shadow-[0_0_10px_rgba(139,92,246,0.6)]
                relative z-10">

                  <ArrowUpRight size={18} />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;