import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const MyProject = [
    {
        title: "lambodargroupofinstitution.in",
        image: "http://vrindavansmartschool.in/api/siteimages/entrance2.jpg",
        link: "/",
    },
    {
        title: "vridavansmartschool.in",
        image: "http://vrindavansmartschool.in/api/siteimages/entrance2.jpg",
        link: "/https://vrindavansmartschool.in/",
    },
    {
        title: "hkedurite.in",
        image: "http://vrindavansmartschool.in/api/siteimages/entrance2.jpg",
        link: "/",
    },
];

const MyProjects = () => {
    return (
        <section className="bg-[#0b0f19] py-12 overflow-hidden">

            {/* 🔥 Top Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 mb-16 grid md:grid-cols-2 gap-10">

                {/* LEFT TEXT */}
                <div data-aos="fade-right">
                    <p className="text-purple-400 mb-3">● My portfolio</p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-tight">
                        show case of my latest<br />
                        <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
                            projects & creative works
                        </span>
                    </h2>
                </div>

                {/* RIGHT TEXT */}
                <div className="flex flex-col justify-center" data-aos="fade-left">
                    <p className="text-gray-400 mb-6">
                        From concept to completion, these works reflect my commitment to delivering high-quality impactful solutions.
                    </p>

                    <button
                        data-aos="zoom-in"
                        className="w-fit px-6 py-3 rounded-full text-white 
            bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
            shadow-[0_0_20px_rgba(139,92,246,0.5)]
            hover:scale-105 transition duration-300">
                        View All Portfolio
                    </button>
                </div>
            </div>

            {/* 🔥 Auto Scroll Cards */}
            <div className="relative overflow-visible">

                {/* Fade edges */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0f19] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0f19] to-transparent z-10"></div>

                <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-6">

                    {[...MyProject, ...MyProject].map((item, i) => (

                        <Link to={item.link} key={i}>

                            <div
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                className="relative w-72 rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                hover:-translate-y-3 hover:scale-105
                transition-all duration-300 cursor-pointer">

                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Content */}
                                <div className="p-4 relative z-10">

                                    <h3 className="text-sm font-semibold text-gray-200">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-gray-400 mt-1">
                                        Web Development
                                    </p>

                                </div>

                                {/* Arrow (optional but kept for design) */}
                                <div className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center 
                rounded-full 
                bg-gradient-to-r from-purple-500 to-cyan-400 
                text-white shadow-[0_0_10px_rgba(139,92,246,0.6)]">

                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default MyProjects;