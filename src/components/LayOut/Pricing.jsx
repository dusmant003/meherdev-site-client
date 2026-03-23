const Pricing = () => {
    return (
        <section className="bg-[#0b0f19] py-20 px-6 md:px-20 text-white overflow-hidden">

            {/* 🔥 Heading */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">

                <div>
                    <p className="text-green-400 mb-3">● Our Pricing</p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Choose the right
                        <span className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-cyan-400">
                            plan for project
                        </span>
                    </h2>
                </div>

                <div className="flex items-center">
                    <p className="text-gray-400">
                        Simple one-time pricing based on your project type. No hidden charges.
                    </p>
                </div>
            </div>

            {/* 🔥 Cards */}
            <div className="grid md:grid-cols-3 gap-10">

                {/* 🔥 Custom Card */}
                <div className="group relative p-6 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10

        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

        transform hover:-translate-y-4 hover:scale-105
        transition-all duration-500">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
          opacity-0 group-hover:opacity-100 blur-xl"></div>

                    <h3 className="text-xl font-semibold mb-3 relative z-10">
                        Custom Requirement
                    </h3>

                    <p className="text-gray-400 mb-6 relative z-10">
                        Need something unique? Let's discuss your idea and build custom solution.
                    </p>

                    <button className="px-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-500 to-cyan-400 text-white relative z-10">
                        Contact Now
                    </button>
                </div>

                {/* 🔥 Basic Website */}
                <div className="group relative p-6 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10

        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

        transform hover:-translate-y-4 hover:scale-105
        transition-all duration-500">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
          opacity-0 group-hover:opacity-100 blur-xl"></div>

                    <h3 className="text-xl font-semibold mb-2 relative z-10">
                        Basic Website
                    </h3>

                    <h1 className="text-4xl font-bold text-cyan-400 mb-4 relative z-10">
                        ₹25,000
                    </h1>

                    <ul className="space-y-3 text-gray-300 mb-6 relative z-10">
                        <li>✔ Responsive Design</li>
                        <li>✔ Frontend Development</li>
                        <li>✔ Basic Backend</li>
                        <li>✔ SEO Friendly</li>
                    </ul>

                    <button className="px-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-500 to-cyan-400 text-white relative z-10">
                        Hire Now
                    </button>
                </div>

                {/* 🔥 Portal */}
                <div className="group relative p-6 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10

        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

        transform hover:-translate-y-4 hover:scale-105
        transition-all duration-500">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
          opacity-0 group-hover:opacity-100 blur-xl"></div>

                    {/* Tag */}
                    <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
          bg-gradient-to-r from-purple-500 to-cyan-400 text-black">
                        Advanced
                    </span>

                    <h3 className="text-xl font-semibold mb-2 relative z-10">
                        Web Portal / System
                    </h3>

                    <h1 className="text-4xl font-bold text-cyan-400 mb-4 relative z-10">
                        ₹1,50,000
                    </h1>

                    <ul className="space-y-3 text-gray-300 mb-6 relative z-10">
                        <li>✔ Admin Dashboard</li>
                        <li>✔ Authentication System</li>
                        <li>✔ Database Integration</li>
                        <li>✔ Custom Features</li>
                        <li>✔ Scalable System</li>
                    </ul>

                    <button className="px-5 py-2 rounded-full 
          bg-gradient-to-r from-purple-500 to-cyan-400 text-white relative z-10">
                        Hire Now
                    </button>
                </div>

            </div>

            {/* 🔥 Note */}
            <p className="text-center text-gray-400 text-sm mt-10">
                * Maintenance charges are separate based on project requirements.
            </p>

        </section>
    );
};

export default Pricing;