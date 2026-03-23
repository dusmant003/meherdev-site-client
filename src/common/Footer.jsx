import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-gray-400 pt-16 pb-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-4 gap-10">

        {/* 🔥 Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Dusmant<span className="text-cyan-400">.dev</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Building modern, scalable and high-performance web applications with clean UI/UX.
          </p>
        </div>

        {/* 🔥 Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">

            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-cyan-400 transition">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* 🔥 Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Web Development
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              UI/UX Design
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              Full Stack Apps
            </li>

            <li className="hover:text-cyan-400 transition cursor-pointer">
              API Development
            </li>

          </ul>
        </div>

        {/* 🔥 Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Me</h3>

          <div className="flex gap-4">

            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/5 border border-white/10
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400
              hover:text-white transition">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/dusmant_003" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/5 border border-white/10
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400
              hover:text-white transition">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/5 border border-white/10
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400
              hover:text-white transition">
              <FaFacebook />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/5 border border-white/10
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400
              hover:text-white transition">
              <FaTwitter />
            </a>

          </div>

        </div>
      </div>

      {/* 🔥 Bottom Line */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dusmant. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;