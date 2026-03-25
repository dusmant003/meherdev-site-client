import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative bg-[#0b0f19] py-20 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div data-aos="fade-right">

          <p className="text-purple-400 mb-3">● Contact Me</p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
            Let’s build your{" "}
            <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
              next big idea
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            I’m Dusmant Meher, a full stack developer. I help businesses
            create modern, scalable, and high-performance web applications.
            Let’s work together and turn your ideas into reality.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg group-hover:scale-110 transition">
                <MapPin />
              </div>
              <p className="text-gray-300">
                Odisha, India
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg group-hover:scale-110 transition">
                <Phone />
              </div>
              <p className="text-gray-300">
                +91 9827700148
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg group-hover:scale-110 transition">
                <Mail />
              </div>
              <p className="text-gray-300">
                dusmantameher449@gmail.com
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          data-aos="fade-left"
          className="relative p-8 rounded-2xl 
          bg-white/5 backdrop-blur-xl 
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>

          <form className="relative z-10 space-y-6">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg bg-white/5 border border-gray-700 
                text-gray-200 focus:outline-none focus:border-purple-400 transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg bg-white/5 border border-gray-700 
                text-gray-200 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg bg-white/5 border border-gray-700 
                text-gray-200 focus:outline-none focus:border-purple-400 transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-lg bg-white/5 border border-gray-700 
                text-gray-200 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-700 
              text-gray-200 focus:outline-none focus:border-purple-400 transition"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white 
              bg-gradient-to-r from-purple-500 to-cyan-400
              shadow-[0_0_20px_rgba(139,92,246,0.6)]
              hover:scale-105 transition duration-300"
            >
              Send Message 
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;