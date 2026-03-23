import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-400 to-cyan-400">
         Dusmant
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">Projects</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 py-2 rounded-xl text-white 
        bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
        shadow-[0_0_15px_rgba(139,92,246,0.5)]
        hover:scale-105 transition duration-300">
          Hire Me
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-black/40 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col gap-6 text-gray-300 mt-4">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About</li>
            <li className="hover:text-white transition cursor-pointer">Projects</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>

          <button className="mt-6 w-full px-5 py-3 rounded-xl text-white 
          bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
          shadow-[0_0_15px_rgba(139,92,246,0.5)]
          hover:scale-105 transition duration-300">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;