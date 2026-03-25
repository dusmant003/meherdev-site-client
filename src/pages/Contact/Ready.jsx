import React from 'react'

const Ready = () => {
    return (
        <>
            <section className="relative py-16 bg-[#0b0f19] overflow-hidden">

                {/* 🔥 Background Glow */}
                <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl top-0 left-10"></div>
                <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl bottom-0 right-10"></div>

                {/* 🔥 Container */}
                <div className="max-w-7xl mx-auto px-6 md:px-20">

                    <div className="relative flex flex-col md:flex-row items-center justify-between 
        gap-10 p-10 rounded-2xl 
        bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#020617]
        shadow-[0_0_40px_rgba(139,92,246,0.2)] overflow-hidden">

                        {/* Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r 
          from-purple-500/10 to-cyan-400/10 blur-2xl"></div>

                        {/* LEFT CONTENT */}
                        <div className="relative z-10 text-center md:text-left">

                            <h2 className="text-3xl md:text-5xl font-bold text-gray-200">
                                Ready to build your{" "}
                                <span className="text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-cyan-400">
                                    next project?
                                </span>
                            </h2>

                            <p className="text-gray-400 mt-4 max-w-xl">
                                Let’s work together to create something modern, scalable, and
                                impactful for your business.
                            </p>

                        </div>

                        {/* RIGHT BUTTON */}
                        <div className="relative z-10">

                            <button className="px-8 py-4 rounded-full text-white font-semibold
            bg-gradient-to-r from-purple-500 to-cyan-400
            shadow-[0_0_25px_rgba(139,92,246,0.6)]
            hover:scale-110 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]
            transition duration-300">
                                Get Started
                            </button>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Ready