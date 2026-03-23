import { Mail, Phone } from "lucide-react";
import owner from '../../assets/owner.png'

const About = () => {
    return (
        <section className="bg-[#0b0f19] py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

                {/* 🔥 LEFT IMAGE */}
                <div
                    data-aos="zoom-in"
                    className="relative flex justify-center"
                >

                    {/* Glow */}
                    <div className="relative flex justify-center items-center">

                        {/* 🔥 Gradient Border Circle */}
                        <div className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 p-[4px]">

                            {/* 🔥 Inner Glass Circle */}
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800/60 backdrop-blur-md">

                                <img
                                    src={owner}
                                    alt="profile"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* 🔥 RIGHT CONTENT */}
                <div>

                    <p data-aos="fade-up" className="text-purple-400 mb-3">
                        ● About Me
                    </p>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-4xl md:text-5xl font-bold text-gray-200 mb-6"
                    >
                        Who is{" "}
                        <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
                            Dusmant Meher?
                        </span>
                    </h2>

                    {/* 🔥 NEW INTRO PARAGRAPH */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-gray-300 mb-4 text-lg"
                    >
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                            Dusmant Meher
                        </span>
                        , a Full Stack Developer.
                    </p>

                    {/* 🔥 DESCRIPTION */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-gray-400 mb-6 leading-relaxed"
                    >
                        I help businesses grow with modern web design and development
                        solutions. I focus on building scalable, high-performance and
                        visually stunning applications with clean UI and smooth user experience.
                    </p>

                    {/* 🔥 Contact Info */}
                    <div className="space-y-4">

                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="flex items-center gap-4"
                        >
                            <div className="p-3 rounded-xl bg-white/5 
              shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Mail className="text-purple-400" size={20} />
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-gray-200 font-medium">
                                    dusmantameher449@gmail.com
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="flex items-center gap-4"
                        >
                            <div className="p-3 rounded-xl bg-white/5 
              shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                                <Phone className="text-purple-400" size={20} />
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <p className="text-gray-200 font-medium">
                                    +91 9827700148
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* 🔥 EXPERIENCE CARD */}
            <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-16 flex justify-center"
            >
                <div className="px-10 py-8 rounded-2xl 
        bg-white/5 backdrop-blur-xl

        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

        hover:-translate-y-2 hover:scale-105
        transition-all duration-300 text-center">

                    <h3 className="text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
                        2+
                    </h3>

                    <p className="text-gray-400 mt-2">
                        Years Experience
                    </p>

                </div>
            </div>

        </section>
    );
};

export default About;